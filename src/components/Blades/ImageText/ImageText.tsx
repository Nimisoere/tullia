import React from "react"
import { StaticImage } from "gatsby-plugin-image"

interface Props {
  reverse?: boolean
  backgroundColor?: string
}

const ImageText: React.FC<Props> = ({ reverse, backgroundColor }) => {
  return (
    <div className={`w-full py-20 ${backgroundColor}`}>
      <div
        className={`container ${
          reverse && "flex-row-reverse"
        } flex flex-wrap mx-auto`}
      >
        <div className="w-full sm:w-1/2 flex items-center justify-center">
          <div className="max-w-lg mx-auto mb-10">
            <StaticImage
              src="../../../images/wine-taste.jpeg"
              alt="Tulia"
              imgClassName="w-full"
              layout="constrained"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 font-light">
          <div className="max-w-lg">
            <h2 className="font-serif text-secondary text-5xl mb-4">
              How We Started
            </h2>
            <p className="mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              quidem, quia aliquid velit ad beatae labore nemo, molestiae rem
              asperiores illo tempora ipsam sunt tempore quo accusamus possimus,
              consectetur dolorum. Quaerat suscipit veritatis voluptatum ipsam
              qui quam pariatur inventore, cupiditate dolor commodi harum,
              nesciunt similique ratione ut praesentium consequuntur! Officiis
              impedit saepe nihil magni quia soluta, voluptatum sint veniam
              voluptates.
            </p>
            <p className="mb-4">
              Deleniti! Rerum illo debitis unde repellat repellendus magnam
              sequi eius, cumque laborum, aspernatur nulla earum aut vel odit,
              tenetur voluptatibus enim rem quibusdam. Amet earum sequi
              reiciendis ea, molestiae praesentium consectetur. Eos enim porro
              ad cum explicabo minus sapiente, consequuntur dicta reiciendis in
              nostrum repellendus quos nihil optio exercitationem voluptates
              quae, vero aut veniam! Quos quo ipsa eius quam asperiores amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageText
