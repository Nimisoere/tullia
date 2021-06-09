import { graphql } from "gatsby"

export const assetFragment = graphql`
  fragment assetFragment on ContentfulAsset {
    __typename
    contentful_id
    title
    description
    file {
      url
    }
  }
`
