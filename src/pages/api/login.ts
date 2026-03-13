export const prerender = false;
import type { APIRoute } from 'astro';
import { signData } from '../../lib/auth';
import bcrypt from 'bcryptjs';

export const POST: APIRoute = async ({ request, locals }) => {
  const db = (locals as any).runtime?.env?.DB;
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return new Response(JSON.stringify({ success: false, error: 'Email e password são obrigatórios.' }), { status: 400 });
  }

  // Admin login
  const adminPassword = (locals as any).runtime?.env?.ADMIN_PASSWORD || 'admin123';
  if (email === 'admin@gscarcavelos.org' && password === adminPassword) {
    const token = await signData({ email, role: 'admin' });
    return new Response(JSON.stringify({ success: true, role: 'admin' }), {
      headers: {
        'Set-Cookie': `auth_token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`,
        'Content-Type': 'application/json',
      },
    });
  }

  if (!db) {
    return new Response(JSON.stringify({ success: false, error: 'Base de dados não disponível.' }), { status: 500 });
  }

  const member = await db.prepare('SELECT * FROM members WHERE email = ?').bind(email).first();
  if (!member || !member.password) {
    return new Response(JSON.stringify({ success: false, error: 'Email ou password incorretos.' }), { status: 401 });
  }

  const valid = await bcrypt.compare(password, member.password);
  if (!valid) {
    return new Response(JSON.stringify({ success: false, error: 'Email ou password incorretos.' }), { status: 401 });
  }

  const token = await signData({ email, role: 'member', memberId: member.id });
  return new Response(JSON.stringify({ success: true, role: 'member' }), {
    headers: {
      'Set-Cookie': `auth_token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`,
      'Content-Type': 'application/json',
    },
  });
};
