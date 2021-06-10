import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Helmet } from "react-helmet"

interface Props {
  title: string
  description?: string
  banner?: string
  image?: any
}

const PageHeader: React.FC<Props> = ({ title, description, image, banner }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Helmet title={title} defaultTitle="Tulia Wine" defer={false}>
        <meta name="description" content={description} />
      </Helmet>
      {/*       <div className="flex justify-center text-4xl py-4 items-center bg-secondary shadow w-full">
        <div className="container mx-auto text-white">
          <div className="max-w-xl mx-auto text-center">
            <h1 className={`font-light text-white text-3xl mb-2`}>{title}</h1>
            <p className="text-xl text-primary font-thin font-serif">
              {description}
            </p>
          </div>
        </div>
      </div> */}
      <div className="w-full  items-center">
        {image ? (
          <GatsbyImage
            style={{
              maxHeight: 480,
            }}
            objectPosition="5% left"
            objectFit="cover"
            alt={title}
            image={image}
          />
        ) : (
          <img
            src={banner}
            style={{
              maxHeight: 480,
              objectPosition: "top left",
              objectFit: "cover",
            }}
            className="w-full"
            title={title}
          />
        )}
      </div>
    </div>
  )
}

export default PageHeader
