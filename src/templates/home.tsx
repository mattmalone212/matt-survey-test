import * as React from "react";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import HomeLayout from "../components/layouts/home-layout";
import Greeting from "../components/greeting";
import PersonalInfo from "../components/personal-info";
import SearchExperience from "../components/search-experience";
import BlogResults from "../components/blog-results";
import SearchApiKeyModal from "../components/SearchApiKeyModal";

export const getPath: GetPath<TemplateProps> = () => {
  return `index.html`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    title: "My Personal Site",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Home: Template<TemplateRenderProps> = ({
  document,
}: TemplateRenderProps) => {
  const { _site, businessId } = document;

  return (
    <SearchExperience experienceKey="blog-search" verticalKey="blogs">
      <HomeLayout
        GreetingContent={() => (
          <Greeting name="Aaron" role="Developer Evangelist @ Yext" />
        )}
        sections={[
          {
            title: "Home",
            Section: (
              <PersonalInfo
                twitter={_site.c_twitter}
                github={_site.c_github}
                devTo={_site.devTo}
                introduction={_site.c_introduction}
                home={_site.c_home}
                skills={_site.c_skills}
                interests={_site.c_interests}
              />
            ),
          },
          {
            title: "Blogs",
            Section: <BlogResults />, // Updated Content
          },
        ]}
      />
      {/* Once you have added your Search API Key, you can remove this component */}
      <SearchApiKeyModal businessId={businessId} />
    </SearchExperience> // New Content
  );
};

export default Home;
