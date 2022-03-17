import { styled } from "theme/stitches"

const Header = styled("h1", {
  color: "$primary",
  fontSize: "$5",
  fontFamily: "$sans",
  mb: "$2",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  lineHeight: "$4"
})

export default Header
