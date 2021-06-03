import { graphql, useStaticQuery } from "gatsby"
import React from "react"

interface Props {}

const metadataQuery = graphql`
  query {
    allContentfulDataBlogPosts(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          slug
          title
          createdAt(fromNow: true)
          category
          summary {
            summary
          }
          thumbnail {
            file {
              url
            }
          }
        }
      }
    }
  }
`

export const usePosts = () => {
  const data = useStaticQuery(metadataQuery)
  return data
}
