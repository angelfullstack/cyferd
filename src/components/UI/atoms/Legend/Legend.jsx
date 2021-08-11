import React from "react";
import PropTypes from "prop-types";
import { Styled, variables } from "../../../../assets/styled/styled";
import { Link } from "react-router-dom";

const Legend = ({ formControlName, type, labelTitle, linkText, link }) => {
  return (
    <StyledLegend
      htmlFor={formControlName}
      className={`${formControlName}${type && " " + type}`}
    >
      {labelTitle}
      <Link to={link}>{linkText}</Link>
    </StyledLegend>
  );
};

const StyledLegend = Styled.legend`
font-size: ${variables.fontSizeCow};
color: ${variables.colorWhite};
margin-left: .5em;
a, a:visited, a:active {
color: ${variables.colorPrimary};
&:hover{

}
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
