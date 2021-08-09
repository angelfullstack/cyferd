import React from "react";
import InputLabel from "./InputLabel";

export default {
  title: "InputLabel",
  component: InputLabel,
};

export const InputLabelExample = () => (
  <InputLabel 
    formControlName="username" 
    labelTitle = "Dummy"
    />
);
