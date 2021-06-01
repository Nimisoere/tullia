import React from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="w-full flex flex-col justify-between"
    >
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
