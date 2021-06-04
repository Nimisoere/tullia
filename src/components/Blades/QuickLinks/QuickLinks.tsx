import { Link } from "gatsby"
import React from "react"
import { usePages } from "../../../hooks/usePages"

interface Props {}

const QuickLinks = (props: Props) => {
  const pages = usePages()
  const quickLinks = pages?.allContentfulPage?.edges?.filter(
    edge => edge?.node?.showQuickLinks
  )
  return (
    <nav className="flex flex-col max-w-sm mb-8">
      <h4 className="font-medium mb-4">Quick Links</h4>

      {quickLinks?.map(link => (
        <Link
          key={link.node.id}
          activeClassName="text-secondary"
          className="border-b border-dotted border-geay-200 py-4"
          to={`/${link.node.relativePath}`}
        >
          {link.node.pageTitle}
        </Link>
      ))}
    </nav>
  )
}

export default QuickLinks
