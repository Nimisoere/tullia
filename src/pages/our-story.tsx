import React from "react"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import Layout from "../components/Layout/Layout"

interface Props {}

const About: React.FC<Props> = props => {
  return (
    <Layout>
      <PageHeader title="Our Story" description="Introducing you to Tulia" />
    </Layout>
  )
}

export default About
