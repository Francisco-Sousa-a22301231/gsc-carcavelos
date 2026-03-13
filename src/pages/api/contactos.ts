export const prerender = false;
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  const db = (locals as any).runtime?.env?.DB;
  if (!db) return new Response(JSON.stringify({ success: false, error: 'Base de dados não disponível.' }), { status: 500 });

  const body = await request.json();
  const { nome, email, assunto, mensagem } = body;

  if (!nome || !email || !mensagem) {
    return new Response(JSON.stringify({ success: false, error: 'Nome, email e mensagem são obrigatórios.' }), { status: 400 });
  }

  await db.prepare('INSERT INTO contacts (nome, email, assunto, mensagem) VALUES (?, ?, ?, ?)')
    .bind(nome, email, assunto || '', mensagem).run();

  return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
};
