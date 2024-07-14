import styled from "styled-components";
import {theme} from "../styles/Theme.styled";

export const SectionTitile = styled.h2`
    color: ${theme.color.dark};
    text-align: center;
    font-size: ${theme.typography.headline2.size};
    line-height: ${theme.typography.headline2.lineHeight};
    font-weight: ${theme.typography.headline2.weight};

    @media ${theme.media.mobale} {
        font-size: ${theme.typography.headline4.size};
        line-height: ${theme.typography.headline4.lineHeight};
        font-weight: ${theme.typography.headline4.weight};
    }
    @media ${theme.media.miniMobile} {
        font-size: ${theme.typography.headline4.size};
        line-height: ${theme.typography.headline4.lineHeight};
        font-weight: ${theme.typography.headline4.weight};
    }
`