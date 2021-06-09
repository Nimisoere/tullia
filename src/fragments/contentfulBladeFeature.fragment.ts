import { graphql } from "gatsby"

export const featureFragment = graphql`
  fragment featureFragment on ContentfulBladeFeature {
    id
    contentful_id
    __typename
    headline
    copy {
      raw
    }
    image {
      file {
        url
      }
    }
  }
`
