export async function completeAGoal(goalId: string) {
  await fetch('http://localhost:3333/goals/complete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: goalId }),
  })
}
