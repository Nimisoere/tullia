import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"

interface Props {
  data?: any
}

export const query = graphql`
  query {
    header: contentfulNavNavigation(
      contentful_id: { eq: "7eYCIoBsSzSIXvgk2TNi9A" }
    ) {
      ... on ContentfulNavNavigation {
        ...navigationFragment
      }
    }
    footer: contentfulNavNavigation(
      contentful_id: { eq: "3dY9doPrL5ivj6iH9xJ0nw" }
    ) {
      ... on ContentfulNavNavigation {
        ...navigationFragment
      }
    }
    socialMedia: contentfulNavNavigation(
      contentful_id: { eq: "5tdxvnTJ98vy7R7BkgF9au" }
    ) {
      ... on ContentfulNavNavigation {
        ...navigationFragment
      }
    }
  }
`

const NotFound: React.FC<Props> = ({ data }) => {
  return (
    <Layout
      headerNavData={data.header}
      footerNavData={data.footer}
      socialMediaMavData={data.socialMedia}
    >
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-6xl">404 |</h1>
        <p>Page not found</p>
      </div>
    </Layout>
  )
}

export default NotFound
