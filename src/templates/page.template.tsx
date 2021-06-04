import { graphql, Link } from "gatsby"
import React from "react"
import { IoIosArrowBack } from "react-icons/io"
import Blades from "../components/Blades/Blades"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import QuickLinks from "../components/Blades/QuickLinks/QuickLinks"
import Layout from "../components/Layout/Layout"

interface Props {
  data: any
}

export const query = graphql`
  query($relativePath: String!) {
    contentfulPage(relativePath: { eq: $relativePath }) {
      id
      contentful_id
      relativePath
      pageTitle
      showQuickLinks
      pageDescription {
        pageDescription
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
        ... on ContentfulNavNavigation {
          id
          contentful_id
          __typename
          navigationItems {
            ... on ContentfulNavNavigationItem {
              __typename
              title
              itemVariant
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
          slides {
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
  }
`

const Page: React.FC<Props> = ({ data }) => {
  const page = data.contentfulPage
  return (
    <Layout>
      {!page.hidePageHeader && (
        <PageHeader
          title={page.pageTitle}
          description={page?.pageDescription?.pageDescription}
        />
      )}
      {page?.showQuickLinks ? (
        <div className="container flex flex-wrap font-light mx-auto py-20">
          <div className="w-full sm:w-1/3 mb-10">
            <QuickLinks />
          </div>
          <div className="w-full max-w-3xl  sm:w-2/3 mb-10">
            <Blades blades={page?.blades || []} />{" "}
          </div>
        </div>
      ) : (
        <Blades blades={page?.blades || []} />
      )}
    </Layout>
  )
}

export default Page
