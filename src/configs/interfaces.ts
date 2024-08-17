import { ZodSchema } from "zod";
//////commons coponent interfaces//
export interface IIconTitle {
  label: string;
  logo: string | React.ReactNode;
  className?: string;
}

export interface IIconInput {
  placeholder: string;
  icon: string | React.ReactNode;
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  colorClass: string;
  className?: string;
}

export interface ColorCheckboxesListProps {
  className?: string;
  onColorChange: (color: string, name: string) => void;
}

export interface IQTlogo {
  className?: string;
}

export interface IBackgroundAuth {
  className?: string;
}

export interface ISwitchModeTheme {
  className?: string;
  onClick?: () => void;
}

export interface Tab {
  id: number;
  name: string;
  label: string;
  content: string | React.ReactNode;
  icon?: React.ReactNode;
}

export interface TabsFormProps {
  fields: Tab[];
  className?: string;
  middleContent?: React.ReactNode;
  middleClassName?: string;
  onTabChange?: (name: string) => void;
}

//////buttons
export interface IBrandColorButton {
  text: string | React.ReactNode;
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
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IRestoreTaskButton {
  label: string;
  className: string;
  labelClassName: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
  className?: string;
}

export interface ISidebarLogoutAccount {
  className?: string;
}

//////Workspace component interfasces//
export interface INewWorkspaceFormData {
  name?: string;
  color?: string;
}

export interface INewWorkspaceSteps {
  onNext: (data: INewWorkspaceFormData) => void;
}

export interface NewWorkspaceProps {
  onClose: () => void;
}

export interface INewlabelColor {
  onNext: (data: INewWorkspaceFormData) => void;
  onPrevious: () => void;
}

export interface NewDisplayDataProps {
  onSuccess: () => void;
  onPrevious: () => void;
}

//////Project component interfasces//
export interface NewProjectProps {
  onClose: () => void;
  workspaceId: string;
}

export interface INewProjectFormData {
  id: string;
  name: string;
}

//////inputForm
interface ITextField {
  id: string;
  label: string;
  type: "text";
  name?: string;
  value?: string;
}

export interface IEmailField {
  id: string;
  label: string;
  type: "email";
  name?: string;
  value?: string;
}

export interface IPasswordField {
  id: string;
  label: string;
  type: "password";
  name?: string;
  value?: string;
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
    defaultValue?: string;
  }[];
  submitText: string;
  schema: ZodSchema<any>;
  includeCheckbox?: boolean;
  onclick?: () => void;
}

//////Toastify//
export interface IToast {
  showSuccess: (
    type:
      | "register"
      | "login"
      | "resetPassword"
      | "setPassword"
      | "logout"
      | "created"
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
  currentWorkspaceId: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
export interface Project {
  id: string;
  name: string;
}

export interface ProjectsState {
  projectsByWorkspace: { [key: string]: Project[] };
  currentProject: Project | null;
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

//////Helpers interfasces//
export interface TailwindColorMap {
  [key: string]: string;
}

//////Profile interfaces//
export interface SidebarProfileProps {
  onComponentChange: (type: string) => void;
}

export type IPersonalFormData = {
  first_name: string;
  last_name: string;
  phone_number: string;
  thumbnail?: string | null;
};

export type IAccountFormData = {
  username: string;
  email: string;
  old_password: string;
  new_password: string;
  new_password1: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  thumbnail?: string;
};

export interface ISettingsFormData {
  theme: string;
}

export interface IColumnView {
  className?: string;
}

export interface IListView {
  className?: string;
}

export interface IFooter {
  className?: string;
}

export interface IHeader {
  className?: string;
}
