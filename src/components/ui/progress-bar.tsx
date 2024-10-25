import * as ProgressPrimite from '@radix-ui/react-progress'

export function Progress(props: ProgressPrimite.ProgressProps) {
  return (
    <ProgressPrimite.Progress
      {...props}
      className="bg-zinc-900 rounded-full h-2"
    />
  )
}

export function ProgressIndicator(
  props: ProgressPrimite.ProgressIndicatorProps
) {
  return (
    <ProgressPrimite.Indicator
      {...props}
      className="bg-gradient-to-r from-pink-500 to-violet-500 w-1/2 h-2 rounded-full"
    />
  )
}
