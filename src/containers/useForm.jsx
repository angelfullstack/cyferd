import { useState } from "react";

export const useForm = (options) => {
  const [data, setData] = useState(options?.initialValues || {});
  const [errors, setErrors] = useState({});

  const handleChange = (key, sanitizeFn) => (e) => {
    // const value = sanitizeFn ? sanitizeFn(e.value) : e.value;
    setData({
      ...data,
      [key]: e,
    });
    // console.log([key], value);
  };

  const handleSubmit = async (evt) => {
    // console.log(evt);
    evt.preventDefault();
    const validations = options?.validations;
    if (validations) {
      // console.log(validations, data);
      let valid = true;
      const newErrors = {};
      for (const key in validations) {
        // console.log(key, data);
        const value = data[key]?.value ? data[key].value : null;
        const validation = validations[key];
        const required = validation.required ? validation.required : false;
        newErrors[key] = {};
        if (required && !value) {
          // console.log("required", key);
          valid = false;
          newErrors[key].required = "required field";
        } else if (value) {
          // const pattern = validation?.pattern;
          // if (pattern?.value && !RegExp(pattern.value).test(value)) {
          //   valid = false;
          //   newErrors[key].validation = pattern.message;
          // }

          const patternValidationResult = patternValidation(value, validation, valid);
          valid = patternValidationResult.valid;
          newErrors[key].validation =
            !valid && patternValidationResult.message
              ? patternValidationResult.message
              : newErrors[key].validation;

            console.log(valid, newErrors[key].validation);
          // const custom = validation?.custom;
          // if (custom?.isValid && !custom.isValid(value)) {
          //   valid = false;
          //   newErrors[key].validation = custom.message;
          // }

          const customValidationResult = customValidation(value, validation,valid);
          valid = customValidationResult.valid;
          newErrors[key].validation =
            !valid && customValidationResult.message
              ? customValidationResult.message
              : newErrors[key].validation;
                        console.log(valid, newErrors[key].validation);


          const compare = validation.compare ? validation.compare : null;
          const compareTo =
            compare && data[compare.compareTo]?.value
              ? data[compare.compareTo].value
              : null;
          if (compare && !compare.isValid(value, compareTo)) {
            valid = false;
            newErrors[key].validation = compare.message;
            // console.log(compare.message);
          }
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors({});

    if (options?.onSubmit) {
      options.onSubmit();
    }
  };

  const patternValidation = (value, validation, valid) => {
    const pattern = validation?.pattern;
    if (pattern?.value && !RegExp(pattern.value).test(value)) {
      return {
        valid: false,
        message: pattern.message,
      };
    } else {
      return { valid: valid };
    }
  };

  const customValidation = (value, validation, valid) => {
    const custom = validation?.custom;
    if (custom?.isValid && !custom.isValid(value)) {
      return {
        valid: false,
        message: custom.message,
      };
    } else {
      return { valid: valid };
    }
  };

  const compareValidation = (value, validation) => {};

  const fds = () => {};

  return {
    data,
    handleChange,
    handleSubmit,
    errors,
  };
};

export default useForm;
