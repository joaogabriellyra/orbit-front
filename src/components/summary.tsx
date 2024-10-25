import { CheckCircle2, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { InOrbitIcon } from './ui/in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <InOrbitIcon />
          <span className="font-semibold text-lg">05 a 12 de Agosto</span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator />
        </Progress>
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou <span className="text-zinc-100">8</span> de{' '}
            <span className="text-zinc-100">15</span> metas nessa semana.
          </span>
          <span>58%</span>
        </div>
      </div>

      <Separator />

      <div className="flex flex-wrap gap-3">
        <OutlineButton>
          <Plus className="text-zinc-600 size-4" /> Meditar
        </OutlineButton>
        <OutlineButton>
          <Plus className="text-zinc-600 size-4" /> Praticar exercício
        </OutlineButton>
        <OutlineButton>
          <Plus className="text-zinc-600 size-4" /> Acordar cedo
        </OutlineButton>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium tracking-tight">Sua semana</h2>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <h3 className="text-base font-medium text-zinc-50">Hoje</h3>
            <span className="text-xs leading-snug text-zinc-400">
              (06 de Agosto)
            </span>
          </div>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou "
                <span className="text-zinc-100">Acordar cedo</span>" às{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou "
                <span className="text-zinc-100">Acordar cedo</span>" às{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <h3 className="text-base font-medium text-zinc-50">Ontem</h3>
            <span className="text-xs leading-snug text-zinc-400">
              (05 de Agosto)
            </span>
          </div>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Você completou "
                <span className="text-zinc-100">Acordar cedo</span>" às{' '}
                <span className="text-zinc-100">08:13h</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
