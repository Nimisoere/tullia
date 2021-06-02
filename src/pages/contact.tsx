import React from "react"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import Layout from "../components/Layout/Layout"

interface Props {}

const Contact: React.FC<Props> = props => {
  return (
    <Layout>
      <PageHeader title="Get in touch" description="" />
    </Layout>
  )
}

export default Contact
