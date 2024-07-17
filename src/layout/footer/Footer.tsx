import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";

export const Footer = () => {
    return (
        <FooterContainer>
                <FooterCopyright>© 2021 Лаборатория интернет</FooterCopyright>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    min-height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${theme.typography.body18.weight};
    font-size: ${theme.typography.body18.size};
    line-height: ${theme.typography.body18.lineHeight};
    
    @media ${theme.media.tablet} {
        max-width: 768px;
    }
    @media ${theme.media.mobile} {
        max-width: 375px;
    }
    @media ${theme.media.miniMobile} {
        max-width: 320px;
    }
`

const FooterCopyright = styled.small`
    
`