import type { PendingType } from '../interfaces/ipending'

export async function getPending(): Promise<PendingType> {
  const response = await fetch('http://localhost:3333/goals/pending')
  const data = response.json()

  return data
}
