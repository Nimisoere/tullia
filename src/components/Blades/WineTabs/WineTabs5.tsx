import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import WineDisplay from "./WineDisplay5"
import { Link } from "gatsby"

interface Props {}

const WineTabs: React.FC<Props> = props => {
  return (
    <div className="w-full">
      <div className="bg-gray-100  text-primary">
        <div className="container flex justify-center mx-auto">
          <nav className="flex flex-wrap w-full">
            <Link
              to="/wines/rose-sparkling"
              activeClassName="border-secondary"
              className="p-4 hover:bg-gray-200 font-light text-lg w-full sm:w-1/5 flex sm:flex-col items-center  border-b-4 border-primary"
              type="button"
            >
              <StaticImage
                src="../../../images/wine-1.png"
                alt="Tulia"
                imgClassName="w-full"
                height={100}
                layout="constrained"
                placeholder="blurred"
              />
              <span className="ml-4">Rosé Sparkling Wine</span>
            </Link>
            <Link
              to="/wines/demi-sec-sparkling"
              activeClassName="border-secondary"
              className="p-4 font-thin hover:bg-gray-200 text-lg w-full sm:w-1/5 flex sm:flex-col items-center  border-b-4 border-primary"
              type="button"
            >
              <StaticImage
                src="../../../images/wine-2.png"
                alt="Tulia"
                imgClassName="w-full"
                height={100}
                layout="constrained"
                placeholder="blurred"
              />
              <span className="ml-4">Demi-Sec Sparkling Wine</span>
            </Link>
            <Link
              to="/wines/brut-sparkling"
              activeClassName="border-secondary"
              className="p-4 w-full hover:bg-gray-200  sm:w-1/5 font-thin text-lg flex sm:flex-col items-center  border-b-4 border-primary"
              type="button"
            >
              <StaticImage
                src="../../../images/wine-3.png"
                alt="Tulia"
                imgClassName="w-full"
                height={100}
                layout="constrained"
                placeholder="blurred"
              />
              <span className="ml-4">Brut Sparkling Wine</span>
            </Link>
            <Link
              to="/wines/white-wine"
              activeClassName="border-secondary"
              className="p-4 w-full hover:bg-gray-200 sm:w-1/5 font-thin text-lg flex sm:flex-col items-center  border-b-4 border-primary"
              type="button"
            >
              <StaticImage
                src="../../../images/wine-4.png"
                alt="Tulia"
                imgClassName="w-full"
                height={100}
                layout="constrained"
                placeholder="blurred"
              />
              <span className="ml-4">White Wine</span>
            </Link>
            <Link
              to="/wines/red-wine"
              activeClassName="border-secondary"
              className="p-4 w-full hover:bg-gray-200 sm:w-1/5 font-thin text-lg flex sm:flex-col items-center  border-b-4 border-primary"
              type="button"
            >
              <StaticImage
                src="../../../images/wine-5.png"
                alt="Tulia"
                imgClassName="w-full"
                height={100}
                layout="constrained"
                placeholder="blurred"
              />
              <span className="ml-4">Red Wine</span>
            </Link>
          </nav>
        </div>
      </div>

      <WineDisplay />
    </div>
  )
}

export default WineTabs
