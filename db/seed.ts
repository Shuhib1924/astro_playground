import { db, Todo } from 'astro:db';

export default async function seed() {
	await db.insert(Todo).values([
		{ title: 'Learn Astro', completed: false },
		{ title: 'Learn Qwik', completed: false },
		{ title: 'Learn Alpine', completed: false },
	]);
	console.log('Todo seeded');
}
