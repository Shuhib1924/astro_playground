import { defineDb, defineTable, column, NOW } from 'astro:db'

// https://astro.build/db/config
export default defineDb({
  tables: {
    Todo_a1: defineTable({
      columns: {
        id: column.number({ primaryKey: true, autoIncrement: true, unique: true }),
        title: column.text(),
        completed: column.boolean({ default: false }),
        priority: column.number({ default: 0 }),
        createdAt: column.date({ default: NOW }),
        updatedAt: column.date({ default: NOW, onUpdate: NOW }),
      }
    }),
    User_a1: defineTable({
      columns: {
        // id: column.number({ primaryKey: true, autoIncrement: true, unique: true }),
        id: column.text({ primaryKey: true, unique: true }),
        email: column.text({ unique: true }),
        passwordHash: column.text(),
        // name: column.text(),
        createdAt: column.date({ default: NOW }),
        updatedAt: column.date({ default: NOW, onUpdate: NOW }),
      }
    })
  },
});
