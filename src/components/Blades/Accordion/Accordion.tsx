import React from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { options } from "../../../templates/blog.template"

interface Props {
  blade: any
}

interface AccordionProps {
  accordion: any
}

const ElementAccordion: React.FC<AccordionProps> = ({ accordion }) => {
  const [open, setOpen] = React.useState<boolean>(false)
  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onKeyPress={() => null}
        onClick={() => setOpen(!open)}
        className="flex border-b px-2 py-4 border-gray-200"
      >
        <h4 className="font-semibold flex-grow text-lg">
          {accordion.headline}
        </h4>
        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>

      {open && (
        <div className="transform transition-all py-5 text-sm">
          {renderRichText(accordion.caption, options)}
        </div>
      )}
    </div>
  )
}

const Accordion: React.FC<Props> = ({ blade }) => {
  return (
    <div className="w-full">
      {blade?.headline && (
        <h4 className="w-full text-3xl font-medium">{blade.headline}</h4>
      )}
      {blade?.content && (
        <div className="">{renderRichText(blade.content, options)}</div>
      )}
      {blade.accordions?.map(accordion => (
        <ElementAccordion accordion={accordion} key={blade.contentfulId} />
      ))}
    </div>
  )
}

export default Accordion
