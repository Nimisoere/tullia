import { Link } from "gatsby"
import React from "react"

interface Props {
  post: any
}

const BlogPostSummary: React.FC<Props> = ({ post }) => {
  return (
    <div className="bg-gray-200 w-full flex flex-wrap mb-10 items-stretch">
      <div
        style={{
          backgroundImage: `url(${post?.frontmatter?.thumbnail})`,
          backgroundSize: "cover",
        }}
        className="w-full h-16 sm:h-auto sm:w-1/4"
      />
      <div className="p-8 w-full sm:w-3/4 text-center">
        <p className="capitalize text-2xl font-serif text-secondary">
          {post?.frontmatter?.category}
        </p>
        <small className="mb-2 text-gray-400">
          created {post?.frontmatter?.date}
        </small>
        <h4 className="font-light text-2xl mb-4">{post?.frontmatter?.title}</h4>
        <p className="font-light mb-8">{post?.excerpt}</p>
        <Link
          to={`/blog/${post?.fields?.slug}`}
          className="bg-primary w-full sm:w-auto hover:bg-secondary text-white py-3 px-8"
          aria-label="read more"
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

export default BlogPostSummary
