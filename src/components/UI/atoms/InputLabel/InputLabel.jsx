import React from 'react';
import PropTypes from 'prop-types';

const InputLabel = ({formControlName, labelTitle}) => {
    return (
        <label htmlFor={formControlName} className={formControlName}>{labelTitle}</label>
    )
}

InputLabel.propTypes = {
  formControlName: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
};

InputLabel.defaultProps = {
    labelTitle: "Dummy"
}

export default InputLabel;
