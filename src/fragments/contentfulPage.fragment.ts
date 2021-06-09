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
      file {
        url
      }
    }
    hidePageHeader
    blades {
      ... on ContentfulBladeAccordion {
        id
        contentful_id
        __typename
        accordions {
          ... on ContentfulElementAccordion {
            headline
            contentful_id
            __typename
            caption {
              raw
            }
          }
        }
      }
      ... on ContentfulNavNavigation {
        id
        contentful_id
        __typename
        navVariant
        navigationItems {
          ... on ContentfulNavNavigationItem {
            __typename
            title
            itemVariant
            navigationImage {
              file {
                url
              }
            }
            icon
            mainLink {
              linkText
              linkUrl
              openInNewWindow
            }
          }
        }
      }
      ... on ContentfulBladeImageText {
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
          fixed {
            src
          }
        }
      }
      ... on ContentfulBladeRichText {
        id
        contentful_id
        __typename
        content {
          raw
        }
      }
      ... on ContentfulBladeContactForm {
        id
        contentful_id
        __typename
        formId
        formTitle
        primaryCta {
          ... on ContentfulElementCallToAction {
            url
            caption
            buttonStyle
            buttonWidth
          }
        }
      }
      ... on ContentfulBladeCarousel {
        id
        contentful_id
        __typename
        slidesContentType
        useSlider
        wrapperClassName
        itemsPerRow
        slides {
          ... on ContentfulBladeHero {
            id
            contentful_id
            __typename
            headline
            copy {
              raw
            }
            caption
            backgroundImage {
              file {
                url
              }
            }
            ctaPrimary {
              ... on ContentfulElementCallToAction {
                url
                caption
                buttonStyle
                buttonWidth
              }
            }
          }
          ... on ContentfulBladeContactCard {
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
        }
      }
    }
  }
`
