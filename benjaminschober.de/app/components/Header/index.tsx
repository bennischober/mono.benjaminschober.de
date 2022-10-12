import styled, { css } from "styled-components";
import { Standard } from "~/types";
import { useScrollDirection, useScrolledToTop } from "../../hooks";
import { Link } from "../Link";
import { Logo } from "../Logo";

interface StyledHeaderProps {
    scrollDirection: string | null;
    scrolledToTop: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
    position: sticky;
    padding: 10px 40px;
    top: 0;
    z-index: 100;
    transition: box-shadow 0.3s ease-in-out;
    ${(props) =>
        (props.scrollDirection === "down" || props.scrollDirection === "up") &&
        !props.scrolledToTop &&
        css`
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.308);
        `}
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--font-mono);
    counter-reset: item 0;
    z-index: 12;
`;

const StyledLinks = styled.ol`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;
`;

// will be needed later
interface HeaderProps {
    links: Standard.Layout.THeaderLink[];
}

export function Header({ links }: HeaderProps) {
    const scrollDir = useScrollDirection();
    const top = useScrolledToTop();

    const headerLinks = links.map((link, index) => (
        <li key={link.anchor} tabIndex={0}>
            <Link
                key={link.anchor}
                scrollToLink={link.anchor}
                style={{ paddingLeft: "20px" }}
                className="header-links"
            >
                0{index + 1}.{" "}
                <span style={{ color: "white" }}>{link.title}</span>
            </Link>
        </li>
    ));

    return (
        <StyledHeader
            scrollDirection={scrollDir}
            scrolledToTop={top}
            id="header"
        >
            <Content>
                <Link scrollToTop>
                    <Logo />
                </Link>
                <StyledLinks>{headerLinks}</StyledLinks>
            </Content>
        </StyledHeader>
    );
}
