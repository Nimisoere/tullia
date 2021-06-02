import { Link } from "gatsby"
import React from "react"

interface Props {}

const QuickLinks = (props: Props) => {
  return (
    <nav className="flex flex-col max-w-sm mb-8">
      <h4 className="font-medium mb-4">Quick Links</h4>
      <Link
        activeClassName="text-secondary"
        className="border-b border-dotted border-geay-200 py-4"
        to="/faq"
      >
        Frequently asked questions
      </Link>
      <Link
        activeClassName="text-secondary"
        className="border-b border-dotted border-geay-200 py-4"
        to="/terms-and-conditions"
      >
        Terms and Conditions
      </Link>
      <Link
        activeClassName="text-secondary"
        className="border-b border-dotted border-geay-200 py-4"
        to="/privacy-policy"
      >
        Privacy Policy
      </Link>
    </nav>
  )
}

export default QuickLinks
