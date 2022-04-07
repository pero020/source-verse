import ResponsiveAppBar from "./ResponsiveAppBar"


export default function Layout({ children }) {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <main>{children}</main>
    </>
  )
}