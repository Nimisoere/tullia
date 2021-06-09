import { graphql } from "gatsby"

export const contactCardFragment = graphql`
  fragment contactCardFragment on ContentfulBladeContactCard {
    id
    contentful_id
    __typename
    title
    phoneNumber
    address {
      address
    }
    emails
    image {
      file {
        url
      }
    }
  }
`
