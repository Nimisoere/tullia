import { navigate } from "gatsby-link"
import React from "react"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import WineTabs from "../components/Blades/WineTabs/WineTabs"
import Layout from "../components/Layout/Layout"
import { useWines } from "../hooks/useWines"

interface Props {}

const Wines: React.FC<Props> = props => {
  const wines = useWines()
  React.useEffect(() => {
    navigate(`/wines/${wines?.allContentfulDataWines?.edges[0]?.node?.slug}`)
  }, [wines?.allContentfulDataWines?.edges[0]?.node?.slug])
  return (
    <Layout>
      <PageHeader title="Our Wines" description="5 Distinct Flavors" />
      <WineTabs />
    </Layout>
  )
}

export default Wines
