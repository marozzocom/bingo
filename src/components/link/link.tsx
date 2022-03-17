import { styled } from "theme/stitches"
import { createTransition, durations } from "theme/transition"

const Link = styled("a", {
  fontSize: "$2",
  color: "$text",
  px: "$2",
  py: "$1",
  borderRadius: "$1",
  transition: createTransition(["background-color", "color"], {
    duration: durations.fast
  }),
  "&:hover": {
    backgroundColor: "$primary",
    color: "$white"
  }
})

export default Link
