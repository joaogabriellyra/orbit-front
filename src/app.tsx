import logo from './assets/in-orbit-logo.svg'
import womanAndRocket from './assets/woman-and-rocket.svg'
import { Plus } from 'lucide-react'

export function App() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-8">
        <img src={logo} alt="in orbit logo" />
        <img src={womanAndRocket} alt="woman and a rocket" />
        <p className="text-center max-w-80 leading-relaxed text-zinc-300">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora
          mesmo?
        </p>
        <button
          type="button"
          className="bg-violet-500 px-4 py-2.5 flex items-center gap-2 rounded-lg text-sm text-violet-50 font-medium tracking-tight hover:bg-violet-600"
        >
          <Plus className="size-4" />
          Cadastrar meta
        </button>
      </div>
    </>
  )
}
