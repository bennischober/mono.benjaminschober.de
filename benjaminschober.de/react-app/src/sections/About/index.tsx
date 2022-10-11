import styled from "styled-components";

// only in dev mode
import links from "../../dev/header.json";

const StyledAboutSection = styled.section`
    max-width: 900px;
`;

const StyledMePicture = styled.picture`
    img {
        max-width: 100%;
        width: 100%;
        height: auto;
        height: 75%;
        object-fit: cover;
        object-position: 80% 20%;
    }
`;

export function AboutSection() {
    return (
        <StyledAboutSection>
            <h2 className="section-headline">{links.about.title}</h2>
            <div className="section-content">
                <div>{links.about.description}</div>
                <div>
                    <StyledMePicture>
                        <img src="/me.jpg" alt="me" />
                    </StyledMePicture>
                </div>
            </div>
        </StyledAboutSection>
    );
}
