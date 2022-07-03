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
	forgotPassword: () => void;
}

export interface RegisterComponentProps {
	registerHandler: (registerData: RegisterFormValues) => void;
}

export interface TodoPageProps {
	session: LoginPageSession;
	todos: Todo[];
}

export interface SpecificTodoPageProps {
	session: LoginPageSession;
	todos: Todo;
}

export interface TodoCardProps {
	todo: Todo;
}

/** --- OTHER --- **/
export interface Bar {
	key: number;
	height: number;
	color: string;
}

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

export interface Todo {
	user: string;
	content: {
		title: string;
		text: string;
		link?: string | string[];
	};
	date: {
		create: string;
		end?: string;
	};
	meta: {
		postid: string;
		categories?: string[];
		tags?: string[];
		type?: string;
	}
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

/* SORTING ALGO COMPONENTS */
export interface AlgoData {
    value: string;
    label: string;
    timeComplexity: {
        best: string;
        average: string;
        worst: string;
    };
    spaceComplexity: {
        best: string;
        average: string;
        worst: string;
    };
    description: string;
    sources: string[];
}

interface SortAlgorithmBase {
	speed: number;
	bars: Bar[];
	setBars: (bars: Bar[]) => void;
	task: (i: number) => Promise<void>;
	done: (m?: string, o?: any) => void;
}

export interface MergeSortProps extends SortAlgorithmBase { }
export interface QuickSortProps extends SortAlgorithmBase { }
export interface HeapSortProps extends SortAlgorithmBase { }
export interface BubbleSortProps extends SortAlgorithmBase { }
export interface SelectionSortProps extends SortAlgorithmBase { }
export interface InsertionSortProps extends SortAlgorithmBase { }
