import { createStore } from "redux";
const initialValue = { 
    username: '',
    password: '',
    password_repeat: '',
    birthdate: '',
    age: null,
    optin: false
    
 };

const reducer = (state = initialValue, action) => {
  debugger;
  switch (action.type) {
    case "USERNAME":
      return { ...state, userbane: action.payload };
    case "PASSWORD":
      return { ...state, userbane: action.payload };
    case "PASSWORD_REPEAT":
      return { ...state, userbane: action.payload };
    case "BIRTHDATE":
      return { ...state, userbane: action.payload };
    case "AGE":
      return { ...state, userbane: action.payload };
    case "OPTIN":
      return { ...state, userbane: action.payload };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
