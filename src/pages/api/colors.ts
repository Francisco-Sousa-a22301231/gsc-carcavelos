export const prerender = false;
import type { APIRoute } from 'astro';
import { verifyData } from '../../lib/auth';

export const GET: APIRoute = async ({ locals }) => {
  const db = (locals as any).runtime?.env?.DB;
  if (!db) return new Response(JSON.stringify({ success: true, colors: {} }), { headers: { 'Content-Type': 'application/json' } });

  try {
    const rows = await db.prepare("SELECT key, value FROM site_settings WHERE key LIKE 'color:%'").all();
    const colors: Record<string, string> = {};
    for (const row of rows.results || []) {
      colors[(row as any).key.replace('color:', '')] = (row as any).value;
    }
    return new Response(JSON.stringify({ success: true, colors }), { headers: { 'Content-Type': 'application/json' } });
  } catch {
    return new Response(JSON.stringify({ success: true, colors: {} }), { headers: { 'Content-Type': 'application/json' } });
  }
};

export const POST: APIRoute = async ({ request, locals, cookies }) => {
  const db = (locals as any).runtime?.env?.DB;
  const token = cookies.get('auth_token')?.value;
  if (!token) return new Response(JSON.stringify({ success: false }), { status: 401 });
  const data = await verifyData(token);
  if (!data || data.role !== 'admin') return new Response(JSON.stringify({ success: false }), { status: 403 });
  if (!db) return new Response(JSON.stringify({ success: false }), { status: 500 });

  const body = await request.json();
  for (const [key, value] of Object.entries(body)) {
    await db.prepare("INSERT INTO site_settings (key, value, updated_at) VALUES (?, ?, datetime('now')) ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at")
      .bind(`color:${key}`, value).run();
  }
  return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
};
