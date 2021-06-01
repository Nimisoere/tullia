import React from "react"
import Layout from "../components/Layout/Layout"

interface Props {}

const NotFound: React.FC<Props> = props => {
  return (
    <Layout>
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-6xl">404 |</h1>
        <p>Page not found</p>
      </div>
    </Layout>
  )
}

export default NotFound
