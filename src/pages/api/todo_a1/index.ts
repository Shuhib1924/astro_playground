import { db, Todo_a1 } from 'astro:db';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
    const todos = await db.select().from(Todo_a1);
    return new Response(JSON.stringify(todos));
}