import React from "react"
import ReactMarkdown from "react-markdown"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { options } from "../../../templates/blog.template"

interface Props {
  wine: any
}

const WineDisplay: React.FC<Props> = ({ wine }) => {
  const document = wine?.description
  return (
    <div className="w-full">
      <div className="container flex flex-wrap mx-auto py-20">
        <div className="w-full mb-10 sm:mb-0 sm:w-1/3 flex justify-center sm:justify-end items-center">
          <img src={wine?.thumbnail?.fixed?.src} alt={wine?.wineName} />
        </div>
        <div className="sm:px-10 w-full sm:w-2/3">
          <div className="w-full max-w-lg shadow bg-secondary p-8">
            <h4 className="font-light font-serif capitalize mb-4 flex items-center text-3xl">
              {wine?.wineName}{" "}
              <span className="font-thin ml-4 text-4xl font-cursive capitalize">
                {wine?.wineCategory}
              </span>
            </h4>

            <ReactMarkdown
              className="font-light py-4"
              children={wine?.summary?.summary}
            />
          </div>
        </div>
      </div>

      <div className="w-full py-20 bg-gray-100">
        <div className="container mx-auto max-w-2xl">
          {document && renderRichText(document, options)}
        </div>
      </div>
    </div>
  )
}

export default WineDisplay
