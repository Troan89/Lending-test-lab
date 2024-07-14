import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme.styled";
import {useAppSelector} from "../../../store/store";

export const FiveBlock = () => {
    const items = useAppSelector(state=>state.baseSlice.fiveBlock)
    return (
        <StyledWrapper>
            <StyledBlock>
                {items.map((item, index) => (
                    <StyledItem key={index}>
                        <Title>{item.title}</Title>
                        <Text>{item.text}</Text>
                    </StyledItem>
                ))}
            </StyledBlock>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.section`
    max-width: 1920px;
    width: 100%;
    min-height: 662px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.color.gray.extralightGray};
    
    @media ${theme.media.tablet} {
        max-width: 768px;
        width: 100%;
        min-height: 984px;
    }

    @media ${theme.media.mobale} {
        max-width: 375px;
        min-height: 1589px;
    }

    @media ${theme.media.miniMobile} {
        max-width: 320px;
        min-height: 1807px;
    }
`

const StyledBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    max-width: 1216px;
    min-height: 527px;
    
    @media screen and (max-width: 768px) {
        padding: 20px;
    }
`

const StyledItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    max-width: 592px;

    @media ${theme.media.tablet} {
        max-width: 728px;
        min-height: 190px;
    }
    @media ${theme.media.mobale} {
        max-width: 343px;
        width: 100%;
        min-height: 302px;
    }
`

const Title = styled.p`
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
`

const Text = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
`
