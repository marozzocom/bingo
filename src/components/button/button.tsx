import { styled } from "theme/stitches"
import { createTransition, durations } from "theme/transition"

const Button = styled("button", {
  backgroundColor: "transparent",
  color: "$text",
  border: "none",
  px: "$2",
  py: "$1",
  margin: "$1",
  fontFamily: "Patrick Hand",
  textTransform: "uppercase",
  fontSize: "$3",
  borderRadius: "$1",
  transition: createTransition(["background-color", "color", "opacity"], {
    duration: durations.fast
  }),

  "&:hover": {
    backgroundColor: "$primary",
    color: "$white"
  },
  variants: {
    small: {
      true: {
        fontSize: "$2",
        px: "$1",
        py: "$1"
      }
    },
    disabled: {
      true: {
        pointerEvents: "none",
        opacity: "0.5"
      }
    }
  }
})

export default Button
