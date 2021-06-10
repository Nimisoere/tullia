import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { BsArrowRight } from "react-icons/bs"

interface Props {
  blade: any
}

const HomeNavigation = ({ blade }) => {
  return (
    <div className="w-full bg-gray-100">
      <div className="container mx-auto flex flex-wrap">
        {blade?.navigationItems?.map(item => (
          <Link
            key={item.contentfulId}
            to={`${item?.mainLink?.linkUrl}`}
            className="w-full group sm:w-1/3 p-4"
          >
            <div className="flex flex-col shadow group bg-white relative">
              <div className="absolute top-0 left-0 transition-all transform items-center  justify-center ease-in duration-500 group-hover:flex z-10 hidden w-full h-full bg-white bg-opacity-50">
                <div className="bg-secondary hover:bg-primary text-white  py-3 px-8 flex justify-between items-center text-lg">
                  Explore
                  <BsArrowRight className="ml-4 hover:translate-x-1 transition-all transform" />
                </div>
              </div>
              <div className="w-full flex justify-center h-56 bg-white">
                <GatsbyImage
                  alt={item.title}
                  image={item.navigationImage.constrainedGatsbyImage}
                />
              </div>
              <span className="p-4 text-center text-2xl text-secondary">
                {item?.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomeNavigation
