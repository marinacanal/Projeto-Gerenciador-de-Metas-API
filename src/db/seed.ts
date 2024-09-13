// popula o banco com dados ficticios,
// caso vc queira mandar p alguem testar e nao quer deixar a aplicacao vazia KKKK

import { client, db } from '.'
import { goalCompletions, goals } from './schema'

console.log('DATABASE_URL:', process.env.DATABASE_URL)

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const result = await db
    .insert(goals)
    .values([
      { title: 'Acordar cedo', desiredWeeklyFrequency: 5 },
      { title: 'Me exercitar', desiredWeeklyFrequency: 3 },
      { title: 'Meditar', desiredWeeklyFrequency: 1 },
    ])
    .returning()

  await db.insert(goalCompletions).values([
    { goalId: result[0].id, createdAt: new Date() },
    { goalId: result[1].id, createdAt: new Date() },
  ])
}

seed().finally(() => {
  client.end()
})
