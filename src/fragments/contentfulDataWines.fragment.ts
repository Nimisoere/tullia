import { graphql } from "gatsby"

export const wineFragment = graphql`
  fragment wineFragment on ContentfulDataWines {
    id
    contentful_id
    slug
    wineName
    wineCategory
    description {
      raw
    }
    summary {
      summary
    }
    gallery {
      ... on ContentfulAsset {
        fixed {
          src
        }
        title
        description
        gatsbyImageData(width: 480, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    thumbnail {
      ... on ContentfulAsset {
        fixed {
          src
        }
        gatsbyImageData(width: 480, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
  }
`
