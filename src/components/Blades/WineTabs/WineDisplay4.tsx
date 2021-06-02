import React from "react"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

const WineDisplay = (props: Props) => {
  return (
    <div className="w-full">
      <div className="container flex flex-wrap mx-auto py-20">
        <div className="w-full mb-10 sm:mb-0 sm:w-1/3 flex justify-center sm:justify-end items-center">
          <StaticImage
            src="../../../images/wine-4.png"
            alt="Tulia"
            imgClassName="w-full"
            layout="constrained"
            placeholder="blurred"
          />
        </div>
        <div className="sm:px-10 w-full sm:w-2/3">
          <div className="w-full max-w-lg shadow bg-secondary p-4">
            <h4 className="font-light uppercase mb-4 flex items-center text-3xl">
              Rosé
              <span className="font-thin ml-2 inline-flex text-2xl">
                Sparkling Wine
              </span>
            </h4>
            <p className="font-light mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              fuga et quia maxime! Ut quos, sint expedita error quia obcaecati
              neque, illo quam commodi deserunt quis reiciendis quas? In, vero!
            </p>
            <p className="font-light mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              fuga et quia maxime! Ut quos, sint expedita error quia obcaecati
              neque, illo quam commodi deserunt quis reiciendis quas? In, vero!
            </p>
            {/* <p className="text-2xl">
              <span className="font-thin text-sm">from </span>
              {formatMoney(199.99, "GBP")}
            </p> */}
          </div>
        </div>
      </div>

      <div className="w-full py-20 bg-gray-100">
        <div className="container mx-auto max-w-2xl">
          <h4 className="font-medium text-3xl mb-4">Grape Varietals</h4>
          <p className="mb-8">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              maxime a porro magnam qui eaque illum animi possimus delectus ipsa
              laborum ullam distinctio dolore natus repellendus beatae,
              consectetur ea reiciendis!
            </span>
          </p>
          <h4 className="font-medium text-3xl mb-4">Technical Information</h4>
          <p className="mb-8">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              maxime a porro magnam qui eaque illum animi possimus delectus ipsa
              laborum ullam distinctio dolore natus repellendus beatae,
              consectetur ea reiciendis!
            </span>
          </p>
          <h4 className="font-medium text-3xl mb-4">Tasting Notes</h4>
          <p className="mb-8">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              maxime a porro magnam qui eaque illum animi possimus delectus ipsa
              laborum ullam distinctio dolore natus repellendus beatae,
              consectetur ea reiciendis!
            </span>
          </p>
          <h4 className="font-medium text-3xl mb-4">Vinification Notes</h4>
          <p className="mb-8">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              maxime a porro magnam qui eaque illum animi possimus delectus ipsa
              laborum ullam distinctio dolore natus repellendus beatae,
              consectetur ea reiciendis!
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default WineDisplay
