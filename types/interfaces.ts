import { Session } from "next-auth";
import { IconBase } from "react-icons";

/** --- COMPONENTS --- **/

export interface PageTemplateProps {
    title: string;
    description?: string;
    content?: string;
    favicon?: string;
    children: React.ReactNode;
}

export interface AppContainerProps {
    children: React.ReactNode;
}

export interface CompleteHeaderProps {
    handleNavigation: (opened: boolean) => void;
    opened: boolean;
}

export interface CompleteNavbarProps {
    hidden?: boolean;
}

export interface LinksGroupProps {
    icon: typeof IconBase;
    label: string;
    initiallyOpened?: boolean;
    link?: string;
    links?: { label: string; link: string }[];
}

export interface UserButtonProps {
    image?: string;
    name: string;
    email: string;
    color?: string;
}

// they might need another name
interface LoginPageSession extends Session {
    status: string;
    id: number;
    userid: string;
}

export interface LoginPageProps {
    session: LoginPageSession;
}

export interface LoginComponentProps {
    loginHandler: (username: string, password: string, remember: boolean) => void;
    forgotPassword : () => void;
}

export interface RegisterComponentProps {
    registerHandler: (registerData: RegisterFormValues) => void;
}

/** --- OTHER --- **/
export interface LoginFormValues {
    email: string;
    password: string;
    remember: boolean;
}

export interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    accept: boolean;
}

export interface RegisterHandleData {
    name: string;
    email: string;
    password: string;
    accept: boolean;
}

/** --- CALCULATIONS --- **/

export interface AspectRatio {
    width: number;
    height: number;
}

export interface ResolutionProps {
    aspectLeft: number;
    aspectRight: number;
    width: number;
    height: number;
}