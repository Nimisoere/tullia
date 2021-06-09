import { graphql } from "gatsby"

export const accordionFragment = graphql`
  fragment accordionFragment on ContentfulBladeAccordion {
    id
    contentful_id
    __typename
    accordions {
      ... on ContentfulElementAccordion {
        ...accordionElementFragment
      }
    }
  }
`

export const accordionElementFragment = graphql`
  fragment accordionElementFragment on ContentfulElementAccordion {
    headline
    contentful_id
    __typename
    caption {
      raw
    }
  }
`
