import styled from "styled-components";

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

interface AboutSectionProps {
    anchor: string;
    title: string;
    description: string;
    picture?: string;
}

export function AboutSection({
    anchor,
    title,
    description,
    picture,
}: AboutSectionProps) {
    // Note: description is already sanitized in 'backend' (see 'parseMarkdown' in 'utils/parser.ts')

    return (
        <StyledAboutSection id={anchor}>
            <h2 className="section-headline">{title}</h2>
            <div className="section-content">
                <div dangerouslySetInnerHTML={{ __html: description }} />
                <div>
                    <StyledMePicture>
                        <img src={picture ?? "/me.jpg"} alt="me" />
                    </StyledMePicture>
                </div>
            </div>
        </StyledAboutSection>
    );
}
