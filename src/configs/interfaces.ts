//buttons interfaces//
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

//input interfaces//
export interface IInput {
  label: string;
  id: string;
  type: string;
  onChange?: (e: { target: { value: string; id: string } }) => void;
}
