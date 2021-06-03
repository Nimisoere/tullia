import { graphql, Link } from "gatsby"
import React from "react"
import { IoIosArrowBack } from "react-icons/io"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import Layout from "../components/Layout/Layout"

interface Props {
  data: any
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        date
      }
      html
    }
  }
`

const Blog: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <PageHeader title={data?.markdownRemark?.frontmatter?.title} />
      <div className="w-full bg-gray-100">
        <div className="container mx-auto py-4">
          <Link to="/blog" className="flex items-center">
            <IoIosArrowBack className="mr-2" /> Back to posts
          </Link>
        </div>
      </div>
      <div className="container mx-auto py-20 max-w-5xl">
        <h1 className="text-4xl mb-2 text-primary font-light">
          {data?.markdownRemark?.frontmatter?.title}
        </h1>
        <p className="text-sm text-gray-400 font-light">
          Created: {data?.markdownRemark?.frontmatter?.date}
        </p>

        <div
          className="font-light py-10"
          dangerouslySetInnerHTML={{
            __html: data?.markdownRemark?.html,
          }}
        />
      </div>
    </Layout>
  )
}

export default Blog
