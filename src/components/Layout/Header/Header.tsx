import { Link } from "gatsby"
import React from "react"
import { IoIosMenu } from "react-icons/io"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

const Header = (props: Props) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false)

  return (
    <div className="h-auto sm:h-16 sticky top-0 w-full flex items-stretch text-white bg-primary">
      <div className="container items-stretch flex flex-wrap relative justify-between mx-auto">
        <div className="flex flex-wrap items-stretch justify-center">
          <StaticImage
            src="../../images/logo.png"
            alt="Tulia"
            placeholder="blurred"
          />
        </div>
        <button
          onClick={() => {
            setShowMenu(!showMenu)
          }}
          type="button"
          className="my-2 inline-flex sm:hidden"
          aria-label="Show Menu"
        >
          <IoIosMenu className="text-4xl" />
        </button>
        <nav
          className={`${
            showMenu ? "flex" : "hidden"
          } sm:flex flex-col absolute top-12 bg-primary left-0 sm:relative sm:flex-row w-full sm:w-auto flex-wrap sm:flex-nowrap text-sm items-stretch justify-center`}
        >
          <Link
            activeClassName="text-secondary"
            className="flex items-center justify-center py-2 sm:px-4 sm:py-0"
            to="/"
          >
            Home
          </Link>
          <Link
            activeClassName="text-secondary"
            className="flex items-center justify-center py-2 sm:px-4 sm:py-0"
            to="/our-story"
          >
            Our Story
          </Link>
          <Link
            activeClassName="text-secondary"
            className="flex items-center justify-center py-2 sm:px-4 sm:py-0"
            to="/wines"
          >
            Our Wines
          </Link>
          <Link
            activeClassName="text-secondary"
            className="flex items-center justify-center py-2 sm:px-4 sm:py-0"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            activeClassName="text-secondary"
            className="flex items-center justify-center py-2 sm:px-4 sm:py-0"
            to="/contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
