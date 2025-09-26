import { db, Todo_a1, User_a1 } from 'astro:db';

export default async function seed() {
	await db.insert(Todo_a1).values([
		{ title: 'Learn Astro', completed: false },
		{ title: 'Learn Qwik', completed: false },
		{ title: 'Learn Alpine', completed: false },
	]);
	console.log('Todo seeded');

	await db.insert(User_a1).values([
		{ id: '1', email: 'user1@example.com', passwordHash: 'password123' },
		{ id: '2', email: 'user2@example.com', passwordHash: 'password123' },
		{ id: '3', email: 'admin@example.com', passwordHash: 'admin123' },
	]);
	console.log('User seeded');
}
