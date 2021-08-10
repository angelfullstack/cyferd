export const RegisterInputs = [
  {
    formControlName: "username",
    type: "text",
    placeholder: "Write your username",
    labelTitle: "Username",
    defaultValue: "",
  },
  {
    formControlName: "password",
    type: "password",
    placeholder: "Write your password",
    labelTitle: "Password",
    defaultValue: "",
  },
  {
    formControlName: "password_repeat",
    type: "password",
    placeholder: "Repeat your password",
    labelTitle: "Repeat your password",
    defaultValue: "",
  },
  {
    formControlName: "birthdate",
    type: "date",
    placeholder: "../../...",
    labelTitle: "Birth date",
    defaultValue: new Date(),
  },
  {
    formControlName: "age",
    type: "number",
    placeholder: "33",
    labelTitle: "Your age",
    defaultValue: null,
  },
  {
    formControlName: "optin",
    type: "checkbox",
    labelTitle: "I accept",
    placeHolder: "I accept",
    linkText: " conditions",
    link: "/conditions",
    defaultValue: false,
  },
];

export const RegisterButton = {
    type: "submit",
    text: "Submit"
}