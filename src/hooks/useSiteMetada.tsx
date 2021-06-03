import { graphql, useStaticQuery } from "gatsby"
import React from "react"

interface Props {}

const metadataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`

export const useSiteMetada = () => {
  const data = useStaticQuery(metadataQuery)
  return data
}
