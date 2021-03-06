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
    contentfulPage(relativePath: { eq: $relativePath }) {
      ...pageFragment
    }
  }
`

const Page: React.FC<Props> = ({ data }) => {
  const page = data.contentfulPage
  return (
    <Layout
      headerNavData={data.header}
      footerNavData={data.footer}
      socialMediaMavData={data.socialMedia}
    >
      {!page.hidePageHeader && (
        <PageHeader
          title={page.pageTitle}
          description={page?.pageDescription?.pageDescription}
          banner={page?.pageHeaderBanner?.file?.url}
          image={page?.pageHeaderBanner?.constrainedGatsbyImage}
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
