import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../atoms/Button/Button";
import {
  RegisterInputs,
  RegisterButton,
} from "../../../../constants/constants";
import FormControl from "../../molecules/FormControl/FormControl";
import { Styled, variables } from "../../../../assets/styled/styled";

let RegisterForm = () => {
  const defaultValues = {
    username: "",
    password: "",
    repeat_password: "",
    birthDate: new Date(),
    age: 0,
    optin: false,
  };

  const {
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  const methods = useForm({ defaultValues });

  const onSubmit = (evt) => {
    console.log(evt, "onsubmit");
  };
  const onErrors = (errors) => {
    console.log(errors);
  };
  return (
    <StyledRegisterForm
      onSubmit={handleSubmit(onSubmit, onErrors)}
    >
      <div className="form-group">
        {RegisterInputs.map((props) => {
          return (
            <FormControl
              key={props.formControlName}
              {...props}
              register={methods.register}
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
