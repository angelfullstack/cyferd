import React from "react";
import PropTypes from "prop-types";
import { Styled, variables } from "../../../../assets/styled/styled";
import  Legend from '../Legend/Legend';

const InputLabel = ({ formControlName, type, labelTitle, linkText, link }) => {
  return (
    <React.Fragment>
      {type !== "checkbox" ? (
        <StyledLabel htmlFor={formControlName} className={formControlName}>
          {labelTitle}
        </StyledLabel>
      ) : (
        <React.Fragment>
          <StyledLabel
            htmlFor={formControlName}
            className={`${formControlName}${type && " " + type}`}
          ></StyledLabel>
          <Legend
            htmlFor={formControlName}
            className={`${formControlName}${type && " " + type}`}
            labelTitle={labelTitle}
            linkText={linkText}
            link={link}
          ></Legend>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const StyledLabel = Styled.label`
font-size: ${variables.fontSizeCow};
color: ${variables.colorWhite};
display: block;
&:not(.checkbox){
margin-bottom: .2em;
}

`
InputLabel.propTypes = {
  formControlName: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  type: PropTypes.string,
  linkText: PropTypes.string,
};

InputLabel.defaultProps = {
  labelTitle: "Dummy",
};

export default InputLabel;
