import { createStitches } from "@stitches/react"
import type * as Stitches from "@stitches/react"

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      white: "#fff",
      primary: "#65c5c1",
      secondary: "#c79667",
      dimmed: "#a5a882",
      text: "#554545",
      background: "#fcffd6"
    },
    space: {
      0: "none",
      1: "0.3125rem",
      2: "0.625rem",
      3: "1.25rem",
      4: "2.5rem",
      5: "5rem",
      6: "10rem"
    },
    sizes: {
      0: "none",
      1: "0.3125rem",
      2: "0.625rem",
      3: "1.25rem",
      4: "2.5rem",
      5: "5rem",
      6: "10rem",
      area: "500px"
    },
    radii: {
      0: "none",
      1: "3px",
      2: "0.5rem",
      3: "1rem",
      4: "2rem",
      round: "9999px"
    },
    fontSizes: {
      1: "0.625rem",
      2: "0.875rem",
      3: "1.3125rem",
      4: "1.5rem",
      5: "2.5rem"
    },
    lineHeights: {
      1: "1rem",
      2: "2rem",
      3: "2.375rem",
      4: "3.75rem"
    },
    fontWeights: {
      1: 300,
      2: 400,
      3: 600,
      4: 800
    },
    fonts: {
      serif: "Source Serif 4",
      sans: "Outfit"
    },
    shadows: {
      1: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.125)"
    },
    zIndices: {
      0: -1,
      1: 1000,
      2: 2000,
      3: 3000,
      4: 4000
    }
  },
  utils: {
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value
    }),
    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value
    }),
    pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value
    }),
    pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value
    }),
    px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value
    }),

    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value
    }),
    mt: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value
    }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value
    }),
    mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: Stitches.PropertyValue<"marginTop">) => {
      return {
        marginTop: value,
        marginBottom: value
      }
    }
  }
})
