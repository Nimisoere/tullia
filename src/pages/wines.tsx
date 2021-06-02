import React from "react"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import Layout from "../components/Layout/Layout"

interface Props {}

const Wines: React.FC<Props> = props => {
  return (
    <Layout>
      <PageHeader title="Our Wines" description="5 Distinct Flavors" />
    </Layout>
  )
}

export default Wines
