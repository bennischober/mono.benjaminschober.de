import { Session } from "next-auth";
import { IconBase } from "react-icons";

/** --- COMPONENTS --- **/

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
    id: number
}

export interface LoginPageProps {
    session: LoginPageSession;
}

export interface LoginComponentProps {
    loginHandler: (username: string, password: string, remember: boolean) => void;
}

/** --- OTHER --- **/
export interface LoginFormValues {
    email: string;
    password: string;
    remember: boolean;
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