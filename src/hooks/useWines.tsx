import { graphql, useStaticQuery } from "gatsby"
import React from "react"

interface Props {}

const metadataQuery = graphql`
  query {
    allContentfulDataWines(sort: { fields: createdAt, order: DESC }) {
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
          thumbnail {
            ... on ContentfulAsset {
              fixed {
                src
              }
              gatsbyImageData(
                height: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
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
