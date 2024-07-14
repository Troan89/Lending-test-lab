import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLogo>
                <StyledWrapperIcons>
                    <IconWrapper offset>
                        <Icon iconId={'ellipse2'}/>
                    </IconWrapper>
                    <IconWrapper>
                        <Icon iconId={'ellipse1'}/>
                    </IconWrapper>
                    <p>
                        testLab
                    </p>
                </StyledWrapperIcons>

        </StyledLogo>

    );
};


const StyledLogo = styled.div`
    display: flex;
    gap: 9px;
    align-items: center;
    
    p {
        margin-left: 40px; /* Расстояние между иконками и текстом */
        line-height: var(--headline5-line-height);
        font-size: var(--headline5-size);
        font-weight: var(--headline5-weight);
    }
`

const StyledWrapperIcons = styled.div`
    position: relative;
    width: 29px; /* Ширина равна сумме ширин двух иконок за вычетом их наложения */
`;

const IconWrapper = styled.div<{offset?:boolean}>`
    position: absolute;
    left: ${({ offset }) => (offset ? '13px' : '0')};
`;
