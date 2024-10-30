import { CheckCircle2, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { InOrbitIcon } from './ui/in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getSummary } from '../http/get-summary'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { PendingGoals } from './pendingGoals'
import { deleteACompletedGoal } from '../http/delete-completed-goal'

dayjs.locale(ptBr)

export function Summary() {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  })
  if (!data) {
    return null
  }

  async function handleDeleteACompletedGoal(id: string) {
    await deleteACompletedGoal(id)

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }

  const startOfWeek = dayjs().startOf('week').format('D MMM')
  const endOfWeek = dayjs().endOf('week').format('D MMM')
  const completedPercentage = Math.round((data?.completed / data.total) * 100)

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <InOrbitIcon />
          <span className="font-semibold text-lg capitalize">
            {startOfWeek} - {endOfWeek}
          </span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={data?.completed} max={data?.completed}>
          <ProgressIndicator style={{ width: `${completedPercentage}%` }} />
        </Progress>
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou{' '}
            <span className="text-zinc-100">{data?.completed}</span> de{' '}
            <span className="text-zinc-100">{data?.total}</span> metas nessa
            semana.
          </span>
          <span>{completedPercentage}%</span>
        </div>
      </div>

      <Separator />

      <PendingGoals />

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium tracking-tight">Sua semana</h2>

        {Object.entries(data.goalsPerDay).map(([date, goals]) => {
          const nameOfTheDay = dayjs(date).format('dddd')
          const writtenDate = dayjs(date).format('D[ de ]MMMM')
          return (
            <div key={date} className="flex flex-col gap-4">
              <div className="flex items-center gap-1">
                <h3 className="text-base font-medium text-zinc-50 capitalize">
                  {nameOfTheDay}
                </h3>
                <span className="text-xs leading-snug text-zinc-400">
                  ({writtenDate})
                </span>
              </div>

              <ul className="flex flex-col gap-3">
                {goals.map(({ id, title, completedAt }) => {
                  const hourWithMinutes = dayjs(completedAt).format('HH:mm')
                  return (
                    <li key={id} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-pink-500" />
                      <span className="text-sm text-zinc-400">
                        Você completou "
                        <span className="text-zinc-100">{title}</span>" às{' '}
                        <span className="text-zinc-100">
                          {hourWithMinutes}h
                        </span>
                      </span>
                      <button
                        onClick={() => handleDeleteACompletedGoal(id)}
                        type="button"
                        className="text-xs leading-relaxed text-zinc-500 underline hover:text-zinc-600"
                      >
                        Desfazer
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
