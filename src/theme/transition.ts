// Adapted from https://github.com/mui-org/material-ui/blob/master/packages/mui-material/src/styles/createTransitions.js

const easings = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
} as const

const durations = {
  fast: "150ms",
  default: "300ms",
  slow: "375ms",
  subtle: "725ms",
  enter: "225ms",
  exit: "195ms"
} as const

type TransitionOptions = {
  duration?: number | string // numbers will be formatted as ms
  easing?: string
  delay?: number | string // numbers will be formatted as ms
}
type Props = string | string[] | unknown

const formatMs = (input: string | number) =>
  typeof input === "number" ? `${Math.round(input)}ms` : input

const createTransition = (
  props: Props = ["all"],
  options: TransitionOptions = {}
) => {
  const {
    duration = durations.default,
    easing = easings.easeInOut,
    delay = 0
  } = options

  return [props]
    .flat()
    .map((prop) => `${prop} ${formatMs(duration)} ${easing} ${formatMs(delay)}`)
    .join(",")
}

export { durations, easings, createTransition }
