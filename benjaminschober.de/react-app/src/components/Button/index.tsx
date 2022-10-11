import styled from "styled-components";
import { colors } from "../../styles/variables";
import { hexToRGBA } from "../../utils/helper";

const StyledButton = styled.button`
    padding: 0.75rem 1.25rem;
    border: 1px solid var(--secondary);
    border-radius: var(--border-radius);
    cursor: pointer;
    background-color: transparent;
    color: var(--secondary);
    font-size: var(--fs-md);
    transition: var(--transition);
    line-height: 1;
    font-family: var(--font-mono);

    &:hover {
        background-color: ${hexToRGBA(colors.secondaryLight, 0.1)};
    }

    &:focus {
        outline: none;
    }

    &:active {
    }
`;

export function Button() {
    return (
        <StyledButton>
            Button
        </StyledButton>
    );
}
