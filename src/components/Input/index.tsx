/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { RiErrorWarningFill } from "react-icons/ri";

import { InputAdornment, MenuItem, TextField } from "@mui/material";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
  label: string;
  errorMessage?: string;
  registerName: string;
  fontSize?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  isFullWidth?: boolean;
}

interface IOption {
  value: string;
  label: string;
}

interface ISelectGlobal extends InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
  label: string;
  errorMessage?: string;
  registerName: string;
  fontSize?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  options: IOption[];
}

export const InputGlobal = ({
  error,
  label,
  register,
  errorMessage,
  registerName,
  type,
  isFullWidth,
  maxLength,
  fontSize,
}: IInput) => {
  return (
    <TextField
      error={error}
      label={label}
      type={type}
      maxLength={maxLength}
      variant="outlined"
      id={registerName}
      fullWidth={isFullWidth ? true : false}
      InputLabelProps={{ style: { fontSize: `${fontSize ? fontSize : 17}px` } }}
      helperText={error ? errorMessage : " "}
      {...register(registerName)}
      InputProps={{
        endAdornment: error && (
          <InputAdornment position="start">
            <RiErrorWarningFill fill="#d32f2f" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export const InputSelectGlobal = ({
  error,
  label,
  register,
  errorMessage,
  registerName,
  options,
  fontSize,
}: ISelectGlobal) => {
  return (
    <TextField
      id={registerName}
      select
      error={error}
      label={label}
      defaultValue=""
      InputLabelProps={{ style: { fontSize: `${fontSize ? fontSize : 17}px` } }}
      helperText={error ? errorMessage : " "}
      {...register(registerName)}
      InputProps={{
        endAdornment: error && (
          <InputAdornment style={{ paddingRight: "1rem" }} position="start">
            <RiErrorWarningFill fill="#d32f2f" />
          </InputAdornment>
        ),
      }}
    >
      {options?.map((option, index) => {
        return (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
};
