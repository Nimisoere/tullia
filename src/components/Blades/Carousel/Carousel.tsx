import React from "react"
import Slider from "react-slick"

import ContactCard from "../ContactCard/ContactCard"
import HeroBlade from "../HeroBlade/HeroBlade"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Feature from "../Feature/Feature"

interface Props {
  blade: any
}

const Carousel: React.FC<Props> = ({ blade }) => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    autoplaySpeed: 10000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const Slides = blade.slides?.map((slide: any, index: number) => (
    <div
      key={slide.contentfulId}
      className={`${
        !blade.useSlider && `w-full sm:w-1/${blade.itemsPerRow} mb-10 sm:mb-0`
      }`}
    >
      {slide.__typename === "ContentfulBladeContactCard" ? (
        <ContactCard slide={slide} />
      ) : slide.__typename === "ContentfulBladeHero" ? (
        <HeroBlade blade={slide} />
      ) : slide.__typename === "ContentfulBladeFeature" ? (
        <Feature blade={slide} />
      ) : (
        <React.Fragment key={slide.contentfulId}></React.Fragment>
      )}
    </div>
  ))

  if (blade.useSlider) {
    return (
      <div className={blade.wrapperClassName?.join(" ")}>
        <Slider {...settings}>{Slides}</Slider>
      </div>
    )
  }
  return (
    <>
      <div className="w-full pt-10">
        <div className="mx-auto container">
          <h4 className="font-serif text-secondary text-5xl text-center mb-8">
            {blade.headline}
          </h4>
        </div>
      </div>
      <div className={`${blade.wrapperClassName?.join(" ")} flex flex-wrap`}>
        {Slides}
      </div>
    </>
  )
}

export default Carousel
