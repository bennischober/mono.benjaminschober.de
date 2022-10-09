import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { Link } from "../Link";

// only in dev mode
import links from "../../dev/header.json";

const StyledSidebarLeft = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0;
    left: 40px;
    z-index: 10;
    right: auto;
`;

const StyledSocialLinks = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
    &:after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0 auto;
        background: #fff;
    }
    li {
        margin: 10px 0px;
        transition: var(--transition);
        &:last-of-type {
            margin-bottom: 20px;
        }
        &:hover,
        &:focus {
            transform: translateY(-3px) !important;
        }
        svg {
            width: 20px;
            height: 20px;
        }
    }
`;

const socialLinks = links.links.map((link, index) => (
    <li key={link.url}>
        <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
        >
            <FontAwesomeIcon
                icon={
                    link.icon === "faGithub"
                        ? faGithub
                        : link.icon === "faLinkedin"
                        ? faLinkedin
                        : faEnvelope
                }
                size={"lg"}
            />
        </Link>
    </li>
));

export function LeftSidebar() {
    return (
        <>
            <StyledSidebarLeft>
                <StyledSocialLinks>{socialLinks}</StyledSocialLinks>
            </StyledSidebarLeft>
        </>
    );
}
