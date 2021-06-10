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
  const defaultBanner =
    "http://images.ctfassets.net/aj2hdpos2uzm/37VYKAU6DrCkSnEF6mxzrI/d54c9c9f79df40dddabf773a5eed8e76/Banner2.jpeg"

  return (
    <div className="flex flex-col items-center justify-center">
      <Helmet title={title} defaultTitle="Tulia Wine" defer={false}>
        <meta name="description" content={description} />
      </Helmet>
      <div className="flex justify-center text-4xl py-4 items-center bg-secondary shadow w-full">
        <div className="container mx-auto text-white">
          <div className="max-w-xl mx-auto text-center">
            <h1 className={`font-light text-white text-3xl mb-2`}>{title}</h1>
            <p className="text-xl text-primary font-thin font-serif">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="w-fullbg-secondary items-center">
        {image ? (
          <GatsbyImage alt={title} objectFit="contain" image={image} />
        ) : (
          <img src={banner || defaultBanner} alt={title} />
        )}
      </div>
    </div>
  )
}

export default PageHeader
