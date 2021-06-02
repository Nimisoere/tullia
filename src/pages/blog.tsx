import React from "react"
import BlogPostSummary from "../components/Blades/BlogPostSummary/BlogPostSummary"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import QuickLinks from "../components/Blades/QuickLinks/QuickLinks"
import Layout from "../components/Layout/Layout"

interface Props {}

const Blog: React.FC<Props> = props => {
  return (
    <Layout>
      <PageHeader title="Blog Posts" description="What we have to say" />
      <div className="container flex flex-wrap mx-auto py-20">
        <div className="w-full sm:w-1/3">
          <QuickLinks />
          <QuickLinks />
        </div>
        <div className="w-full max-w-3xl flex flex-col flex-wrap sm:w-2/3 mb-10">
          <BlogPostSummary />
          <BlogPostSummary />
          <BlogPostSummary />
        </div>
      </div>
    </Layout>
  )
}

export default Blog
