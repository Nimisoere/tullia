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
        ... on ContentfulAsset {
          __typename
          contentful_id
          title
          description
          gatsbyImageData(
            width: 480
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
`
