import React from "react"
import { Helmet } from "react-helmet"
import * as styles from "./PageHeader.module.scss"

interface Props {
  title: string
  description?: string
}

const PageHeader: React.FC<Props> = ({ title, description }) => {
  return (
    <div className={`${styles.PageHeader} flex items-center`}>
      <Helmet title={title} defaultTitle="Tulia Wine" defer={false} />

      <div className="container mx-auto text-white">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="font-thin text-secondary text-5xl mb-4">{title}</h1>
          <p className="text-4xl font-thin mb-4 font-serif">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
