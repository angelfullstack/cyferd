import React from "react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

export const InputExample = () => (
  <Input
    formControlName="username"
    type="text"
    icon="user"
    placeholder="Write your username" 
    />
);
