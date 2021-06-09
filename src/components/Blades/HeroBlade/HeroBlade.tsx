import { Link } from "gatsby"
import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage } from "gatsby-plugin-image"

interface Props {
  blade: any
}

const HeroBlade: React.FC<Props> = ({ blade }) => {
  return (
    <div className={`flex items-center relative`}>
      <GatsbyImage
        style={{
          height: "70vh",
          minHeight: 553,
        }}
        image={blade.backgroundImage?.fixedGatsbyImage}
        alt={blade.headline}
      />
      <div className="absolute w-full bottom-0 left-0 bg-black bg-opacity-75 p-4">
        <div className="container flex flex-wrap items-center mx-auto text-white">
          <div className="flex-grow">
            <h1 className="font-thin font-cursive leading-10 text-secondary text-6xl mb-2">
              {blade.headline}
            </h1>
            <div className="text-xl font-thin mb-2">
              {renderRichText(blade.copy)}
            </div>
          </div>
          {!!blade?.ctaPrimary && (
            <div>
              <Link
                aria-label="Our wines"
                to={blade?.ctaPrimary?.url}
                className={`bg-${blade?.ctaPrimary?.buttonStyle?.toLowerCase()} hover:bg-opacity-90 p-4 mb-2 text-lg inline-flex items-center justify-center`}
              >
                {blade?.ctaPrimary?.caption}
              </Link>
              <p className="text-sm">{blade.caption}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroBlade
