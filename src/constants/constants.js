export const RegisterInputs = [
  {
    formControlName: "username",
    type: "text",
    placeholder: "Write your username",
    labelTitle: "Username",
    defaultValue: null,
    validations: {
      required: true,
      pattern: {
        value: "^[A-Za-z]*$",
        message: "You're not allowed to use numbers or symbols",
      },
    },
  },
  {
    formControlName: "password",
    type: "password",
    placeholder: "Write your password",
    labelTitle: "Password",
    defaultValue: "",
    validations: {
      required: true,
      custom: {
        isValid: (value) => value.length > 6,
        message: "The password needs to be at least 6 characters long",
      },
    },
  },
  {
    formControlName: "password_repeat",
    type: "password",
    placeholder: "Repeat your password",
    labelTitle: "Password repeat",
    defaultValue: null,
    validations: {
      required: true,
      compare: {
        isValid: (value, value2) => value === value2,
        message: "Passwords should be equal",
        compareTo: "password",
      },
    },
  },
  {
    formControlName: "birthdate",
    type: "date",
    placeholder: "../../...",
    labelTitle: "Birth date",
    defaultValue: null,
    validations: {
      required: true,
    },
  },
  {
    formControlName: "age",
    type: "number",
    placeholder: "33",
    labelTitle: "Your age",
    defaultValue: null,
    validations: {
      required: true,
      custom: {
        isValid: (value) => parseInt(value, 10) > 17,
        message: "You have to be at least 18 years old.",
      },
      compare: {
        isValid: (age, birthdate) => {
          const date = Math.abs(
            new Date(
              new Date().getFullYear() - new Date(birthdate).getFullYear()
            )
          );
          return parseInt(age) === date;
        },
        message: "Age inconsistence",
        compareTo: "birthdate",
      },
    },
  },
  {
    formControlName: "optin",
    type: "checkbox",
    labelTitle: "I accept",
    linkText: " conditions",
    link: "/conditions",
    defaultValue: false,
    validations: {
      required: true,
    },
  },
];

export const RegisterButton = {
  type: "submit",
  text: "Submit",
};

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
// validations: {
//   username: {
//     pattern: {
//       value: "^[A-Za-z]*$",
//       message: "You're not allowed to...",
//     },
//   },
//   age: {
//     required: {
//       message: "This field is required",
//     },
//     custom: {
//       isValid: (value) => parseInt(value, 10) > 17,
//       message: "You have to be at least 18 years old.",
//     },
//   },
//   password: {
//     required: {
//       message: "This field is required",
//     },
//     custom: {
//       isValid: (value) => value.length > 6,
//       message: "The password needs to be at...",
//     },
//   },
//   password_repeat: {
//     required: {
//       message: "This field is required",
//     },
//     compare: {
//       isValid: (value,value2) => value === value2,
//       message: "Passwords should be equal",
//       compareTo: 'password'
//     },
//   },
// },
