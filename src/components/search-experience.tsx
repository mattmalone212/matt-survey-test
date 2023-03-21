// src/components/search-experience.tsx

import * as React from "react";
import {
  provideHeadless,
  SearchHeadlessProvider,
  SandboxEndpoints, // remove if using a production account
} from "@yext/search-headless-react";

export const searchConfig = {
  apiKey: YEXT_PUBLIC_SEARCH_API_KEY,
  locale: "en",
  endpoints: SandboxEndpoints, // remove if using a production account
};

interface SearchExperienceProps {
  experienceKey: string;
  verticalKey?: string;
  children?: React.ReactNode;
}

const SearchExperience = ({
  experienceKey,
  verticalKey,
  children,
}: SearchExperienceProps) => {
  const search = provideHeadless({
    ...searchConfig,
    verticalKey,
    experienceKey,
  });

  return (
    <SearchHeadlessProvider searcher={search}>
      {children}
    </SearchHeadlessProvider>
  );
};

export default SearchExperience;
