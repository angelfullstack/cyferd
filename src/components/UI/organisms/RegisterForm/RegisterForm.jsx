import React from 'react'
import Button from '../../atoms/Button/Button'
import { RegisterInputs, RegisterButton } from '../../../../constants/FormsConstants'
import FormControl from '../../molecules/FormControl/FormControl'
import { Styled, variables } from "../../../../assets/styled/styled";


const RegisterForm = props => {
    return (
        <StyledRegisterForm className="register-form">
            <div className="form-group">
                {
                    RegisterInputs.map(props => {
                        return <FormControl key={props.formControlName} {...props}/>
                    })
                }
            </div>
            <div className="btn-cont">
                <Button 
                    type={RegisterButton.type}
                    text={RegisterButton.text}
                />
            </div>
        </StyledRegisterForm>
    )
}

const StyledRegisterForm = Styled.form`
width:50vw;
`

export default RegisterForm
