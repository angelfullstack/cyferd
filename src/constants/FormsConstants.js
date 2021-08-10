export const RegisterInputs = [
  {
    formControlName: "username",
    type: "text",
    placeholder: "Write your username",
    labelTitle: "Username",
  },
  {
    formControlName: "password",
    type: "password",
    placeholder: "Write your password",
    labelTitle: "Password",
  },
  {
    formControlName: "password-repeat",
    type: "password",
    placeholder: "Repeat your password",
    labelTitle: "Repeat your password",
  },
  {
    formControlName: "birthdate",
    type: "date",
    placeholder: "../../...",
    labelTitle: "Birth date",
  },
  {
    formControlName: "age",
    type: "number",
    placeholder: "33",
    labelTitle: "Your age",
  },
  {
    formControlName: "optin",
    type: "checkbox",
    labelTitle: "I accept",
    placeHolder: "I accept",
    linkText: " conditions",
    link: "/conditions"
  },
];

export const RegisterButton = {
    type: "submit",
    text: "Submit"
}