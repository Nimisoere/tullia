import { graphql } from "gatsby"
import React from "react"
import BlogPostSummary from "../components/Blades/BlogPostSummary/BlogPostSummary"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import Layout from "../components/Layout/Layout"
import { usePosts } from "../hooks/usePosts"

interface Props {
  data?: any
}

export const query = graphql`
  query {
    header: contentfulNavNavigation(
      contentful_id: { eq: "7eYCIoBsSzSIXvgk2TNi9A" }
    ) {
      ... on ContentfulNavNavigation {
        ...navigationFragment
      }
    }
    footer: contentfulNavNavigation(
      contentful_id: { eq: "3dY9doPrL5ivj6iH9xJ0nw" }
    ) {
      ... on ContentfulNavNavigation {
        ...navigationFragment
      }
    }
    socialMedia: contentfulNavNavigation(
      contentful_id: { eq: "5tdxvnTJ98vy7R7BkgF9au" }
    ) {
      ... on ContentfulNavNavigation {
        ...navigationFragment
      }
    }
  }
`

const Blog: React.FC<Props> = ({ data }) => {
  const postsData = usePosts()
  return (
    <Layout
      headerNavData={data.header}
      footerNavData={data.footer}
      socialMediaMavData={data.socialMedia}
    >
      <PageHeader
        title="Blog Posts"
        description="What we have to say"
        banner="https://images.ctfassets.net/aj2hdpos2uzm/55euJ4f7xr5XgVWhvYbOMj/2cc70239dbc96b25a4ce219cead07f5b/shutterstock_760350316.jpeg"
      />
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
