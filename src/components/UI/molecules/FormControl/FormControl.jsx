import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../atoms/Input/Input'
import InputLabel from '../../atoms/InputLabel/InputLabel'

const FormControl = ({formControlName, type, placeholder, labelTitle, linkText}) => {
    return (
      <div className={`form-control ${formControlName}`}>
        <InputLabel
          formControlName={formControlName}
          labelTitle={labelTitle}
        />
        <Input 
            formControlName={formControlName} 
            type={type}
            placeholder={placeholder}
            linkText={linkText}
        />
      </div>
    );
}

FormControl.propTypes = {
  formControlName: PropTypes.string.isRequired,
  type: PropTypes.string,
  labelTitle: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  linkText: PropTypes.string,
};

FormControl.defaultTypes = {
  formControlName: "dummy-form-control",
  type: "text",
  placeholder: "Dummy placeholder",
  labelTitle: "Dummy label",
};

export default FormControl
