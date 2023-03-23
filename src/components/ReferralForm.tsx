import * as React from "react";
import cx from "classnames";
import { useState } from "react";

// import { FaChevronRight } from "react-icons/fa";
import sendReferralToFunction from "../utils/sendReferralToFunction";
import Form from "./Form";
import Input from "./Input";
import RadioInput from "./RadioInput";
import TextArea from "./TextArea";

type Props = {
  //Insert Props Here
  className?: string;
  defaultExpanded?: boolean;
};

const ReferralForm = ({
  className,
  defaultExpanded = false,
}: Props) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);


  return (
    <div className={cx(className)}>
      {!reviewSubmitted && (
        <div className="border bg-gray-100 rounded-sm flex flex-col gap-4">
          <div
            className={cx("px-4 pb-4 pt-1", {
              hidden: !expanded,
              block: expanded,
            })}
          >
            <Form
              successMessage="Referral submitted successfully"
              onSubmit={async ({
                ...rest
              }) => {
                await sendReferralToFunction({
                  ...rest
                });
                setReviewSubmitted(true);
              }}
              saveButtonLabel="Submit Referral"
              disclosure={
                <div className="text-gray-500 text-sm">
                  <p>
                    This referral form was created by Matt Malone. Do you like it??
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
        </div>
      )}
      {reviewSubmitted && (
        <div className="text-center text-gray-500 text-sm p-4 block border bg-gray-100">
          <p>
            Thank you for your referral! We appreciate it xx.
          </p>
        </div>
      )}
    </div>
  );
};

export default ReferralForm;
