import { db } from '../db'
import { goalCompletions, goals } from '../db/schema'
import { getWeekPendingGoals } from './get-week-pending-goals'

interface CreateGoalCompletionRequest {
  goalId: string
}

export async function createGoalCompletion({
  goalId,
}: CreateGoalCompletionRequest) {
  // get completion count

  const result = await db
    .insert(goalCompletions)
    .values({
      goalId,
    })
    .returning()

  const goal = result[0]

  return {
    goal,
  }
}
