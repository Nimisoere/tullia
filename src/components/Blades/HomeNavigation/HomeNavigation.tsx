import { Link } from "gatsby"
import React from "react"

interface Props {
  blade: any
}

const HomeNavigation = ({ blade }) => {
  return (
    <div className="w-full flex flex-wrap mb-2">
      {blade?.navigationItems?.map(item => (
        <Link
          key={item.contentfulId}
          to={`${item?.mainLink?.linkUrl}`}
          style={{
            backgroundImage: `url(${item.navigationImage?.file?.url})`,
            backgroundPosition: "50%",
          }}
          className={`bg-primary border-4 border-white bg-cover text-white text-2xl h-64 w-full sm:w-1/3 flex items-center justify-center`}
        >
          <span className="h-full flex justify-center font-serif text-4xl items-center bg-opacity-40 hover:bg-opacity-75 transition-all duration-500 bg-black w-full">
            {item?.title}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default HomeNavigation
