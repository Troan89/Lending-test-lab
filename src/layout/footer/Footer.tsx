import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";

export const Footer = () => {
    return (
        <StyledFooter>
                <Copyright>© 2021 Лаборатория интернет</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media ${theme.media.tablet} {
        max-width: 768px;
    }
    @media ${theme.media.mobale} {
        max-width: 375px;
    }
    @media ${theme.media.miniMobile} {
        max-width: 320px;
    }
`

const Copyright = styled.small`
    
`