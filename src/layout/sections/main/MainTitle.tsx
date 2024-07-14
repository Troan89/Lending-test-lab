import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme.styled";

export const MainTitle = () => {
    return (
        <StyledMain>
            <Wrapper>
                    <GroupTitle>
                        <TitleH1>
                            Говорят, никогда не поздно сменить профессию
                        </TitleH1>
                        <TitleH4>Сделай круто тестовое задание и у тебя получится</TitleH4>
                    </GroupTitle>

                    <Button>
                        <H5>Проще простого!</H5>
                    </Button>
            </Wrapper>
        </StyledMain>
    );
};

const Wrapper = styled.div`
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

const StyledMain = styled.div`
    min-height: 880px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media ${theme.media.tablet} {
        min-height: 944px;
    }
    @media ${theme.media.mobale} {
        min-height: 516px;
    }
    @media ${theme.media.miniMobile} {
        min-height: 429px;
    }
`

const TitleH1 = styled.p`
    font-weight: var(--headline1-weight);
    line-height: var(--headline1-line-height);
    font-size: var(--headline1-size);

    @media ${theme.media.tablet} {
        font-size: 32px;
        line-height: 40px;
    }
    @media screen and (max-width: 375px) {
        font-size: 24px;
        line-height: 32px;
    }

`
const TitleH4 = styled.p`
    font-weight: var(--headline4-weight);
    line-height: var(--headline4-line-height);
    font-size: var(--headline4-size);

    @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 28px;
    }
`
const GroupTitle = styled.div`
    text-align: center;
    font-weight: 600;
    max-width: 748px;
`

const Button = styled.button`
    min-width: 251px;
    min-height: 64px;
    border-radius: 4px;
    padding: 20px 40px;
    gap: 10px;
    background-color: var(--lightGray-color);
    z-index: 99;
`
const H5 = styled.p`
    font-weight: var(--headline5-weight);
    font-size: var(--headline5-size);
    line-height: var(--headline5-line-height);
    text-align: center;
    color: var(--dark-color);
`