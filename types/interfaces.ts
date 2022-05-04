import React from "react";
import { IconBase } from "react-icons";
export interface AppContainerProps {
    children: React.ReactNode;
}

export interface LinksGroupProps {
    icon: typeof IconBase;
    label: string;
    initiallyOpened?: boolean;
    link?: string;
    links?: { label: string; link: string }[];
}