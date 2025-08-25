import { defineDb, defineTable, column, NOW } from 'astro:db'

// https://astro.build/db/config
export default defineDb({
  tables: {
    Todo_a1: defineTable({
      columns: {
        title: column.text(),
        completed: column.boolean({ default: false }),
        createdAt: column.date({ default: NOW }),
        updatedAt: column.date({ default: NOW, onUpdate: NOW }),
      }
    })
  },
});
