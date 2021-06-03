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
    <Layout>
      <PageHeader title={wineData.wineName} />
      <WineTabs />
      <WineDisplay wine={wineData} />
    </Layout>
  )
}

export default Wine
