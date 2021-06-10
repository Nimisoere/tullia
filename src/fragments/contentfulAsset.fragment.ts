import { graphql } from "gatsby"

export const assetFragment = graphql`
  fragment assetFragment on ContentfulAsset {
    id
    __typename
    contentful_id
    title
    description
    file {
      url
      fileName
      contentType
    }
    constrainedGatsbyImage: gatsbyImageData(
      quality: 100
      layout: CONSTRAINED
      placeholder: BLURRED
    )
    fixedGatsbyImage: gatsbyImageData(
      layout: FIXED
      quality: 100
      placeholder: BLURRED
    )
    fullWidthGatsbyImage: gatsbyImageData(
      layout: FULL_WIDTH
      placeholder: BLURRED
      quality: 100
    )
    fluid {
      base64
      tracedSVG
      aspectRatio
      src
      srcSet
      srcWebp
      srcSetWebp
      sizes
    }
    fixed {
      base64
      tracedSVG
      aspectRatio
      width
      height
      srcSet
      src
      srcWebp
      srcSetWebp
      tracedSVG
    }
  }
`
