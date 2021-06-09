import { graphql } from "gatsby"

export const heroFragment = graphql`
  fragment heroFragment on ContentfulBladeHero {
    id
    contentful_id
    __typename
    headline
    copy {
      raw
    }
    caption
    backgroundImage {
      ...assetFragment
    }
    ctaPrimary {
      ...ctaFragment
    }
  }
`
