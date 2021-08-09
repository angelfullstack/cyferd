import React from 'react'
import Button from '../../atoms/Button/Button'
import { RegisterInputs } from '../../../../constants/FormsConstants'
import FormControl from '../../molecules/FormControl/FormControl'

const RegisterForm = props => {
    return (
        <div className="register-form">
            <div className="form-group">
                {
                    RegisterInputs.map(props => {
                        return <FormControl key={props.formControlName} {...props}/>
                    })
                }
            </div>
            <div className="btn-cont">
                <Button />
            </div>
        </div>
    )
}

export default RegisterForm
