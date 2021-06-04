import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { options } from "../../../templates/blog.template"

interface Props {
  blade: any
}

const RichText: React.FC<Props> = ({ blade }) => {
  return <div className="">{renderRichText(blade.content, options)}</div>
}

export default RichText
