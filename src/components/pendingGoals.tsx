import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getPending } from '../http/get-pending'
import { OutlineButton } from './ui/outline-button'
import { Plus } from 'lucide-react'
import { completeAGoal } from '../http/post-complete-goal'

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPending,
    staleTime: 1000 * 60,
  })

  if (!data) {
    return null
  }

  async function handleCompleteAGoal(goalId: string) {
    await completeAGoal(goalId)

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map(pending => {
        return (
          <OutlineButton
            onClick={() => handleCompleteAGoal(pending.id)}
            key={pending.id}
            disabled={pending.completionCount >= pending.desiredWeeklyFrequency}
          >
            <Plus className="text-zinc-600 size-4" /> {pending.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
