import React from 'react'
import { useForm } from "react-hook-form";
import Button from '../../atoms/Button/Button'
import { RegisterInputs, RegisterButton } from '../../../../constants/FormsConstants'
import FormControl from '../../molecules/FormControl/FormControl'
import { Styled, variables } from "../../../../assets/styled/styled"
import { useDispatch, useSelector, connect } from "react-redux"


let RegisterForm = (props) => {
    const defaultValues = {
      username: "",
      password: "",
      repeat_password: "",
      birthDate: new Date(),
      age: 0,
      optin: false
    };

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    
    const submit = (event) => {
        console.log (event.target[0])
        const form = event
        handleSubmit(event);
    }

    const onSubmit = evt => { 
            console.log(evt)
        }
    return (
      <StyledRegisterForm
        className="register-form"
         onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group">
          {RegisterInputs.map((props) => {
            return <FormControl key={props.formControlName} {...props}/>;
          })}
        </div>
        <div className="btn-cont">
          <Button
            type={RegisterButton.type}
            text={RegisterButton.text}
          />
        </div>
      </StyledRegisterForm>
    );
}

const StyledRegisterForm = Styled.form`
width:50vw;
`

export default RegisterForm
