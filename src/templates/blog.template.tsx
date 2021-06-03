import { graphql, Link } from "gatsby"
import React from "react"
import { IoIosArrowBack } from "react-icons/io"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import PageHeader from "../components/Blades/PageHeader/PageHeader"
import Layout from "../components/Layout/Layout"

interface Props {
  data: any
}

export const query = graphql`
  query($slug: String!) {
    contentfulDataBlogPosts(slug: { eq: $slug }) {
      title
      createdAt(fromNow: true)
      blogPost {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            title
            description
            gatsbyImageData(
              width: 480
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`

export const options = {
  renderMark: {
    [MARKS.BOLD]: text => <span className="font-medium">{text}</span>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="font-semibold text-5xl">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="font-semibold text-4xl">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="font-semibold text-3xl">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="font-semibold text-2xl">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="font-semibold text-xl">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="font-semibold text-lg">{children}</h6>
    ),
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const image = getImage(node.data.target)
      return (
        <div className="my-8">
          <GatsbyImage image={image} alt={node.data.target.description} />
        </div>
      )
    },
  },
}

const Blog: React.FC<Props> = ({ data }) => {
  const document = data?.contentfulDataBlogPosts?.blogPost
  return (
    <Layout>
      <PageHeader title={data?.contentfulDataBlogPosts?.title} />
      <div className="w-full bg-gray-100">
        <div className="container mx-auto py-4">
          <Link to="/blog" className="flex items-center">
            <IoIosArrowBack className="mr-2" /> Back to posts
          </Link>
        </div>
      </div>
      <div className="container mx-auto py-20 max-w-5xl">
        <h1 className="text-4xl border-secondary border-l-4 pl-4 mb-2 text-primary font-light">
          {data?.contentfulDataBlogPosts?.title}
        </h1>
        <p className="text-sm text-gray-400 font-light">
          Created: {data?.contentfulDataBlogPosts?.createdAt}
        </p>
        <div className="py-10">
          {document && renderRichText(document, options)}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
