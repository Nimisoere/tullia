import React from "react"
import { IoIosMenu } from "react-icons/io"
import { getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useWines } from "../../../hooks/useWines"

interface Props {}

const WineTabs: React.FC<Props> = props => {
  const wines = useWines()
  const [showMenu, setShowMenu] = React.useState<boolean>(false)

  return (
    <div className="w-full">
      <div className="bg-gray-100 text-primary">
        <button
          onClick={() => {
            setShowMenu(!showMenu)
          }}
          type="button"
          className="p-4 inline-flex w-full font-serif text-xl bg-gray-200 items-center justify-between sm:hidden"
          aria-label="Show Menu"
        >
          Wine Menu
          <IoIosMenu className="text-4xl" />
        </button>
        <div
          className={`container ${
            showMenu ? "flex" : "hidden"
          } flex-wrap sm:flex justify-center mx-auto`}
        >
          <nav className="flex flex-wrap w-full">
            {wines?.allContentfulDataWines?.edges?.map(edge => {
              const image = getImage(edge.node.thumbnail)
              return (
                <Link
                  key={edge?.node?.contentful_id}
                  to={`/wines/${edge?.node?.slug}`}
                  activeClassName="border-secondary"
                  className="p-4 hover:bg-gray-200 bg-transparent font-light text-lg w-full sm:w-1/5 flex sm:flex-col items-center  border-b-4 border-primary"
                >
                  <img
                    className="h-20"
                    src={edge?.node?.thumbnail?.fixed?.src}
                    alt={edge?.node?.wineName}
                  />
                  <span className="ml-4 font-serif">
                    {edge?.node?.wineName}
                  </span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default WineTabs
