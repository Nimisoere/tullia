import React from "react"
import Slider from "react-slick"

import ContactCard from "../ContactCard/ContactCard"
import HeroBlade from "../HeroBlade/HeroBlade"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Feature from "../Feature/Feature"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

interface Props {
  blade: any
}

const SampleNextArrow = props => {
  const { onClick } = props
  return (
    <button
      className="absolute right-0 sm:right-10 text-white z-10 text-3xl transition-all transform p-2 bg-secondary bg-opacity-40 hover:bg-opacity-75 top-1/3"
      type="button"
      onClick={onClick}
      aria-label="next"
    >
      <BsArrowRight className="hover:translate-x-1 transition-all transform" />
    </button>
  )
}

const SamplePrevArrow = props => {
  const { className, style, onClick } = props
  return (
    <button
      className="absolute left-0 sm:left-10 text-white z-10 text-3xl transition-all transform p-2 bg-secondary bg-opacity-60 hover:bg-opacity-75 top-1/3"
      type="button"
      onClick={onClick}
      aria-label="next"
    >
      <BsArrowLeft className="transition-all transform hover:-translate-x-1 " />
    </button>
  )
}

const Carousel: React.FC<Props> = ({ blade }) => {
  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    fade: true,
    adaptiveHeight: true,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      {blade.headline && (
        <div className="w-full pt-10">
          <div className="mx-auto container">
            <h4 className="font-serif text-secondary text-5xl text-center mb-8">
              {blade.headline}
            </h4>
          </div>
        </div>
      )}

      <div className={`${blade.wrapperClassName?.join(" ")} flex flex-wrap`}>
        {Slides}
      </div>
    </>
  )
}

export default Carousel
