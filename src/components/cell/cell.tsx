import { styled } from "theme/stitches"
import { createTransition, durations, easings } from "theme/transition"

const Cell = styled("div", {
  backgroundColor: "$primary",
  color: "$white",
  placeSelf: "center",
  placeItems: "center",
  display: "grid",
  borderRadius: "$1",
  fontSize: "$5",
  height: "$5",
  width: "$5",
  filter: "none",
  transition: createTransition(
    ["backgroundColor", "filter", "transform", "opacity", "box-shadow"],
    {
      duration: durations.slow,
      easing: easings.easeOut
    }
  ),
  variants: {
    selected: {
      true: {
        backgroundColor: "$secondary",
        boxShadow: "$1",
        transform: "scale(1.125) translateY(-0.125rem)"
      }
    },
    dimmed: {
      true: {
        filter: "blur(0.25rem)",
        opacity: 0.5
      }
    }
  }
})

export default Cell
