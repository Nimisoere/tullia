import { graphql } from "gatsby"

export const carouselFragment = graphql`
  fragment carouselFragment on ContentfulBladeCarousel {
    id
    contentful_id
    __typename
    slidesContentType
    useSlider
    wrapperClassName
    itemsPerRow
    slides {
      ... on ContentfulBladeHero {
        ...heroFragment
      }
      ... on ContentfulBladeContactCard {
        ...contactCardFragment
      }
    }
  }
`
