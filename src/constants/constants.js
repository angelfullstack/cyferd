export const RegisterInputs = [
  {
    formControlName: "username",
    type: "text",
    placeholder: "Write your username",
    labelTitle: "Username",
    defaultValue: "",
    required: true,
  },
  {
    formControlName: "password",
    type: "password",
    placeholder: "Write your password",
    labelTitle: "Password",
    defaultValue: "",
    required: true,
  },
  {
    formControlName: "password_repeat",
    type: "password",
    placeholder: "Repeat your password",
    labelTitle: "Repeat your password",
    defaultValue: "",
    required: true,
  },
  {
    formControlName: "birthdate",
    type: "date",
    placeholder: "../../...",
    labelTitle: "Birth date",
    defaultValue: new Date(),
    required: true,
  },
  {
    formControlName: "age",
    type: "number",
    placeholder: "33",
    labelTitle: "Your age",
    defaultValue: null,
    required: true,
  },
  {
    formControlName: "optin",
    type: "checkbox",
    labelTitle: "I accept",
    linkText: " conditions",
    link: "/conditions",
    defaultValue: false,
    required: true,
  },
];

export const RegisterButton = {
    type: "submit",
    text: "Submit"
}

export const NavBarUserButtons = [
  {
    name: "register",
    type: "button",
    labelTitle: "Register",
    text: "Register",
    link: "/register",
    title: "Go to login",
  },
  {
    name: "login",
    type: "button",
    labelTitle: "Login",
    text: "Login",
    link: "/login",
    title: "Go to login",
  },
];