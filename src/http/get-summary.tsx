import type { SummaryType } from '../interfaces/isummary'

export async function getSummary(): Promise<SummaryType> {
  const response = await fetch('http://localhost:3333/goals/summary')
  const data = await response.json()

  return data
}
