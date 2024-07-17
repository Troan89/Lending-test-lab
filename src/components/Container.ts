import styled from "styled-components";
import {theme} from "../styles/Theme.styled";

export const Container = styled.div`
    max-width: 1216px;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;

    @media ${theme.media.tablet} {
        max-width: 727px;
        width: 100%;
        min-height: 100%;
        //padding: 0 20px;
    }

    @media ${theme.media.mobile} {
        max-width: 342px;
        width: 100%;
        min-height: 100%;
        //padding: 0 16px;
    }   

    @media ${theme.media.miniMobile} {
        max-width: 288px;
        width: 100%;
        min-height: 100%;
        padding: 0 16px;
    }
`