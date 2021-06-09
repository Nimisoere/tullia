import { graphql } from "gatsby"

export const ctaFragment = graphql`
  fragment ctaFragment on ContentfulElementCallToAction {
    id
    contentful_id
    __typename
    url
    caption
    buttonStyle
    buttonWidth
  }
`
