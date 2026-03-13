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

  const docs = await db.prepare('SELECT * FROM documents ORDER BY created_at DESC').all();
  return new Response(JSON.stringify({ success: true, documents: docs.results }), { headers: { 'Content-Type': 'application/json' } });
};

export const POST: APIRoute = async ({ request, locals, cookies }) => {
  const db = (locals as any).runtime?.env?.DB;
  const token = cookies.get('auth_token')?.value;
  if (!token) return new Response(JSON.stringify({ success: false }), { status: 401 });
  const data = await verifyData(token);
  if (!data || data.role !== 'admin') return new Response(JSON.stringify({ success: false }), { status: 403 });
  if (!db) return new Response(JSON.stringify({ success: false }), { status: 500 });

  const { title, type, url, desc, icon } = await request.json();
  await db.prepare('INSERT INTO documents (title, type, url, desc, icon) VALUES (?, ?, ?, ?, ?)')
    .bind(title, type || '', url, desc || '', icon || '').run();
  return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
};
