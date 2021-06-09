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
      <Helmet title="Tulia Wine" defer={false}>
        <meta name="description" content="Introducing tulia wine" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Helmet>
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
