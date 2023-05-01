import * as React from "react";
import cx from "classnames";
import { useState } from "react";

// import { FaChevronRight } from "react-icons/fa";
import sendSurveyResponseToFunction from "../utils/sendSurveyResponseToFunction";
import Form from "./Form";
import Input from "./Input";
import RadioInput from "./RadioInput";
import TextArea from "./TextArea";
import RadioText from "./RadioText"

type Props = {
  //Insert Props Here
  className?: string;
  defaultExpanded?: boolean;
};

const SurveyForm = ({
  className,
  defaultExpanded = false,
}: Props) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);


  return (
    <div className="w-full">
      {!reviewSubmitted && (
        <div className="flex flex-col w-full bg-gray-100 rounded-sm">
          <div
            className={cx("px-4 pb-4 pt-1", {
              hidden: !expanded,
              block: expanded,
            })}
          >
            <Form
              successMessage="Survey submitted successfully"
              onSubmit={async ({
                ...rest
              }) => {
                await sendSurveyResponseToFunction({
                  ...rest
                });
                setReviewSubmitted(true);
              }}
              saveButtonLabel="Submit Referral"
              disclosure={
                <div className="text-gray-500 text-sm">
                  <p>
                    This survey was created by Matt Malone. Do you like it??
                  </p>
                </div>
              }
            >

              <Input
                name="questionOne"
                label="First Question"
                required
              />

              <RadioInput
                name="endorsementStrength"
                label="Endorsement Strength"
                options={[
                  { label: "Strong", value: "STRONG" },
                  { label: "Medium", value: "MEDIUM" },
                  { label: "Weak", value: "WEAK" },
                ]}
              />

            </Form>
          </div>
        </div>
      )}
      {reviewSubmitted && (
        <div className="text-center text-gray-500 text-sm p-4 block border bg-gray-100">
          <p>
            Thank you for your submission! We appreciate it xx.
          </p>
        </div>
      )}
    </div>
  );
};

export default SurveyForm;
