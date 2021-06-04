import React from "react"
import BlogPostSummary from "../components/Blades/BlogPostSummary/BlogPostSummary"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import QuickLinks from "../components/Blades/QuickLinks/QuickLinks"
import Layout from "../components/Layout/Layout"
import { usePosts } from "../hooks/usePosts"

interface Props {}

const Blog: React.FC<Props> = props => {
  const postsData = usePosts()
  return (
    <Layout>
      <PageHeader title="Blog Posts" description="What we have to say" />
      <div className="container flex flex-wrap mx-auto py-20">
        <div className="w-full mx-auto max-w-3xl flex flex-col flex-wrap mb-10">
          {postsData?.allContentfulDataBlogPosts?.edges?.map(post => (
            <BlogPostSummary post={post.node} key={post.node.id} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
