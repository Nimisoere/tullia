import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { options } from "../../../templates/blog.template"
import WineCard from "./WineCard"

interface Props {
  wine: any
}

const WineDisplay: React.FC<Props> = ({ wine }) => {
  const document = wine?.description
  return (
    <div className="w-full">
      <div className="container mx-auto py-20">
        <WineCard wine={wine} />
      </div>
      <div className="w-full py-20 bg-gray-100">
        <div className="container mx-auto text-xl max-w-2xl">
          {document && renderRichText(document, options)}
        </div>
      </div>
    </div>
  )
}

export default WineDisplay
