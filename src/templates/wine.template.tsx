import { graphql } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
    contentfulDataWines(slug: { eq: $slug }) {
      ...wineFragment
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
      <PageHeader
        title={wineData.wineName}
        description={wineData.wineCategory}
        banner="https://images.ctfassets.net/aj2hdpos2uzm/55euJ4f7xr5XgVWhvYbOMj/2cc70239dbc96b25a4ce219cead07f5b/shutterstock_760350316.jpeg"
      />
      <WineTabs />
      <WineDisplay wine={wineData} />
      {!!wineData?.gallery?.length && (
        <div className="w-full py-20">
          <div className="container mx-auto">
            <h4 className="font-serif text-secondary text-5xl text-center mb-8">
              Gallery
            </h4>
            <div className="flex flex-wrap border-4 border-secondary max-w-4xl mx-auto p-2">
              {wineData?.gallery?.map(item => {
                return (
                  <div key={item.contentful_id} className="w-full sm:w-1/3 p-2">
                    <GatsbyImage
                      image={item?.constrainedGatsbyImage}
                      alt={item.description}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Wine
