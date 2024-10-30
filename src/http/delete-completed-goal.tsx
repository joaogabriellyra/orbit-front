export async function deleteACompletedGoal(id: string) {
  await fetch('http://localhost:3333/goals/completed', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })
}
