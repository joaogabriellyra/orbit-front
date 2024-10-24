import * as RadioGroupPrimite from '@radix-ui/react-radio-group'
import { CheckCircle2, Circle } from 'lucide-react'

export function RadioGroup(props: RadioGroupPrimite.RadioGroupProps) {
  return (
    <RadioGroupPrimite.RadioGroup {...props} className="flex flex-col gap-2" />
  )
}

export function RadioGroupItem(props: RadioGroupPrimite.RadioGroupItemProps) {
  return (
    <RadioGroupPrimite.RadioGroupItem
      {...props}
      className="group bg-black border border-zinc-900 rounded-lg px-4 py-2.5 flex items-center justify-between outline-none hover:border-zinc-700"
    />
  )
}

export function RadioGroupIndicator() {
  return (
    <>
      <Circle className="size-4 text-zinc-600 group-data-[state=checked]:hidden" />
      <CheckCircle2 className="size-4 text-pink-500 hidden group-data-[state=checked]:inline" />
    </>
  )
}
