import React from "react"
import Slider from "react-slick"

import ContactCard from "../ContactCard/ContactCard"
import HeroBlade from "../HeroBlade/HeroBlade"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface Props {
  blade: any
}

const Carousel: React.FC<Props> = ({ blade }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: blade.slides[0].__typename === "ContentfulBladeHero" ? 1 : 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }
  const Slides = blade.slides?.map((slide: any, index: number) => {
    if (slide.__typename === "ContentfulBladeContactCard") {
      return <ContactCard key={slide.contentfulId} slide={slide} />
    }
    if (slide.__typename === "ContentfulBladeHero") {
      return <HeroBlade key={slide.contentfulId} blade={slide} />
    }
    return <React.Fragment key={slide.contentfulId}></React.Fragment>
  })
  return <Slider {...settings}>{Slides}</Slider>
}

export default Carousel
