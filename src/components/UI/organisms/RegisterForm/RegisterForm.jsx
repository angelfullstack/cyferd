import React from 'react'
import PropTypes from 'prop-types'
import { RegisterInputs } from '../../../../constants/FormsConstants'
import FormControl from '../../molecules/FormControl/FormControl'

const RegisterForm = props => {
    console.log(RegisterInputs)
    return (
        <div className="register-form">
            {
                RegisterInputs.map(input => {
                    return <FormControl value={input}/>
                })
            }
        </div>
    )
}

RegisterForm.propTypes = {

}

export default RegisterForm
