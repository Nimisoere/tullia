import { graphql } from "gatsby"
import { navigate } from "gatsby-link"
import React from "react"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import WineTabs from "../components/Blades/WineTabs/WineTabs"
import Layout from "../components/Layout/Layout"
import { useWines } from "../hooks/useWines"

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

const Wines: React.FC<Props> = ({ data }) => {
  const wines = useWines()
  React.useEffect(() => {
    navigate(`/wines/${wines?.allContentfulDataWines?.edges[0]?.node?.slug}`)
  }, [wines?.allContentfulDataWines?.edges[0]?.node?.slug])
  return (
    <Layout
      headerNavData={data.header}
      footerNavData={data.footer}
      socialMediaMavData={data.socialMedia}
    >
      <PageHeader title="Our Wines" description="5 Distinct Flavors" />
      <WineTabs />
    </Layout>
  )
}

export default Wines
