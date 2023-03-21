// src/components/blog-card.tsx

import * as React from "react";
import { CardComponent, CardProps } from "@yext/search-ui-react";
import Ce_blog from "../types/blogs";

const BlogCard: CardComponent<Ce_blog> = ({
  result,
}: CardProps<Ce_blog>): JSX.Element => {
  const blog = result.rawData;

  return (
    <a href={blog.slug} target="_blank" rel="noreferrer">
      <div className="mb-4 flex cursor-pointer flex-col justify-between rounded-lg border p-4 shadow-sm transition duration-200 hover:scale-105">
        <div className="flex flex-col text-neutral-dark">
          <div className="text-lg font-medium">{blog.name}</div>
          <div>{blog.datePosted}</div>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
