import { globalCss } from "theme/stitches"
import { createTransition, durations } from "theme/transition"

export const globalStyles = globalCss({
  html: {
    backgroundColor: "$background"
  },
  body: {
    fontFamily: `"Patrick Hand"`,
    minHeight: "100vh",
    position: "absolute",
    overflowX: "hidden"
  },
  "*": {
    "&:focus-visible": {
      outline: "2px solid $secondary",
      boxShadow: `0 0 0 1px rgb(40 185 195 / 75 %) inset,
      0 0 0 2px rgb(40 185 195 / 75 %)`
    }
  },

  "@font-face": [
    {
      fontFamily: "Patrick Hand",
      fontStyle: "normal",
      fontWeight: "400",
      src: `url("/patrick-hand.woff2") format("woff2")`,
      fontDisplay: "block"
    }
  ]
})
