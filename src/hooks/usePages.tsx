import { graphql, useStaticQuery } from "gatsby"
import React from "react"

interface Props {}

const metadataQuery = graphql`
  query {
    allContentfulPage {
      edges {
        node {
          id
          relativePath
          pageTitle
          showQuickLinks
        }
      }
    }
  }
`

export const usePages = () => {
  const data = useStaticQuery(metadataQuery)
  return data
}
