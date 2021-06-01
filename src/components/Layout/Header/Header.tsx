import { Link } from "gatsby"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

const Header = (props: Props) => {
  return (
    <div className="h-16 w-full flex items-stretch text-white bg-primary">
      <div className="container items-stretch flex justify-between mx-auto">
        <div className="flex items-stretch justify-center">
          <StaticImage
            src="../../images/logo.png"
            alt="Tulia"
            placeholder="blurred"
          />
        </div>
        <nav className="flex text-sm items-stretch justify-center">
          <Link
            activeClassName="text-secondary"
            className="flex items-center justify-center px-4"
            to="/"
          >
            Home
          </Link>
          <Link
            activeClassName="text-secondary"
            className="flex items-center justify-center px-4"
            to="/our-story"
          >
            Our Story
          </Link>
          <Link
            activeClassName="text-secondary"
            className="flex items-center justify-center px-4"
            to="/wines"
          >
            Our Wines
          </Link>
          <Link
            activeClassName="text-secondary"
            className="flex items-center justify-center px-4"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            activeClassName="text-secondary"
            className="flex items-center justify-center px-4"
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
