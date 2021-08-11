import React from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/Input/Input";
import InputLabel from "../../atoms/InputLabel/InputLabel";
import { Styled, variables } from "../../../../assets/styled/styled";

const FormControl = ({
  formControlName,
  type,
  placeholder,
  labelTitle,
  linkText,
  link,
  defaultValue
}) => {
  return (
        <StyledFormControl
          className={`form-control ${formControlName}${type && " " + type}`}
        >
      {type !== "checkbox" ? (
          <React.Fragment>
              <InputLabel
                formControlName={formControlName}
                labelTitle={labelTitle}
                type={type}
              />
              <Input
                formControlName={formControlName}
                type={type}
                placeholder={placeholder}
              />
          </React.Fragment>
      ) : (
          <React.Fragment>
              <Input
                formControlName={formControlName}
                type={type}
                placeholder={placeholder}
              />
              <InputLabel
                formControlName={formControlName}
                labelTitle={labelTitle}
                type={type}
                className={type}
                link={link}
                linkText={linkText}
              />
          </React.Fragment>
      )}
        </StyledFormControl>
  );
};

const StyledFormControl = Styled.div`
width:100%;
margin-bottom: 1em;
&.checkbox {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items:center;
    input{
        display: none;
        visibility: hidden;
        &:checked ~ label.checkbox::after {
        content: "";
        display: block;
        width: 0.8em;
        height: 0.5em;
        border-left: 0.2em solid;
        border-bottom: 0.2em solid;
        border-color: ${variables.colorPrimary};
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -70%) rotate(-45deg);
    }
    }
    label.checkbox {
        position:relative;
        width: ${variables.fontSizeCow};
        height: ${variables.fontSizeCow};
        display: block;
        &::before {
            content: "";
            display: block;
            width: 1em;
            height: 1em;
            border: 0.1em solid;
            border-color: ${variables.colorPrimary};
            background: ${variables.colorWhite};
            border-radius: 0.3em;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
`;

FormControl.propTypes = {
  formControlName: PropTypes.string.isRequired,
  type: PropTypes.string,
  labelTitle: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  linkText: PropTypes.string,
  link: PropTypes.string,
  defaultValue: PropTypes.any,
  required: PropTypes.bool
};

FormControl.defaultTypes = {
  formControlName: "dummy-form-control",
  type: "text",
  placeholder: "Dummy placeholder",
  labelTitle: "Dummy label",
  defaultValue: null
};

export default FormControl;
