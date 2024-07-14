import styled from "styled-components";
import {theme} from "../styles/Theme.styled";

type Props = {
    gap?: string;
}

export const GridWrapper = styled.div<Props>`
    display: grid;
    gap: ${props => props.gap || "32px"};
    grid-template-columns: 1fr; // Один столбец по умолчанию

    @media (min-width: 376px) and (max-width: 768px) {
        grid-template-columns: 1fr 1fr; // Два столбца между 345px и 768px
    }

    @media (min-width: 769px) {
        grid-template-columns: 1fr 1fr 1fr 1fr; // Четыре столбца на больших экранах (если нужно)
    }
`