import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme.styled";
import {Typography} from "../../../components/ui/Typography";

export const MainTitle = () => {
    return (
        <MainTitleContainer>
            <MainTitleWrapper>
                    <MainTitleGroup>
                        <MainTitleTitle>
                            Говорят, никогда не поздно сменить профессию
                        </MainTitleTitle>
                        <MainTitleDescription>Сделай круто тестовое задание и у тебя получится</MainTitleDescription>
                    </MainTitleGroup>
                    <MainTitleButton>
                        <H5>Проще простого!</H5>
                    </MainTitleButton>
            </MainTitleWrapper>
        </MainTitleContainer>
    );
};

const MainTitleWrapper = styled.div`
    max-width: 748px;
    min-height: 334px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    @media ${theme.media.tablet} {
        max-width: 476px;
        min-height: 229px;
    }
    @media screen and (max-width: 375px) {
        max-width: 288px;
        min-height: 252px;
    }
`

const MainTitleContainer = styled.div`
    min-height: 880px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media ${theme.media.tablet} {
        min-height: 944px;
    }
    @media ${theme.media.mobile} {
        min-height: 516px;
    }
    @media ${theme.media.miniMobile} {
        min-height: 429px;
    }
`

const MainTitleTitle = styled.p`
    font-weight: ${theme.typography.headline1.weight};
    line-height: ${theme.typography.headline1.lineHeight};
    font-size: ${theme.typography.headline1.size};

    @media ${theme.media.tablet} {
        font-size: ${theme.typography.headline3.size};
        line-height: ${theme.typography.headline3.lineHeight};
        font-weight: ${theme.typography.headline3.weight};
    }
    @media ${theme.media.mobile} {
        font-size: ${theme.typography.headline4.size};
        line-height: ${theme.typography.headline4.lineHeight};
        font-weight: ${theme.typography.headline4.weight};
    }

`
const MainTitleDescription = styled.p`
    font-weight: ${theme.typography.body18.weight};
    line-height: ${theme.typography.body18.lineHeight};
    font-size: ${theme.typography.body18.size};

    @media ${theme.media.tablet} {
        font-weight: ${theme.typography.body16.weight};
        line-height: ${theme.typography.body16.lineHeight};
        font-size: ${theme.typography.body16.size};
    }
`
const MainTitleGroup = styled.div`
    text-align: center;
    font-weight: 600;
    max-width: 748px;
`

const MainTitleButton = styled.button`
    min-width: 251px;
    min-height: 64px;
    border-radius: 4px;
    padding: 20px 40px;
    gap: 10px;
    background-color: ${theme.color.gray.lightGray};
    z-index: 99;
`
const H5 = styled.p`
    font-weight: ${theme.typography.headline5.weight};
    font-size: ${theme.typography.headline5.size};
    line-height: ${theme.typography.headline5.lineHeight};
    text-align: center;
    color: ${theme.color.dark};
`