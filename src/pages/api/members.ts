export const prerender = false;
import type { APIRoute } from 'astro';
import { verifyData } from '../../lib/auth';

export const GET: APIRoute = async ({ locals, cookies }) => {
  const db = (locals as any).runtime?.env?.DB;
  const token = cookies.get('auth_token')?.value;
  if (!token) return new Response(JSON.stringify({ success: false }), { status: 401 });
  const data = await verifyData(token);
  if (!data || data.role !== 'admin') return new Response(JSON.stringify({ success: false }), { status: 403 });
  if (!db) return new Response(JSON.stringify({ success: false }), { status: 500 });

  const members = await db.prepare(`
    SELECT m.*,
      (SELECT q.status FROM quotas q WHERE q.member_id = m.id ORDER BY q.ano DESC LIMIT 1) as quota_status,
      (SELECT q.ano FROM quotas q WHERE q.member_id = m.id ORDER BY q.ano DESC LIMIT 1) as quota_ano
    FROM members m ORDER BY m.created_at DESC
  `).all();

  return new Response(JSON.stringify({ success: true, members: members.results }), { headers: { 'Content-Type': 'application/json' } });
};
