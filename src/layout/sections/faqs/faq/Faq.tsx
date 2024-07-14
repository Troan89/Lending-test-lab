import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.styled";

type Props = {
    iconId: string
    title: string
    description: string
}

export const Faq = (props: Props) => {
    const {iconId, title, description} = props
    return (
        <StyledFaq>
            <Icon iconId={iconId} width={'72px'} height={'72px'} viewBox={'0 0 72 72'}/>
            <div>
                <FaqTitle>{title}</FaqTitle>
                <FaqText>{description}</FaqText>
            </div>

        </StyledFaq>
    );
};

const StyledFaq = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 164px;
    max-width: 280px;
    gap: 4px;
    
    @media ${theme.media.tablet} {
        min-height: 76px;
        max-width: 342px;
        width: 100%;
    }
    @media ${theme.media.mobale} {
        min-height: 76px;
        max-width: 342px;
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        flex-direction: row;
        gap: 16px;
    }
    
    @media ${theme.media.miniMobile} {
        min-height: 100px;
        max-width: 288px;
        width: 100%;
        flex-direction: row;
    }
`
const FaqTitle = styled.h3`
    font-weight: ${theme.typography.headline6.weight};
    font-size: ${theme.typography.headline6.size};
    line-height: ${theme.typography.headline6.lineHeight};
    color: ${theme.color.dark};
`
const FaqText = styled.p`
    color: ${theme.color.gray.darkGray};
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
`