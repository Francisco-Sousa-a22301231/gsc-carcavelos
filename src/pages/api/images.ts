export const prerender = false;
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals }) => {
  const db = (locals as any).runtime?.env?.DB;
  if (!db) return new Response(JSON.stringify({ success: true, images: {} }), { headers: { 'Content-Type': 'application/json' } });

  try {
    const rows = await db.prepare("SELECT key, value FROM site_settings WHERE key LIKE 'image:%'").all();
    const images: Record<string, string> = {};
    for (const row of rows.results || []) {
      images[(row as any).key] = (row as any).value;
    }
    return new Response(JSON.stringify({ success: true, images }), { headers: { 'Content-Type': 'application/json' } });
  } catch {
    return new Response(JSON.stringify({ success: true, images: {} }), { headers: { 'Content-Type': 'application/json' } });
  }
};
