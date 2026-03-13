export const prerender = false;
import type { APIRoute } from 'astro';
import { verifyData } from '../../../lib/auth';

export const GET: APIRoute = async ({ locals, cookies }) => {
  const db = (locals as any).runtime?.env?.DB;
  const token = cookies.get('auth_token')?.value;
  if (!token) return new Response(JSON.stringify({ success: false }), { status: 401 });
  const data = await verifyData(token);
  if (!data || data.role !== 'admin') return new Response(JSON.stringify({ success: false }), { status: 403 });
  if (!db) return new Response(JSON.stringify({ success: false }), { status: 500 });

  const events = await db.prepare('SELECT * FROM site_events ORDER BY date DESC').all();
  return new Response(JSON.stringify({ success: true, events: events.results }), { headers: { 'Content-Type': 'application/json' } });
};

export const POST: APIRoute = async ({ request, locals, cookies }) => {
  const db = (locals as any).runtime?.env?.DB;
  const token = cookies.get('auth_token')?.value;
  if (!token) return new Response(JSON.stringify({ success: false }), { status: 401 });
  const data = await verifyData(token);
  if (!data || data.role !== 'admin') return new Response(JSON.stringify({ success: false }), { status: 403 });
  if (!db) return new Response(JSON.stringify({ success: false }), { status: 500 });

  const { title, date, desc, tag, color } = await request.json();
  await db.prepare('INSERT INTO site_events (title, date, desc, tag, color) VALUES (?, ?, ?, ?, ?)')
    .bind(title, date, desc || '', tag || '', color || 'green').run();
  return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
};
