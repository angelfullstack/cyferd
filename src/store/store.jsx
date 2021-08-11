import { createStore } from "redux";
const initialValue = { 
    username: '',
    password: '',
    password_repeat: '',
    birthdate: '',
    age: null,
    optin: false,
    user: {
      token: null,
      username: 'pepito'
    },
    
 };

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case "USERNAME":
      return { ...state, username: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "PASSWORD_REPEAT":
      return { ...state, repeat_password: action.payload };
    case "BIRTHDATE":
      return { ...state, birthdate: action.payload };
    case "AGE":
      return { ...state, age: action.payload };
    case "OPTIN":
      return { ...state, optin: action.payload };
    case "USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
