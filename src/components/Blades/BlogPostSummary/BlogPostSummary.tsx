import React from "react"

interface Props {}

const BlogPostSummary = (props: Props) => {
  return (
    <div className="bg-gray-200 w-full flex flex-wrap mb-10 items-stretch">
      <div
        style={{
          backgroundImage:
            "url(https://tuliawine.com/static/office-1fa2b93064cabdb072a4b222574fe414.jpeg)",
          backgroundSize: "cover",
        }}
        className="w-full h-16 sm:h-auto sm:w-1/4"
      />
      <div className="p-8 w-full sm:w-3/4 text-center">
        <p className="mb-4 text-xl font-serif text-secondary">Wine Tasting</p>
        <h4 className="font-light text-2xl mb-4">Understanding Wine Tasting</h4>
        <p className="font-light mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          fuga et quia maxime! Ut quos, sint expedita error quia obcaecati
          neque, illo quam commodi deserunt quis reiciendis quas? In, vero!
        </p>
        <button
          className="bg-primary w-full sm:w-auto hover:bg-secondary text-white py-4 px-8"
          type="button"
          aria-label="send message"
        >
          Read More
        </button>
      </div>
    </div>
  )
}

export default BlogPostSummary
