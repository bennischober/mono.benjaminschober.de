import styled from "styled-components";
import { variables } from "../../styles/variables";
import { IComponent } from "../../types";

interface LinkProps extends IComponent {
    text?: string;
    href?: string;
    target?: string;
    rel?: string;
    scrollToTop?: boolean;
    scrollToLink?: string;
}

const StyledLink = styled.a`
    ${variables};
    color: var(--secondary);
    &:hover,
    &:hover > span {
        cursor: pointer;
        color: var(--secondary) !important;
    }
    &:hover span {
        color: var(--secondary) !important;
    }
`;

/**
 * This component can be:
 * - a normal link
 * - a scroll to anchor link
 * - a scroll to top link
 * It has to be wrapped around a child component.
 */
export function Link({
    children,
    style,
    className,
    text,
    href,
    target,
    rel,
    scrollToTop,
    scrollToLink,
}: LinkProps) {
    const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (href) return;

        e.preventDefault();

        if (href) {
            window.location.href = href;
        }

        if (scrollToTop) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        if (scrollToLink) {
            const element = document.getElementById(
                scrollToLink.replace("#", "")
            );
            if (element) {
                console.log("scrolling into view!");
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <StyledLink
            onClick={onClick}
            href={href}
            style={style}
            className={className}
            target={target}
            rel={rel}
        >
            {text}
            {children}
        </StyledLink>
    );
}
