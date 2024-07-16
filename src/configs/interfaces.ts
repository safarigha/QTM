//////commons coponent interfaces//

import { ReactNode } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { ZodSchema } from "zod";

//////buttons
export interface IBrandColorButton {
  text: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export interface IaddProjectButton {
  color: string;
}

export interface ICloseButton {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IInputButton {
  onSubmit: (email: string) => void;
  className?: string;
}

export interface IRedButton {
  text: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export enum FlexDirection {
  Row = "row",
  RowReverse = "row-reverse",
}

export interface ISimpleButton {
  text: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  isOpen?: boolean;
  icon?: JSX.Element | string;
  flexDirection?: FlexDirection;
}

export interface IAddTaskCalenderButton {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

///////input
export interface IInput {
  label: string;
  id: string;
  type: string;
  onChange?: (e: { target: { value: string; id: string } }) => void;
}

//////inputForm

export interface ITextField {
  id: string;
  label: string;
  type: "text";
  // register: ReturnType<UseFormRegister<any>>;
}

export interface IEmailField {
  id: string;
  label: string;
  type: "email";
  // register: ReturnType<UseFormRegister<any>>;
}

export interface IPasswordField {
  id: string;
  label: string;
  type: "password";
  // register: ReturnType<UseFormRegister<any>>;
}

export type IField = ITextField | IEmailField | IPasswordField;

export interface IInputForm {
  onSubmit: (data: any) => void;
  fields: { id: string; type: string; label: string }[];
  submitText: string;
  schema: ZodSchema<any>;
  includeCheckbox?: boolean;
  onclick?: () => void;
}

//////authentication interfasces//
//////rule//
export interface IRules {
  onClose: () => void;
}

//////register//
export type IRegisterFormData = {
  username: string;
  email: string;
  password: string;
  // isCheckedRule: boolean;
};

// export interface IRegisterForm {
//   onSubmit: (data: IRegisterFormData) => void;
//   errors: Partial<Record<keyof IRegisterFormData, { message: string }>>;
// }
