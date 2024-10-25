import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import logo from './assets/in-orbit-logo.svg'
import womanAndRocket from './assets/woman-and-rocket.svg'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8">
      <img src={logo} alt="in orbit logo" />
      <img src={womanAndRocket} alt="woman and a rocket" />
      <p className="text-center max-w-80 leading-relaxed text-zinc-300">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
