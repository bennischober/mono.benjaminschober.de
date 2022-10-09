import styled, { css } from "styled-components";
import { useScrollDirection, useScrolledToTop } from "../../hooks";
import head from "../../content/layout/head.json";

interface StyledHeaderProps {
    scrollDirection: string | null;
    scrolledToTop: boolean;
}

// create a StyledHeader that will be sticky and uses a drop shadow on down scroll
const StyledHeader = styled.header<StyledHeaderProps>`
    position: sticky;
    height: 100px;
    padding: 0px 50px;
    top: 0;
    z-index: 100;
    transition: box-shadow 0.3s ease-in-out;
    ${(props) =>
        (props.scrollDirection === "down" || props.scrollDirection === "up") &&
        !props.scrolledToTop &&
        css`
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        `}
`;

interface HeaderProps {
    children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
    const scrollDir = useScrollDirection();
    const top = useScrolledToTop();

    console.log(head, head.title);

    const t = fetch("http://localhost:8080/ping").then((res) => {
        console.log(res);
        res.json().then((data) => {
            console.log(data);
        });
    });

    return (
        <StyledHeader scrollDirection={scrollDir} scrolledToTop={top}>
            {children}
        </StyledHeader>
    );
}
