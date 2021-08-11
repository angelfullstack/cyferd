import React from "react";
import PropTypes from "prop-types";
import { Styled, variables } from "../../../../assets/styled/styled";

const Button = ({ type, text, onClick }) => {
  onClick = () => {
    console.log('Click')
  }  
  return <StyledButton type={type} onClick={onClick}>{text}</StyledButton>;
};

const StyledButton = Styled.button`
border: .2em solid ${variables.colorPrimary};
font-size: ${variables.fontSizeCow};
border-radius: 1em;
padding: .125em .5em;
font-weight: bold;
color: ${variables.colorWhite};
background-color: transparent;
display: block;
margin: 0 auto;
&:hover{
background-color: ${variables.colorPrimary};
}
&:disabled{
    opacity: .5;
    &:hover{
    background-color: ${variables.colorPrimary};
}
`;

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: "button",
  text: "Dummy Button",
};

export default Button;
