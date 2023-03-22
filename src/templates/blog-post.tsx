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

export const config: TemplateConfig = {
  stream: {
    $id: "survey",
    filter: {
      entityTypes: ["ce_survey"],
    },
    fields: ["id", "name", "slug", "c_prompts.name", "c_prompts.id"],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
};

const SurveyTemplate: Template<TemplateRenderProps> = ({
  document,
}) => {
  const { id, name, c_prompts } = document;

  return (
    <>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start justify-center">
        <InfoSection titleCssStyles="text-5xl pb-4" title={'Make a Referral'}>
          {/* new code starts here... */}
          Provide us with some information on your referral. Talent Hub will send your referral a message asking them to apply to Yext. We will prioritize reviewing your referral's information once they have applied to a specific requisition.
          <div className="flex items-center gap-2">
            {/* <div className="flex flex-col gap-2 py-4">
              {c_prompts.map((prompt, index) => (
                  <p key={index}> {prompt.name} </p>
              ))}
            </div> */}
            <Form
              successMessage="Referral submitted successfully"
              saveButtonLabel="Submit Referral"
              disclosure={
                <div className="text-gray-500 text-sm">
                  <p>
                    This survey was created by Matt. Do you like it?
                  </p>
                </div>
              }
          >

            <RadioInput
                name="referral-type"
                label="Referral Type"
                options={[
                  { label: "General", value: "GENERAL" },
                  {
                    label: "Input Job ID", value: "JOB-ID",
                  },
                ]}
              />

              <Input
                name="first-name"
                label="First Name"
                required
              />

              <Input
                name="last-name"
                label="Last Name"
                required
              />

              <Input
                name="email-address"
                label="Personal Email Address"
                required
              />

              <Input
                name="phone"
                label="Phone Number"
                required
              />

              <Input
                name="linkedin-url"
                label="URL to Social Work Profile"
                placeholder="https://www.linkedin.com/in/jane-doe"
                required
              />

              <TextArea
                name="recommendation-text"
                label="Why are you referring this candidate?"
              />
        </Form>
          </div>
          {/* ...and ends here */}
        </InfoSection>
      </div>
    </>
  );
};

export default SurveyTemplate;
