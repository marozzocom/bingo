import { styled } from "theme/stitches"
import Link from "components/link/link"
import { ReactNode } from "react"

const GitHub = styled("div", {
  position: "fixed",
  right: "$2",
  bottom: "$2"
})

const StyledLayout = styled("div", {
  width: "100vw",
  boxSizing: "border-box",
  padding: "$3"
})

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <StyledLayout>{children}</StyledLayout>
    <GitHub>
      <Link href="https://github.com/marozzocom/bingo" target="_blank">
        GitHub
      </Link>
    </GitHub>
  </>
)

export default Layout
