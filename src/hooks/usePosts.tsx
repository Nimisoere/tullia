import { graphql, useStaticQuery } from "gatsby"
import React from "react"

interface Props {}

const metadataQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            category
            thumbnail
          }
          timeToRead
          excerpt
          html
          fields {
            slug
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
