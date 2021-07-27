import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

interface Props {
  socialMediaMavData?: any
  footerNavData?: any
}

const Footer: React.FC<Props> = ({ footerNavData, socialMediaMavData }) => {
  const iconMap = {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
  }
  return (
    <div className="w-full bg-secondary text-white">
      <div className="container mx-auto py-8">
        <div className="mb-10 flex flex-col items-center w-full justify-center">
          <div className="bg-white p-4 mb-4">
            <StaticImage
              src="../../../images/logo.jpeg"
              alt="Tulia"
              layout="constrained"
              height={40}
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <nav className="flex flex-wrap items-center">
            {footerNavData?.navigationItems?.map(item => (
              <Link
                key={item.contentful_id}
                className="p-4 text-lg"
                to={`${item?.mainLink?.linkUrl}`}
              >
                {item?.title}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap items-center">
            <nav className="flex flex-wrap items-center">
              {socialMediaMavData?.navigationItems?.map(item => {
                const icon = item?.icon?.split("-")
                return (
                  <a
                    className="p-4 text-lg"
                    key={item.contentful_id}
                    href={item?.mainLink?.linkUrl}
                    target={item?.mainLink?.openInNewWindow && "_blank"}
                  >
                    {iconMap[icon[0]]()}
                  </a>
                )
              })}
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
