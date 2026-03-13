export const prerender = false;
import type { APIRoute } from 'astro';
import bcrypt from 'bcryptjs';

export const POST: APIRoute = async ({ request, locals }) => {
  const db = (locals as any).runtime?.env?.DB;
  if (!db) return new Response(JSON.stringify({ success: false, error: 'Base de dados não disponível.' }), { status: 500 });

  const body = await request.json();
  const { nome, email, nascimento, nif, morada, telemovel, categoria, sugestoes, password, sport_ids } = body;

  if (!nome || !email) {
    return new Response(JSON.stringify({ success: false, error: 'Nome e email são obrigatórios.' }), { status: 400 });
  }

  const existing = await db.prepare('SELECT id FROM members WHERE email = ?').bind(email).first();
  if (existing) {
    return new Response(JSON.stringify({ success: false, error: 'Este email já está registado.' }), { status: 409 });
  }

  const hashedPassword = password ? await bcrypt.hash(password, 10) : null;

  await db.prepare('INSERT INTO members (nome, email, nascimento, nif, morada, telemovel, categoria, sugestoes, password, sport_ids) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(nome, email, nascimento || '', nif || '', morada || '', telemovel || '', categoria || '', sugestoes || '', hashedPassword, sport_ids ? JSON.stringify(sport_ids) : null).run();

  return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
};
