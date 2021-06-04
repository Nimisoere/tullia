import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

interface Props {
  headerNavData: any
  footerNavData: any
  socialMediaMavData: any
}

const Layout: React.FC<Props> = ({
  children,
  headerNavData,
  footerNavData,
  socialMediaMavData,
}) => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="w-full flex flex-col justify-between"
    >
      <Helmet title="Tulia Wine" defer={false} />
      <Header headerNavData={headerNavData} />
      <main className="flex-grow">{children}</main>
      <Footer
        footerNavData={footerNavData}
        socialMediaMavData={socialMediaMavData}
      />
    </div>
  )
}

export default Layout
