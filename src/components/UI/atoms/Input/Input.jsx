import { useForm, useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
import { Styled, variables } from "../../../../assets/styled/styled";
export const ConnectForm = ({ children }) => {
  const methods = useFormContext();

  return children({ ...methods });
};

const Input = ({
  formControlName,
  type,
  icon,
  placeholder,
  inputValue,
  required,
}) => {
  const {
    register,
    // formState: { errors },
  } = useForm();

  const onChange = (
    (evt) => {
      console.log(evt.target.value);
    
    }
  );
  return (
    <StyledInput
      type={type}
      className={formControlName}
      placeholder={placeholder}
      id={formControlName}
      name={formControlName}
      onChange={onChange}
      innerRef={register(formControlName, { required: "is required" })}
    />
  );
};

Input.propTypes = {
  formControlName: PropTypes.string.isRequired,
  type: PropTypes.string,
  palceholder: PropTypes.string,
};

Input.defaultProps = {
  formControlName: "Dummy",
  type: "text",
  placeholder: "Dummy Input",
};

const StyledInput = Styled.input`
    display: block;
    width: 100%;
    border: .1em solid ${variables.colorPrimary};
    border-radius: .25em;
    color: ${variables.colorBlack};
    background-color: ${variables.colorWhite};
    transition: .3s;
    padding: .25em .5em;
    ::placeholder{
        color:${variables.colorGrey};
    }
    &:focus{
        outline:none;
        box-shadow: 0 0 1em ${variables.colorPrimary}
    }
    &[type="date"] {
        color:${variables.colorGrey};
        height: 1.825rem;
        &:focus{
                color: ${variables.colorBlack};
        }
    }
`;
export default Input;
