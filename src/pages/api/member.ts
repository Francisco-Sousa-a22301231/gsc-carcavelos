export const prerender = false;
import type { APIRoute } from 'astro';
import { verifyData } from '../../lib/auth';

export const GET: APIRoute = async ({ locals, cookies }) => {
  const db = (locals as any).runtime?.env?.DB;
  const token = cookies.get('auth_token')?.value;
  if (!token) return new Response(JSON.stringify({ success: false }), { status: 401 });
  const data = await verifyData(token);
  if (!data) return new Response(JSON.stringify({ success: false }), { status: 401 });
  if (!db) return new Response(JSON.stringify({ success: false }), { status: 500 });

  const member = await db.prepare('SELECT id, nome, email, nascimento, nif, morada, telemovel, categoria, sport_ids, created_at FROM members WHERE email = ?').bind(data.email).first();
  if (!member) return new Response(JSON.stringify({ success: false }), { status: 404 });

  const quotas = await db.prepare('SELECT * FROM quotas WHERE member_id = ? ORDER BY ano DESC').bind(member.id).all();

  return new Response(JSON.stringify({ success: true, member, quotas: quotas.results }), { headers: { 'Content-Type': 'application/json' } });
};
