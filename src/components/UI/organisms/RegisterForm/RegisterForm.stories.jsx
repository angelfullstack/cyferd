import React from "react";
import RegisterForm from "./RegisterForm";
import FormConstants from "../../../../constants/constants"
import {
  RegisterInputs,
  RegisterButton,
} from "../../../../constants/constants";

export default {
  title: "RegisterForm",
  component: RegisterForm,
};

export const RegisterFormlExample = () => (
  <RegisterForm
    {...RegisterInputs}{...RegisterButton}
  />
);

