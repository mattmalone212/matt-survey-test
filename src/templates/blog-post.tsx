import * as React from "react";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateProps,
  TemplateRenderProps,
  TemplateConfig,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import { Image } from "@yext/pages/components";
import InfoSection from "../components/info-section";
import { formatDate, renderBlogContent } from "../util";
import TextArea from "../components/TextArea";

export const config: TemplateConfig = {
  stream: {
    $id: "survey",
    filter: {
      entityTypes: ["ce_survey"],
    },
    fields: ["id", "name", "datePosted", "body", "slug", "c_prompts.name"],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.id;
};

const BlogPost: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  const { _site } = document;

  return (
    <>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start justify-center">
        <InfoSection titleCssStyles="text-5xl pb-4" title={document.name}>
          {/* new code starts here... */}
          <div className="flex items-center gap-2">
            <div className="flex gap-2 py-4">
                THIS IS A TEST OF TEXT !!!
              {document.name}
            </div>
          </div>
          {/* ...and ends here */}
          <div className="font-display">{document.c_prompts.name}</div>
        </InfoSection>
      </div>
    </>
  );
};

export default BlogPost;
