import React from "react"

interface Props {
  blade: any
}

const Carousel: React.FC<Props> = ({ blade }) => {
  console.log(blade)
  return (
    <div className="w-full py-10">
      <div className="container flex flex-wrap mx-auto">
        {blade.slides?.map(slide => {
          if (slide.__typename === "ContentfulBladeContactCard") {
            return (
              <div key={slide.contentfulId} className="w-full lg:w-1/3 sm:p-4">
                <div className="bg-primary h-full w-full flex flex-wrap mb-10 sm:mb-0 items-stretch text-white">
                  <div
                    style={{
                      backgroundImage: `url(https:${slide?.image?.file?.url})`,
                      backgroundSize: "cover",
                    }}
                    className="w-full h-16 sm:h-auto sm:w-1/4"
                  />
                  <div className="p-8 w-full sm:w-3/4">
                    <h4 className="mb-4 text-xl text-secondary">
                      {slide.title}
                    </h4>
                    <address className="font-light mb-4">
                      {slide.address?.address}
                    </address>
                    <p>
                      <span>Phone:</span> {slide.phoneNumber?.join(", ")}
                    </p>
                    <p>
                      <span>Email:</span> {slide.emails?.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export default Carousel
