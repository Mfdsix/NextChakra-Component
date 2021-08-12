import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Checkbox,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  label: string;
  name: string;
  type?: string;
  reg: any;
  validator: Object;
  errors: any;
  info?: string;
}

const InputValidate: React.FC<Props> = ({
  label,
  name,
  type = "text",
  reg,
  validator,
  errors,
  info,
}) => {
  if (type == "checkbox") {
    return CheckInput({
      label,
      name,
      reg,
      validator,
      errors,
    });
  } else {
    return BasicInput({
      label,
      name,
      type,
      reg,
      validator,
      errors,
      info,
    });
  }
};

const BasicInput: React.FC<Props> = ({
  label,
  name,
  type = "text",
  reg,
  validator,
  errors,
  info,
}) => {
  return (
    <div>
      <FormControl mb="20px">
        <FormLabel>{label}</FormLabel>
        <Input
          type={type}
          errorBorderColor="crimson"
          {...reg(name, validator)}
          isInvalid={errors[name] ? true : false}
        />
        {info && <FormHelperText>{info}</FormHelperText>}
        {errors[name] && (
          <FormHelperText color="red">{errors[name].message}</FormHelperText>
        )}
      </FormControl>
    </div>
  );
};

const CheckInput: React.FC<Props> = ({
  label,
  name,
  reg,
  validator,
  errors,
}) => {
  return (
    <div>
      <Checkbox
        isInvalid={errors[name] ? true : false}
        {...reg(name, validator)}
      >
        {label}
      </Checkbox>
    </div>
  );
};

export default InputValidate;
