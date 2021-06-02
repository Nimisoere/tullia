import React from "react"
import PageHeader from "../../components/Blades/PageHeader/PageHeader"
import WineTabs from "../../components/Blades/WineTabs/WineTabs"
import Layout from "../../components/Layout/Layout"

interface Props {}

const Wines: React.FC<Props> = props => {
  return (
    <Layout>
      <PageHeader title="Rosé Sparkling Wine" description="" />
      <WineTabs />
    </Layout>
  )
}

export default Wines
