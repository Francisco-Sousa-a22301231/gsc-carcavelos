export const prerender = false;
import type { APIRoute } from 'astro';

export const POST: APIRoute = async () => {
  return new Response(JSON.stringify({ success: true }), {
    headers: {
      'Set-Cookie': 'auth_token=; Path=/; HttpOnly; Max-Age=0',
      'Content-Type': 'application/json',
    },
  });
};
