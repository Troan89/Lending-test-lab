import styled from "styled-components";
import {theme} from "../styles/Theme.styled";

type Props = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
}

export const FlexWrapper = styled.div<Props>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    width: 100%;
    //height: 100%;
    gap: ${props => props.gap || "0"};

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
    }
`
