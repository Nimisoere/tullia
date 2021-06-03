import { graphql, Link } from "gatsby"
import React from "react"
import { IoIosArrowBack } from "react-icons/io"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import Layout from "../components/Layout/Layout"

interface Props {
  data: any
}

const Blog: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <PageHeader title="Page" />
    </Layout>
  )
}

export default Blog
