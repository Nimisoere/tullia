import { graphql, useStaticQuery } from "gatsby"
import React from "react"

interface Props {}

const metadataQuery = graphql`
  query {
    allContentfulDataWines(sort: { fields: createdAt, order: ASC }) {
      edges {
        node {
          id
          contentful_id
          slug
          wineName
          wineCategory
          summary {
            summary
          }
          image {
            ...assetFragment
          }
          thumbnail {
            ...assetFragment
          }
        }
      }
    }
  }
`

export const useWines = () => {
  const data = useStaticQuery(metadataQuery)
  return data
}
