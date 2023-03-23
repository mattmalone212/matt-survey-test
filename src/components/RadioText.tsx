import * as React from "react";
import { useFormContext } from "react-hook-form";
import RadioInput from "./RadioInput";
import TextAreaSmall from "./TextAreaSmall";

interface RadioTextProps {
  radioInputName: string;
  radioInputLabel: string;
  radioInputOptions: {
    label: string;
    value: string;
  }[];
  textAreaName: string;
  textAreaLabel: string;
  textAreaPlaceholder: string;
  textAreaOpenValue?: string;
}

const RadioText = ({
  radioInputName,
  radioInputLabel,
  radioInputOptions,
  textAreaName,
  textAreaLabel,
  textAreaOpenValue,
}: RadioTextProps) => {
  const currentValue = useFormContext().watch(radioInputName);

  return (
    <>
      <RadioInput
        name={radioInputName}
        label={radioInputLabel}
        options={radioInputOptions}
      />
      {currentValue === textAreaOpenValue && (
        <TextAreaSmall
          name={textAreaName}
          label={textAreaLabel}
        />
      )}
    </>
  );
};

export default RadioText;
