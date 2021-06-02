import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="w-full flex flex-col justify-between"
    >
      <Helmet title="Tulia Wine" defer={false} />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
