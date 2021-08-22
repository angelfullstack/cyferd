import React from "react";
import useForm from "../../../../containers/useForm"
import Button from "../../atoms/Button/Button";
import {
  RegisterInputs,
  RegisterButton,
} from "../../../../constants/constants";
import FormControl from "../../molecules/FormControl/FormControl";
import { Styled, variables } from "../../../../assets/styled/styled";

let RegisterForm = () => {

 const validations = {};
  const { handleSubmit, handleChange, data, errors } = useForm({
    validations:validations,
    onSubmit: () => console.log('Submitted',data),
  });
  return (
    <StyledRegisterForm onSubmit={handleSubmit}>
      {errors.name && <p className="error">{errors.name}</p>}
      <div className="form-group">
        {RegisterInputs.map((props) => {
          if(props.validations){
            validations[props.formControlName] = props.validations

          }
          return (
            <FormControl
              key={props.formControlName}
              {...props}
              handleValue={handleChange(
                props.formControlName,
                props.handleValue
              )}
              errors = {errors[props.formControlName]}
            />
          );
        })}
      </div>
      <div className="btn-cont">
        <Button type={RegisterButton.type} text={RegisterButton.text} />
      </div>
    </StyledRegisterForm>
  );
};

const StyledRegisterForm = Styled.form`
width:30rem;
filter: drop-shadow(1rem 1rem .5rem ${variables.colorShadow});
@media(max-width: 764px) {
width:20rem;
}
@media(max-width: 394px) {
width:15rem;
}

`;

export default RegisterForm;
