import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

interface Props {}

const Footer: React.FC<Props> = props => {
  return (
    <div className="w-full bg-primary text-gray-400">
      <div className="container mx-auto py-8">
        <div className="mb-10 flex flex-col items-center w-full justify-center">
          <StaticImage
            src="../../../images/logo.png"
            alt="Tulia"
            layout="fixed"
            height={40}
            placeholder="blurred"
          />
          <p>Lorem ipsum dolor blah….</p>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <nav className="flex flex-wrap items-center">
            <Link className="p-4" to="/faq">
              FAQ
            </Link>
            <Link className="p-4" to="/terms-and-conditions">
              Terms and Conditions
            </Link>
            <Link className="p-4" to="/privacy-policy">
              Privacy policy
            </Link>
            <Link className="p-4" to="/contact">
              Contact Us
            </Link>
          </nav>
          <div className="flex flex-wrap items-center">
            <nav className="flex flex-wrap items-center">
              <Link className="p-4" to="https://facebook.com" target="_blank">
                <FaFacebook />
              </Link>
              <Link className="p-4" to="https://twitter.com">
                <FaTwitter />
              </Link>
              <Link className="p-4" to="https://instragram.com">
                <FaInstagram />
              </Link>
              <Link className="p-4" to="https://linkedin.com">
                <FaLinkedin />
              </Link>
            </nav>
            <span className="p-4">
              &copy; {new Date().getFullYear()}{" "}
              <Link to="/" className="underline">
                Tulia
              </Link>
              . All rights reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
