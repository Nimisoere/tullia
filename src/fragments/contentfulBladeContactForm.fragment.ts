import { graphql } from "gatsby"

export const contactFormFragment = graphql`
  fragment contactFormFragment on ContentfulBladeContactForm {
    id
    contentful_id
    __typename
    formId
    formTitle
    primaryCta {
      ... on ContentfulElementCallToAction {
        ...ctaFragment
      }
    }
  }
`
