import { graphql } from "gatsby"
import { navigate } from "gatsby-link"
import React from "react"
import ImageText from "../components/Blades/ImageText/ImageText"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import WineCard from "../components/Blades/WineTabs/WineCard"
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
    winebanner: contentfulBladeImageText(
      contentful_id: { eq: "4VgIbOzg9egS6pc6aihZgu" }
    ) {
      ... on ContentfulBladeImageText {
        ...imageTextFragment
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
  const {
    allContentfulDataWines: { edges: wines },
  } = useWines()
  return (
    <Layout
      headerNavData={data.header}
      footerNavData={data.footer}
      socialMediaMavData={data.socialMedia}
    >
      <PageHeader
        title="Our Wines"
        description="5 Distinct Flavors"
        banner="https://images.ctfassets.net/aj2hdpos2uzm/37VYKAU6DrCkSnEF6mxzrI/d54c9c9f79df40dddabf773a5eed8e76/Banner2.jpeg"
      />
      <ImageText blade={data.winebanner} />
      <div className="container mx-auto flex flex-wrap py-10">
        {wines?.map(wine => (
          <div
            key={wine.node.contentful_id}
            className="w-full lg:w-1/2 flex items-stretch mb-10"
          >
            <WineCard bottleHeight={300} wine={wine.node} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Wines
