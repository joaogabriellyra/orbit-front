import type { createGoalFromForm } from '../interfaces/igoal'

export async function createAGoal({
  title,
  desiredWeeklyFrequency,
}: createGoalFromForm) {
  await fetch('http://localhost:3333/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, desiredWeeklyFrequency }),
  })
}
