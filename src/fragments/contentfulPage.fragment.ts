import { graphql } from "gatsby"

export const pageFragment = graphql`
  fragment pageFragment on ContentfulPage {
    id
    contentful_id
    relativePath
    pageTitle
    showQuickLinks
    pageDescription {
      pageDescription
    }
    pageHeaderBanner {
      ...assetFragment
    }
    hidePageHeader
    blades {
      ... on ContentfulBladeAccordion {
        ...accordionFragment
      }
      ... on ContentfulNavNavigation {
        ...navigationFragment
      }
      ... on ContentfulBladeImageText {
        ...imageTextFragment
      }
      ... on ContentfulBladeRichText {
        ...richTextFragment
      }
      ... on ContentfulBladeContactForm {
        ...contactFormFragment
      }
      ... on ContentfulBladeCarousel {
        ...carouselFragment
      }
    }
  }
`
