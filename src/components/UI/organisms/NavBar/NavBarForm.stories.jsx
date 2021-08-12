import React from "react";
import NavBar from "./NavBar";
import FormConstants from "../../../../constants/constants"
import {
  NavBarUserButtons
} from "../../../../constants/constants";

export default {
  title: "NavBar",
  component: NavBar,
};

export const NavBarlExample = () => (
  <NavBar {...NavBarUserButtons} />
);

