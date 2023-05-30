import Layout from "../components/Layout";
import SurveyForm from "../components/SurveyForm";
import { useState, useEffect } from "react";
import * as React from "react";
import "../styles/index.css";
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
import Form from "../components/Form";
import Input from "../components/Input";
import RadioInput from "../components/RadioInput"
import { formatDate, renderBlogContent } from "../util";
import TextArea from "../components/TextArea";
import cx from "classnames";
import sendSurveyResponseToFunction from "../utils/sendSurveyResponseToFunction";
import RadioText from "../components/RadioText"
import Prompt from "../components/Prompt";

export const config: TemplateConfig = {
  stream: {
    $id: "survey",
    filter: {
      entityTypes: ["ce_survey"],
    },
    fields: [
      "id", 
      "name", 
      "c_surveyTitle",
      "c_surveyCoverImage",
      "description",
      "slug", 
      "c_prompts.promptText",
      "c_prompts.promptType",
      "c_prompts.options"
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ? document.slug : document.id;
};

const SurveyTemplate: Template<TemplateRenderProps> = ({
  document,
}) => {
  const { id, name, c_prompts, c_surveyCoverImage, c_surveyTitle, description } = document;
  const [reviewSubmitted, setReviewSubmitted] = useState(false);


  return (
    <>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start justify-center">
        <InfoSection titleCssStyles="text-5xl pb-4" title={c_surveyTitle}>


          {/* new code starts here... */}
          {description}
          {c_surveyCoverImage}
          </InfoSection>

          
          <div className="w-full">
      {!reviewSubmitted && (
        <div className="flex flex-col w-full bg-gray-100 rounded-sm">
          <div
            className={cx("px-4 pb-4 pt-1")}
          >
            <Form
              successMessage="Response submitted successfully"
              onSubmit={async ({
                ...rest
              }) => {
                await sendSurveyResponseToFunction({
                  ...rest,id
                });
                setReviewSubmitted(true);
              }}
              saveButtonLabel="Submit Response"
              disclosure={
                <div className="text-gray-500 text-sm">
                  <p>
                    Your response will be sent to the Yext Knowledge Graph.
                  </p>
                </div>
              }
            >

            {c_prompts.map((o) => (
              <Prompt
                name={o.promptText}
                label={o.promptText}
                promptType={o.promptType}
                options={o.options}
                required
              />
            ))}

            </Form>
          </div>
        </div>
      )}
      {reviewSubmitted && (
        <div className="text-center text-gray-500 text-sm p-4 block border bg-gray-100">
          <p>
            Thank you for your response!
          </p>
        </div>
      )}
    </div>

      </div>
    </>
  );
};

export default SurveyTemplate;
