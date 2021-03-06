import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { options } from "../../../templates/blog.template"

interface Props {
  blade?: any
}

const ImageText: React.FC<Props> = ({ blade }) => {
  return (
    <div className={`w-full py-20 ${blade?.backgroundColor}`}>
      <div
        className={`container ${
          blade?.imagePosition === "Right" ? "flex-row-reverse" : "flex-row"
        } flex flex-wrap mx-auto`}
      >
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="max-w-xl w-full mx-auto px-2 mb-10">
            <GatsbyImage
              alt={blade?.headline}
              image={blade?.image?.constrainedGatsbyImage}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 font-light">
          <div className="max-w-lg text-lg">
            <h2 className="font-serif text-secondary text-5xl mb-4">
              {blade.headline}
            </h2>
            {renderRichText(blade.body, options)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageText
