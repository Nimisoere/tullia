import { Link } from "gatsby"
import React from "react"
import { IoIosMenu } from "react-icons/io"
import { MdClose } from "react-icons/md"

import { StaticImage } from "gatsby-plugin-image"

interface Props {}

const Header = (props: Props) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false)

  return (
    <div className="h-20 shadow sticky top-0 z-10 w-full flex items-stretch text-primary bg-white">
      <div className="container items-stretch flex flex-wrap relative justify-between mx-auto">
        <Link
          to="/"
          className="flex flex-wrap bg-white sm:px-4 items-center justify-center"
        >
          <StaticImage
            src="../../../images/logo.png"
            alt="Tulia"
            layout="fixed"
            height={40}
            placeholder="blurred"
          />
        </Link>
        <button
          onClick={() => {
            setShowMenu(true)
          }}
          type="button"
          className="my-2 inline-flex items-center justify-center sm:hidden"
          aria-label="Show Menu"
        >
          <IoIosMenu className="text-4xl" />
        </button>
        <nav
          className={`${
            showMenu ? "flex" : "hidden"
          } h-full sm:flex flex-col fixed 
          left-0 bg-primary sm:bg-white text-white sm:text-primary sm:relative sm:flex-row w-full sm:w-auto flex-wrap sm:flex-nowrap text-lg sm:text-sm items-stretch justify-center`}
        >
          <button
            onClick={() => {
              setShowMenu(false)
            }}
            type="button"
            className="my-2 inline-flex sm:hidden"
            aria-label="Show Menu"
          >
            <MdClose className="text-4xl absolute right-3 top-3" />
          </button>
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
