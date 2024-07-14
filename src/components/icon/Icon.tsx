import React from 'react';
import iconsSprite from '../../assets/img/iconsSprite.svg'
import styled from "styled-components";

type Props = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    hoverColor?: string
}

export const Icon = (props: Props) => {
    const {iconId, viewBox, height, width, hoverColor} = props
    return (
        <StyledIcon
            width={width || "24"}
            height={height || "24"}
            viewBox={viewBox || "0 0 24 24"}
            hoverColor={hoverColor}
        >
            <use xlinkHref={`${iconsSprite}#${iconId}`} />
        </StyledIcon>
    );
};

const StyledIcon = styled.svg<{ hoverColor?: string }>`
    fill: none;

    &:hover {
        stroke: ${({ hoverColor }) => hoverColor || 'none'};
    }
    &:hover circle {
        stroke: ${({ hoverColor }) => hoverColor || 'none'}; /* Цвет бордера при наведении */
        fill: ${({ hoverColor }) => hoverColor || 'none'};
    }
`;
