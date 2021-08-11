import React from "react";
import RegisterForm from "./RegisterForm";
import FormConstants from "../../../../constants/FormsConstants"
import {
  RegisterInputs,
  RegisterButton,
} from "../../../../constants/FormsConstants";

export default {
  title: "RegisterForm",
  component: RegisterForm,
};

export const RegisterFormlExample = () => (
  <RegisterForm
    {...RegisterInputs}{...RegisterButton}
  />
);

