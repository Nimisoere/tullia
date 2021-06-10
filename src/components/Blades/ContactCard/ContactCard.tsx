import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

interface Props {
  slide: any
}

const ContactCard = ({ slide }: Props) => {
  return (
    <div className="w-full h-full sm:p-4">
      <div className="bg-white shadow h-full w-full flex flex-wrap  items-stretch text-primary">
        <div className="w-full h-40 flex items-stretch sm:h-auto sm:w-1/4">
          <GatsbyImage
            alt={slide?.title}
            image={slide?.image?.constrainedGatsbyImage}
          />
        </div>
        <div className="p-8 w-full sm:w-3/4">
          <h4 className="mb-4 font-serif text-2xl font-semibold text-secondary">
            {slide.title}
          </h4>
          <address className="font-light mb-4">
            {slide.address?.address}
          </address>
          <p>
            <span>Phone:</span>{" "}
            {slide.phoneNumber?.map(phone => (
              <a key={phone} href={`tel:${phone}`}>
                {phone}
              </a>
            ))}
          </p>
          <p>
            <span>Email:</span>{" "}
            {slide.emails?.map(mail => (
              <a key={mail} className="underline" href={`tel:${mail}`}>
                {mail}
              </a>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
