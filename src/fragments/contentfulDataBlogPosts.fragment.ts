import { graphql } from "gatsby"

export const blogPostFragment = graphql`
  fragment blogPostFragment on ContentfulDataBlogPosts {
    id
    contentful_id
    title
    createdAt(fromNow: true)
    blogPost {
      raw
      references {
        ...assetFragment
      }
    }
  }
`
