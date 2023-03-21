// src/components/blog-results.tsx

import { SearchBar, VerticalResults } from "@yext/search-ui-react";
import { useSearchActions } from "@yext/search-headless-react";
import * as React from "react";
import BlogCard from "./blog-card";

const BlogResults = () => {
  const searchActions = useSearchActions();

  React.useEffect(() => {
    searchActions.executeVerticalQuery();
  }, []);

  return (
    <div className="centered-container pt-4">
      <SearchBar />
      <VerticalResults CardComponent={BlogCard} />
    </div>
  );
};

export default BlogResults;
