import React from "react"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

const WineDisplay = (props: Props) => {
  return (
    <div className="w-full">
      <div className="container flex mx-auto py-20">
        <div className="w-1/3 flex justify-end items-center">
          <StaticImage
            src="../../../images/wine-1.png"
            alt="Tulia"
            imgClassName="w-full"
            layout="constrained"
            placeholder="blurred"
          />
        </div>
      </div>
    </div>
  )
}

export default WineDisplay
