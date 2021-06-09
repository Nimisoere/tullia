import { graphql } from "gatsby"

export const imageTextFragment = graphql`
  fragment imageTextFragment on ContentfulBladeImageText {
    id
    contentful_id
    __typename
    imagePosition
    headline
    backgroundColor
    body {
      raw
    }
    image {
      ...assetFragment
    }
  }
`
