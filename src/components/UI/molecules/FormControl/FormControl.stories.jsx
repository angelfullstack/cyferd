import React from "react";
import FormControl from "./FormControl";

export default {
  title: "FormControl",
  component: FormControl,
};

export const FormControlExample = () => (
  <FormControl
    formControlName="form-control-example"
    type="text"
    placeholder="Placeholder example"
  />
);

export const FormControlExampleOptin = () => (
  <FormControl
    formControlName="form-control-example-optin"
    type="checkbox"
    placeholder="Placeholder example"
    labelTitle='This is '
    linkText='a example link'
  />
);
