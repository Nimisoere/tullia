import React from "react"
import PageHeader from "../../components/Blades/PageHeader/PageHeader"
import WineTabs from "../../components/Blades/WineTabs/WineTabs"
import Layout from "../../components/Layout/Layout"

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

/* Annual Production:

4700 Cases

PH:

3.40 pH

Alcohol:

13.5 %

Cellar Potential:

5 years

Total Acidity:

6.1 g/l

Residual Sugar:

1.7 g/l */
