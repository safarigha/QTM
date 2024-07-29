import { ZodSchema } from "zod";
//////commons coponent interfaces//
export interface ILogoTitle {
  label: string;
  logo: string;
  className?: string;
}

export interface IIconInput {
  placeholder: string;
  icon: string | React.ReactNode;
  className?: string;
}

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

export interface ICreateNewButton {
  color: string;
  label: string;
  className: string;
  labelClassName: string;
}

//////Board component interfasces//
export interface ISidebarDropdown {
  title: string;
  content: string | React.ReactNode;
  className?: string;
  titleClassName?: string;
  contentlassName?: string;
  iconType: string;
}

export interface IWorkspaceItem {
  id: number;
  name: string;
  color: string;
}

export interface ISidbarWorkspaceList {
  data: IWorkspaceItem[];
}

export interface ISidebarDisplayAccount {
  selectedImage?: string;
}

//////inputForm
export interface ITextField {
  id: string;
  label: string;
  type: "text";
  name?: string;
  value?: string;
  // register: ReturnType<UseFormRegister<any>>;
}

export interface IEmailField {
  id: string;
  label: string;
  type: "email";
  name?: string;
  value?: string;
  // register: ReturnType<UseFormRegister<any>>;
}

export interface IPasswordField {
  id: string;
  label: string;
  type: "password";
  name?: string;
  value?: string;
  // register: ReturnType<UseFormRegister<any>>;
}

export type IField = ITextField | IEmailField | IPasswordField;

export interface IInputForm {
  onSubmit: (data: any) => void;
  fields: {
    id: string;
    type: string;
    label: string;
    name?: string;
    value?: string;
  }[];
  submitText: string;
  schema: ZodSchema<any>;
  includeCheckbox?: boolean;
  onclick?: () => void;
}

//////Toastify//
export interface IToast {
  showSuccess: (
    type: "register" | "login" | "resetPassword" | "setPassword" | "logout"
  ) => void;
  // showError: (type: "register" | "login") => void;
  showError: (message: string) => void;
  showInfo: (message: string) => void;
  showWarning: (message: string) => void;
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

//////Login//
export type ILoginFormData = {
  username: string;
  password: string;
};

//////reset password//
export type IResetFormData = {
  email: string;
};

//////reset password//
export type ISetPasswordFormData = {
  password: string;
  password1: string;
};

//////RTK interfasces//
export interface AuthState {
  token: string | null;
  expiresIn: number | null;
  account: {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    thumbnail: string;
  } | null;
}

export interface WorkspaceState {
  workspaces: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface ProjectsState {
  projectsByWorkspace: { [key: string]: any[] };
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface FetchProjectsPayload {
  workspaceId: string;
  projects: any;
}

export interface AccountState {
  data: any;
  status: string;
  error: string | null;
}

export interface RootState {
  auth: AuthState;
  workspaces: WorkspaceState;
  projects: ProjectsState;
  account: AccountState;
}
