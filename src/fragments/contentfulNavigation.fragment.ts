import { graphql } from "gatsby"

export const navigationFragment = graphql`
  fragment navigationFragment on ContentfulNavNavigation {
    id
    contentful_id
    __typename
    navVariant
    navigationItems {
      ...navigationItemFragment
    }
  }
`

export const navigationItemFragment = graphql`
  fragment navigationItemFragment on ContentfulNavNavigationItem {
    __typename
    id
    contentful_id
    title
    itemVariant
    navigationImage {
      ...assetFragment
    }
    icon
    mainLink {
      linkText
      linkUrl
      openInNewWindow
    }
  }
`
