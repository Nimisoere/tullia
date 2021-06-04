import { Link } from "gatsby"
import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"

interface Props {
  blade: any
}

const HeroBlade: React.FC<Props> = ({ blade }) => {
  return (
    <div
      className={`flex items-center`}
      style={{
        backgroundImage: `url(https:${blade.backgroundImage?.file?.url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50%",
        height: "70vh",
      }}
    >
      <div className="flex items-center w-full h-full bg-black bg-opacity-70">
        <div className="container mx-auto text-white">
          <div className="max-w-md">
            <h1 className="font-thin text-secondary text-5xl mb-4">
              {blade.headline}
            </h1>
            <div className="text-4xl font-thin mb-4 font-serif">
              {renderRichText(blade.copy)}
            </div>
            <p className="text-sm mb-5">{blade.caption}</p>
            {!!blade?.ctaPrimary && (
              <Link
                aria-label="Our wines"
                to={blade?.ctaPrimary?.url}
                className={`bg-${blade?.ctaPrimary?.buttonStyle?.toLowerCase()} hover:bg-opacity-90 p-4 text-lg inline-flex items-center justify-center`}
              >
                {blade?.ctaPrimary?.caption}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBlade
