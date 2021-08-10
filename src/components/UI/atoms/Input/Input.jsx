import React, { useState, useCallback } from 'react'
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'
import {Styled, variables} from '../../../../assets/styled/styled';
import { useDispatch } from "react-redux";


const Input = ({formControlName, type, icon, placeholder, inputValue, required}) => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const [value, setValue] = useState('')
    const dispatch = useDispatch();

    const onChange = useCallback(
        (evt) =>{
            console.log(evt.target.value)
            dispatch({type: formControlName.toUpperCase(), payload: evt.target.value})
        },[setValue,inputValue,value]
    )
    return (
        <StyledInput 
        type={type}
        className={formControlName}
        placeholder={placeholder}
        id={formControlName}
        name={formControlName}
        onChange={onChange}
        {...register(formControlName, {required: required})}
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


const StyledInput = Styled.input`
    display: block;
    width: 100%;
    border: 1px solid ${variables.colorPrimary};
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
export default Input