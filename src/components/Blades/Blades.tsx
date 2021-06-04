import React from "react"
import HeroBlade from "./HeroBlade/HeroBlade"
import ContactForm from "./ContactForm/ContactForm"
import RichText from "./RichText/RichText"
import ImageText from "./ImageText/ImageText"
import Carousel from "./Carousel/Carousel"
import HomeNavigation from "./HomeNavigation/HomeNavigation"
import Accordion from "./Accordion/Accordion"

interface Props {
  blades: any[]
}

interface BladeProp {
  blade: any
}

const Blade: React.FC<BladeProp> = ({ blade }) => {
  if (blade.__typename === "ContentfulBladeAccordion") {
    return <Accordion blade={blade} />
  } else if (blade.__typename === "ContentfulBladeHero") {
    return <HeroBlade blade={blade} />
  } else if (blade.__typename === "ContentfulNavNavigation") {
    if (blade?.navVariant === "Image") {
      return <HomeNavigation blade={blade} />
    }
  } else if (blade.__typename === "ContentfulBladeImageText") {
    return <ImageText blade={blade} />
  } else if (blade.__typename === "ContentfulBladeRichText") {
    return <RichText blade={blade} />
  } else if (blade.__typename === "ContentfulBladeContactForm") {
    return <ContactForm blade={blade} />
  } else if (blade.__typename === "ContentfulBladeCarousel") {
    return <Carousel blade={blade} />
  }
  return null
}

const Blades: React.FC<Props> = ({ blades }) => {
  return (
    <div className="w-full">
      {blades?.map(blade => (
        <Blade blade={blade} key={blade.contentful_id} />
      ))}
    </div>
  )
}

export default Blades
