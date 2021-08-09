import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../atoms/Input/Input'
import InputLabel from '../../atoms/InputLabel/InputLabel'

const FormControl = ({formControlValues}) => {
    return (
        <div className={`form-control ${formControlValues ? formControlValues.formControlName: null}`}>
            <InputLabel />
            <Input />
        </div>
    )
}

FormControl.propTypes = {

}

export default FormControl
