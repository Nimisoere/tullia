import React from "react"
import HeroBlade from "../components/Blades/HeroBlade/HeroBlade"
import Layout from "../components/Layout/Layout"

interface Props {}

const Home: React.FC<Props> = props => {
  return (
    <Layout>
      <HeroBlade />
    </Layout>
  )
}

export default Home
