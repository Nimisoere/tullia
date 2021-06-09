import { graphql } from "gatsby"

export const richTextFragment = graphql`
  fragment richTextFragment on ContentfulBladeRichText {
    id
    contentful_id
    __typename
    content {
      raw
    }
  }
`
