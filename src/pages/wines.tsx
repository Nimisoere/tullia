import React from "react"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import WineTabs from "../components/Blades/WineTabs/WineTabs"
import Layout from "../components/Layout/Layout"

interface Props {}

const Wines: React.FC<Props> = props => {
  return (
    <Layout>
      <PageHeader title="Our Wines" description="5 Distinct Flavors" />
      <WineTabs />
    </Layout>
  )
}

export default Wines
