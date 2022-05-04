import React from "react";
import { IconBase } from "react-icons";

/** --- COMPONENTS --- **/

export interface AppContainerProps {
    children: React.ReactNode;
}

export interface CompleteNavbarProps {
    hidden?: boolean
}

export interface LinksGroupProps {
    icon: typeof IconBase;
    label: string;
    initiallyOpened?: boolean;
    link?: string;
    links?: { label: string; link: string }[];
}


/**--- CALCULATIONS ---**/

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