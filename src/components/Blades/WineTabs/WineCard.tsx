import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import ReactMarkdown from "react-markdown"
import { BsArrowRight } from "react-icons/bs"

interface Props {
  wine: any
  bottleHeight?: number
}

const WineCard = ({ wine, bottleHeight }: Props) => {
  return (
    <div className="w-full flex flex-wrap h-full">
      <div className="w-full mb-10 sm:mb-0 md:w-1/5 flex justify-center sm:justify-end items-center">
        <GatsbyImage
          style={{
            height: bottleHeight || 450,
          }}
          objectFit="contain"
          alt={wine?.wineName}
          image={wine?.image?.constrainedGatsbyImage}
        />
      </div>

      <div className="sm:px-10 w-full flex flex-col md:w-4/5">
        <div className="w-full max-w-lg h-full shadow flex flex-col justify-center bg-secondary p-8">
          <h4 className="font-light font-serif capitalize mb-4 flex items-center text-3xl">
            {wine?.wineName}{" "}
          </h4>
          <p className="font-thin text-4xl font-cursive capitalize">
            {wine?.wineCategory}
          </p>
          <ReactMarkdown
            className="font-light flex-grow text-xl py-4"
            children={wine?.summary?.summary}
          />
          <Link className="flex items-center underline mt-6" to={wine?.slug}>
            Read More <BsArrowRight className="ml-3 text-xl" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WineCard
