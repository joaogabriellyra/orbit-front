import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { EmptyGoals } from './components/empty-goals'
import { Summary } from './components/summary'
import { useEffect, useState } from 'react'
import type { SummaryType } from './interfaces/isummary'

export function App() {
  const [summary, setSummary] = useState<SummaryType | null>(null)

  useEffect(() => {
    fetch('http://localhost:3333/goals/summary')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setSummary(data)
      })
  }, [])
  console.log(summary)
  return (
    <Dialog>
      {summary && summary.total > 0 ? <Summary /> : <EmptyGoals />}
      <CreateGoal />
    </Dialog>
  )
}
