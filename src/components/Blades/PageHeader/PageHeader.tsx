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
          "http://images.ctfassets.net/aj2hdpos2uzm/37VYKAU6DrCkSnEF6mxzrI/d54c9c9f79df40dddabf773a5eed8e76/Banner2.jpeg"
        })`,
      }}
      className={`${styles.PageHeader} flex bg-secondary items-center`}
    >
      <div className="h-full flex justify-center text-4xl items-center bg-opacity-50 transition-all duration-500 bg-black w-full">
        <Helmet title={title} defaultTitle="Tulia Wine" defer={false} />

        <div className="container mx-auto text-white">
          <div className="max-w-xl mx-auto text-center">
            <h1 className={`font-light text-secondary text-5xl mb-4`}>
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
