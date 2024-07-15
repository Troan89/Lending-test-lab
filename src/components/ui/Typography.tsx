import React from 'react';
import styled, {css} from 'styled-components';
import {theme} from "../../styles/Theme.styled";

type TypographyProps = {
    variant: 'headline1' | 'headline2';
    children: React.ReactNode;
    style?: React.CSSProperties;
};

export const Typography = ({variant, children, style}: TypographyProps) => {
    debugger
    // @ts-ignore
    const {weight, size, lineHeight, media} = theme.typography[variant];

    const StyledTypography = styled.div`
        font-weight: ${weight};
        font-size: ${size};
        line-height: ${lineHeight};
        
        
        @media ${theme.media.tablet} {
        font-size: ${media.tablet.size};
        line-height: ${media.tablet.lineHeight};
        font-weight: ${media.tablet.weight};
    }

        @media ${theme.media.mobile} {
            font-size: ${media.mobile.size};
            line-height: ${media.mobile.lineHeight};
            font-weight: ${media.tablet.weight};
        }

        @media ${theme.media.miniMobile} {
            font-size: ${media.miniMobile.size};
            line-height: ${media.miniMobile.lineHeight};
            font-weight: ${media.miniMobile.weight};
        }
    `;

    return <StyledTypography style={style}>{children}</StyledTypography>;
};