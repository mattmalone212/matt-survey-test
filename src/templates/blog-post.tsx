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

export const config: TemplateConfig = {
  stream: {
    $id: "blog",
    filter: {
      entityTypes: ["ce_blog"],
    },
    fields: ["id", "name", "datePosted", "body", "slug", "c_coverPhoto"],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
};

const BlogPost: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  const { _site } = document;

  return (
    <>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start justify-center">
        <InfoSection titleCssStyles="text-5xl pb-4" title={document.name}>
          {document.c_coverPhoto && <Image image={document.c_coverPhoto} />}
          {/* new code starts here... */}
          <div className="flex items-center gap-2">
            {_site.c_headshot && (
              <Image
                className="rounded-full"
                image={_site.c_headshot}
                layout={"aspect"}
                aspectRatio={1}
                width={40}
              />
            )}
            <div className="flex gap-2 py-4">
              {(_site.firstName || _site.lastName) && (
                <p className="font-semibold">{`${_site.firstName} ${_site.lastName}`}</p>
              )}
              {(_site.firstName || _site.lastName) && document.datePosted && (
                <p className="font-semibold">•</p>
              )}
              {document.datePosted && (
                <p className="font-semibold">
                  {formatDate(document.datePosted)}
                </p>
              )}
            </div>
          </div>
          {/* ...and ends here */}
          <div className="font-display">{renderBlogContent(document.body)}</div>
        </InfoSection>
      </div>
    </>
  );
};

export default BlogPost;
