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
      ...assetFragment
    }
    image {
      ...assetFragment
    }
    thumbnail {
      ...assetFragment
    }
  }
`
