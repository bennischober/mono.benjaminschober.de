export interface IComponent {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}

export namespace Standard {
    export namespace Layout {
        export type THeaderLink = {
            title: string,
            anchor: string,
        };

        export type TSidebarLink = {
            title: string,
            url: string,
            icon: string,
        };
    }

    export namespace Text {
        export type TIntroduction = {
            title: string,
            name: string,
            description: string,
        }

        export type TAbout = {
            title: string,
            description: string,
            anchor: string,
            interests: string[],
        }
    }

    export namespace Content {
        export type TContent = {
            content?: string,
            meta: { [key: string]: any },
            isEmpty: boolean,
        };
    }
}

export interface LayoutProps {
    sections: {
        [key: string]: {
            title: string,
            anchor: string,
        }
    };
    links: [
        {
            title: string,
            url: string,
            icon: string,
        }
    ],
    introduction: {
        title: string,
        name: string,
        description: string,
    }
}

export interface MainProps {
    layout: LayoutProps,
}
