import { styled } from "theme/stitches"
import { createTransition, durations } from "theme/transition"
import { ComponentProps, ForwardedRef, forwardRef } from "react"

const StyledButton = styled("button", {
  backgroundColor: "transparent",
  color: "$text",
  border: "none",
  px: "$2",
  py: "$1",
  margin: "$1",
  fontFamily: "$sans",
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
    visuallyDisabled: {
      true: {
        pointerEvents: "none",
        opacity: "0.5"
      }
    }
  }
})

type Props = ComponentProps<typeof StyledButton> & {
  small?: boolean
  disabled?: boolean
}

const Button = forwardRef(
  (props: Props, forwardedRef: ForwardedRef<HTMLButtonElement>) => {
    return (
      <StyledButton
        ref={forwardedRef}
        visuallyDisabled={props.disabled}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export default Button
