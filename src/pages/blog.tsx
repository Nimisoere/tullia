import React from "react"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import Layout from "../components/Layout/Layout"

interface Props {}

const Blog: React.FC<Props> = props => {
  return (
    <Layout>
      <PageHeader title="Blog Posts" description="What we have to say" />
    </Layout>
  )
}

export default Blog
