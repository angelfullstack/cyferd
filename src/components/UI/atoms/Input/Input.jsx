import React from 'react'
import PropTypes from 'prop-types'
import './Input.module.scss'

const Input = ({formControlName, type, icon, placeholder}) => {
    return (
        <input 
            type={type}
            className={formControlName}
            placeholder={placeholder}
            id={formControlName}
            name={formControlName}
        />
    )
}

Input.propTypes = {
  formControlName: PropTypes.string.isRequired,  
  type: PropTypes.string,
  palceholder: PropTypes.string,
};

Input.defaultProps = {
    formControlName: 'Dummy',
    type: 'text',
    placeholder: 'Dummy Input'
}

export default Input