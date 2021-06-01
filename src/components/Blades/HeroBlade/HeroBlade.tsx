import { Link } from "gatsby"
import React from "react"
import * as styles from "./HeroBlade.module.scss"

interface Props {}

const HeroBlade: React.FC<Props> = props => {
  return (
    <div className={`${styles.HeroBlade} flex items-center`}>
      <div className="container mx-auto text-white">
        <div className="max-w-md">
          <h1 className="font-thin text-secondary text-5xl">
            Introducing Tulia
          </h1>
          <p className="text-3xl font-thin mb-4">
            Lorem ipsum dolor blah, Lorem ipsum dolor blah….
          </p>
          <p className="text-sm mb-5">
            Avaialble in globally recognized stores
          </p>
          <Link
            aria-label="Our wines"
            to="/wines"
            className="bg-secondary hover:bg-yellow-400 p-4 text-lg inline-flex items-center justify-center"
          >
            View our wines
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBlade
