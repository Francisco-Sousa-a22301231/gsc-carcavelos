export const prerender = false;
import type { APIRoute } from 'astro';
import { verifyData } from '../../../lib/auth';

export const POST: APIRoute = async ({ request, locals, cookies }) => {
  const db = (locals as any).runtime?.env?.DB;
  const token = cookies.get('auth_token')?.value;
  if (!token) return new Response(JSON.stringify({ success: false }), { status: 401 });
  const data = await verifyData(token);
  if (!data || data.role !== 'admin') return new Response(JSON.stringify({ success: false }), { status: 403 });
  if (!db) return new Response(JSON.stringify({ success: false }), { status: 500 });

  const { member_id, ano, valor } = await request.json();

  const existing = await db.prepare('SELECT id FROM quotas WHERE member_id = ? AND ano = ?').bind(member_id, ano).first();
  if (existing) {
    await db.prepare("UPDATE quotas SET status = 'Paga', valor = ?, paid_at = datetime('now') WHERE id = ?").bind(valor || 0, existing.id).run();
  } else {
    await db.prepare("INSERT INTO quotas (member_id, ano, status, valor, paid_at) VALUES (?, ?, 'Paga', ?, datetime('now'))").bind(member_id, ano, valor || 0).run();
  }

  return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
};
