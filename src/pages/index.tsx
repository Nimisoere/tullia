import { Link } from "gatsby"
import React from "react"
import HeroBlade from "../components/Blades/HeroBlade/HeroBlade"
import Layout from "../components/Layout/Layout"
import * as styles from "./index.module.scss"

interface Props {}

const Home: React.FC<Props> = props => {
  console.log(styles)
  return (
    <Layout>
      <HeroBlade />
      <div className="w-full flex">
        <Link
          to="our-story"
          className={`${styles["ourstoryLink"]} bg-secondary border-4 border-secondary text-white text-2xl h-64 w-1/3 flex items-center justify-center`}
        >
          <span className="h-full flex justify-center items-center bg-opacity-40 hover:bg-opacity-75 transition-all duration-500 bg-black w-full">
            Our Story
          </span>
        </Link>
        <Link
          to="wines"
          className={`${styles["ourwinesLink"]} bg-secondary border-4 border-secondary text-white text-2xl h-64 w-1/3 flex items-center justify-center`}
        >
          <span className="h-full flex justify-center items-center bg-opacity-40 hover:bg-opacity-75 transition-all duration-500 bg-black w-full">
            Our Wines
          </span>
        </Link>
        <Link
          to="contact"
          className={`${styles["contactusLink"]} bg-secondary border-4 border-secondary text-white text-2xl h-64 w-1/3 flex items-center justify-center`}
        >
          <span className="h-full flex justify-center items-center bg-opacity-40 hover:bg-opacity-75 transition-all duration-500 bg-black w-full">
            Contact Us
          </span>
        </Link>
      </div>
    </Layout>
  )
}

export default Home
