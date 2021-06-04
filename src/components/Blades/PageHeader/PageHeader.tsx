import React from "react"
import { Helmet } from "react-helmet"
import * as styles from "./PageHeader.module.scss"

interface Props {
  title: string
  description?: string
  banner?: string
}

const PageHeader: React.FC<Props> = ({ title, description, banner }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${
          banner ||
          "https://images.ctfassets.net/aj2hdpos2uzm/6B28FyPwALoMApWCNSS058/a901c3e47d939ab78585f186e5ee7ce0/iStock-1044275790-1.jpeg"
        })`,
      }}
      className={`${styles.PageHeader} flex bg-secondary items-center`}
    >
      <div className="h-full flex justify-center text-4xl items-center bg-opacity-50 hover:bg-opacity-75 transition-all duration-500 bg-black w-full">
        <Helmet title={title} defaultTitle="Tulia Wine" defer={false} />

        <div className="container mx-auto text-white">
          <div className="max-w-xl mx-auto text-center">
            <h1
              className={`font-thin ${
                banner ? "text-secondary" : "text-white"
              } text-5xl mb-4`}
            >
              {title}
            </h1>
            <p className="text-4xl font-thin mb-4 font-serif">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
