import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled";
import {useAppSelector} from "../../../store/store";

export const FiveBlock = () => {
    const items = useAppSelector(state=>state.baseSlice.fiveBlock)
    return (
        <FiveBlockWrapper>
                <FiveBlockBlock>
                    {items.map((item, index) => (
                        <FiveBlockItem key={index}>
                            <FiveBlockTitle>{item.title}</FiveBlockTitle>
                            <FiveBlockText>{item.text}</FiveBlockText>
                        </FiveBlockItem>
                    ))}
                </FiveBlockBlock>
        </FiveBlockWrapper>
    );
};

const FiveBlockWrapper = styled.section`
    max-width: 1920px;
    width: 100%;
    min-height: 662px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.color.gray.extralightGray};
`

const FiveBlockBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    max-width: 1266px;
    width: 100%;
    min-height: 527px;
    padding: 0 20px;
`

const FiveBlockItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    max-width: 592px;

    @media ${theme.media.tablet} {
        max-width: 728px;
        min-height: 190px;
    }
    @media ${theme.media.mobile} {
        max-width: 343px;
        width: 100%;
        min-height: 302px;
    }
`

const FiveBlockTitle = styled.p`
    font-weight: ${theme.typography.body18.bold};
    font-size: ${theme.typography.body18.size};
    line-height: ${theme.typography.body18.lineHeight};
`

const FiveBlockText = styled.p`
    font-size: ${theme.typography.body16.size};
    line-height: ${theme.typography.body16.lineHeight};
    font-weight: ${theme.typography.body16.weight};
`
