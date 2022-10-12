import styled from "styled-components";
import { Standard } from "~/types";
import { getAge, parseJSONString } from "../../utils/helper";

const StyledIntroductionSection = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0px;

    p {
        margin: 35px 0px 0px;
        max-width: 600px;
        font-size: var(--fs-lg);
        /* font-family: var(--font-mono); */
        /* font-style: italic; */
    }
`;

const StyledAboutTitle = styled.h1`
    margin: 0px 0px 15px 4px;
    color: var(--secondary);
    font-family: var(--font-mono);
    font-size: clamp(var(--fs-sm), 5vw, var(--fs-lg));
    font-weight: 400;
`;

export function IntroductionSection({ title, name, description }:  Standard.Text.TIntroduction) {
    const desc = parseJSONString(["$age"], description, [
        getAge().toString(),
    ]);

    return (
        <StyledIntroductionSection id="introduction">
            <StyledAboutTitle>{title}</StyledAboutTitle>
            <h2 className="headline">{name}</h2>
            <p>{desc}</p>
        </StyledIntroductionSection>
    );
}
