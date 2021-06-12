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
    header: contentfulNavNavigation(
      contentful_id: { eq: "7eYCIoBsSzSIXvgk2TNi9A" }
    ) {
      ... on ContentfulNavNavigation {
        ...navigationFragment
      }
    }
    footer: contentfulNavNavigation(
      contentful_id: { eq: "3dY9doPrL5ivj6iH9xJ0nw" }
    ) {
      ... on ContentfulNavNavigation {
        ...navigationFragment
      }
    }
    socialMedia: contentfulNavNavigation(
      contentful_id: { eq: "5tdxvnTJ98vy7R7BkgF9au" }
    ) {
      ... on ContentfulNavNavigation {
        ...navigationFragment
      }
    }
    contentfulDataBlogPosts(slug: { eq: $slug }) {
      ...blogPostFragment
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
      <h1 className="font-semibold font-serif text-5xl mb-2">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="font-semibold font-serif text-4xl mb-2">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="font-semibold font-serif text-3xl mb-2">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="font-semibold font-serif text-2xl mb-2">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="font-semibold font-serif text-xl mb-2">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="font-semibold font-serif text-sm">{children}</h6>
    ),
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const image = getImage(node.data.target)
      return (
        <div className="my-8">
          <GatsbyImage
            image={node.data.target?.constrainedGatsbyImage}
            alt={node.data.target.description}
          />
        </div>
      )
    },
  },
}

const Blog: React.FC<Props> = ({ data }) => {
  const document = data?.contentfulDataBlogPosts?.blogPost
  return (
    <Layout
      headerNavData={data.header}
      footerNavData={data.footer}
      socialMediaMavData={data.socialMedia}
    >
      <PageHeader
        title={data?.contentfulDataBlogPosts?.title}
        description={data?.contentfulDataBlogPosts?.summary?.summary}
        banner="https://images.ctfassets.net/aj2hdpos2uzm/55euJ4f7xr5XgVWhvYbOMj/2cc70239dbc96b25a4ce219cead07f5b/shutterstock_760350316.jpeg"
      />
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
