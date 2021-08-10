import React from "react";
import Legend from "./Legend";

export default {
  title: "Legend",
  component: Legend,
};

export const LegendExample = () => (
  <Legend
    formControlName="dummy"
    type="checkbox"
    labelTitle="Dummy label"
    linkText=" here"
    link="http://wwww.entropismo.com"
  />
);
