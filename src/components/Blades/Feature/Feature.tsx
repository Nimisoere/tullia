import { renderRichText } from "gatsby-source-contentful/rich-text"
import React from "react"
import { options } from "../../../templates/blog.template"

interface Props {
  blade: any
}

const Feature = ({ blade }: Props) => {
  return (
    <div className="w-full p-4 h-full flex flex-col">
      <div className="w-full flex justify-center h-56 bg-secondary">
        <img
          src={blade.image?.file?.url}
          className="h-full max-w-full"
          alt={blade.headline}
        />
      </div>
      <div className="bg-gray-100 p-4 flex text-center flex-col flex-grow">
        <h4 className="font-serif text-secondary text-2xl mb-2">
          {blade.headline}
        </h4>
        <div className="w-full flex flex-col flex-grow items-center justify-center">
          {renderRichText(blade.copy, options)}
        </div>{" "}
      </div>
    </div>
  )
}

export default Feature
