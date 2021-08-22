import React from "react";
import PropTypes from "prop-types";
import { Styled, variables } from "../../../../assets/styled/styled";
import { Link } from "react-router-dom";

const Legend = ({ formControlName, type, labelTitle, linkText, link, errors }) => {
  return (
    <StyledLegend
      htmlFor={formControlName}
      className={`${formControlName}${type && " " + type}`}
    >
      {labelTitle}
      <Link to={link}>{linkText}</Link>
      {errors && errors.required && (
        <span className="errors">{errors.required}</span>
      )}
    </StyledLegend>
  );
};

const StyledLegend = Styled.legend`
font-size: ${variables.fontSizeCow};
color: ${variables.colorWhite};
margin-left: .5em;
.errors{
  color:${variables.colorDanger};
  margin-left: 1rem;
  font-size: .81em;
}
a, a:visited, a:active {
color: ${variables.colorPrimary};
}
`;

Legend.propTypes = {
  formControlName: PropTypes.string,
  labelTitle: PropTypes.string.isRequired,
  type: PropTypes.string,
  linkText: PropTypes.string,
  link: PropTypes.string,
};

Legend.defaultProps = {
  labelTitle: "Dummy"
};

export default Legend;
