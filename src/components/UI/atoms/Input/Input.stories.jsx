import React from "react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

// eslint-disable-next-line no-unused-vars
const store = {
  getState: () => {
    return {
      tasks: "DUMMY",
    };
  },
  subscribe: () => 0,
  dispatch: ("dispatch"),
};

export const InputExample = () => (
  <Input
    formControlName="username"
    type="text"
    icon="user"
    placeholder="Write your username" 
    />
);
