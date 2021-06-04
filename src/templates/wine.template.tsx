import { graphql } from "gatsby"
import React from "react"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import WineTabs from "../components/Blades/WineTabs/WineTabs"
import WineDisplay from "../components/Blades/WineTabs/WineDisplay"
import Layout from "../components/Layout/Layout"

interface Props {
  data: any
}

export const query = graphql`
  query($slug: String!) {
    header: contentfulNavNavigation(
      contentful_id: { eq: "7eYCIoBsSzSIXvgk2TNi9A" }
    ) {
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
    }
    footer: contentfulNavNavigation(
      contentful_id: { eq: "3dY9doPrL5ivj6iH9xJ0nw" }
    ) {
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
    }
    socialMedia: contentfulNavNavigation(
      contentful_id: { eq: "5tdxvnTJ98vy7R7BkgF9au" }
    ) {
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
    }
    contentfulDataWines(slug: { eq: $slug }) {
      id
      contentful_id
      slug
      wineName
      wineCategory
      description {
        raw
      }
      summary {
        summary
      }
      gallery {
        ... on ContentfulAsset {
          fixed {
            src
          }
          gatsbyImageData(
            width: 480
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      thumbnail {
        ... on ContentfulAsset {
          fixed {
            src
          }
          gatsbyImageData(
            width: 480
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
`
const Wine: React.FC<Props> = ({ data }) => {
  const wineData = data.contentfulDataWines
  return (
    <Layout
      headerNavData={data.header}
      footerNavData={data.footer}
      socialMediaMavData={data.socialMedia}
    >
      <PageHeader title={wineData.wineName} />
      <WineTabs />
      <WineDisplay wine={wineData} />
    </Layout>
  )
}

export default Wine
