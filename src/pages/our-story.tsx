import React from "react"
import ImageText from "../components/Blades/ImageText/ImageText"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import Layout from "../components/Layout/Layout"

interface Props {}

const About: React.FC<Props> = props => {
  return (
    <Layout>
      <PageHeader
        title="Our Story"
        description="Introducing you to Tulia Wines"
      />
      <ImageText />
      <ImageText reverse backgroundColor="bg-gray-100" />
      <ImageText />
    </Layout>
  )
}

export default About
