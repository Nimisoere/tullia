import { Link } from "gatsby"
import React from "react"
import * as styles from "./HomeNavigation.module.scss"

interface Props {
  blade: any
}

const HomeNavigation = ({ blade }) => {
  return (
    <div className="w-full flex flex-wrap">
      <Link
        to="our-story"
        className={`${styles["ourstoryLink"]} bg-secondary border-4 border-secondary text-white text-2xl h-64 w-full sm:w-1/3 flex items-center justify-center`}
      >
        <span className="h-full flex justify-center font-serif text-4xl items-center bg-opacity-40 hover:bg-opacity-75 transition-all duration-500 bg-black w-full">
          Our Story
        </span>
      </Link>
      <Link
        to="wines"
        className={`${styles["ourwinesLink"]} bg-secondary border-4 border-secondary text-white text-2xl h-64 w-full sm:w-1/3 flex items-center justify-center`}
      >
        <span className="h-full flex justify-center font-serif text-4xl items-center bg-opacity-40 hover:bg-opacity-75 transition-all duration-500 bg-black w-full">
          Our Wines
        </span>
      </Link>
      <Link
        to="contact"
        className={`${styles["contactusLink"]} bg-secondary border-4 border-secondary text-white text-2xl h-64 w-full sm:w-1/3 flex items-center justify-center`}
      >
        <span className="h-full flex justify-center font-serif text-4xl items-center bg-opacity-40 hover:bg-opacity-75 transition-all duration-500 bg-black w-full">
          Contact Us
        </span>
      </Link>
    </div>
  )
}

export default HomeNavigation
