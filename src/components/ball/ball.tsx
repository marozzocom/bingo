import { styled } from "theme/stitches"
import { createTransition, durations } from "theme/transition"
import { keyframes } from "@stitches/react"

const animations = {
  enter: keyframes({
    "0%": {
      transform: "scale(0.85)",
      opacity: 0
    },
    "75%": {
      transform: "scale(1.15)",
      opacity: 1
    },
    "100%": {
      transform: "scale(1)"
    }
  })
}

const Ball = styled("div", {
  borderRadius: "$round",
  backgroundColor: "$secondary",
  display: "inline-grid",
  width: "$4",
  height: "$4",
  placeItems: "center",
  color: "$white",
  margin: "$1",
  fontSize: "$3",
  transition: createTransition(["background-color", "opacity"], {
    duration: durations.subtle
  }),
  animation: createTransition(animations.enter, {
    duration: durations.enter
  }),
  variants: {
    latest: {
      false: {
        opacity: 0.75,
        backgroundColor: "$dimmed"
      }
    }
  }
})

export default Ball
