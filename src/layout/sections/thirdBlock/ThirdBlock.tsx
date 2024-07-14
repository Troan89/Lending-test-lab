import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme.styled";
import car from '../../../assets/img/2_2.png'
import human from '../../../assets/img/2_1.png'

export const ThirdBlock = () => {
    return (
        <StyledThirdBlock>
            <FlexWrapper direction={'column'} gap={'18px'}>
                <Title>Круто, ты дошел до третьего блока</Title>
                <Text>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы
                    свыше 15 000 ₽.</Text>
                <Text>Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и
                    штрафах.</Text>
            </FlexWrapper>
            <ImgWrapper>
                <Img src={human} alt={'human'}/>
                <ImgOverlay src={car} alt={'car'}/>
            </ImgWrapper>

        </StyledThirdBlock>
    );
};

const StyledThirdBlock = styled.section`
    max-height: 448px;
    max-width: 1216px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;

    @media ${theme.media.tablet} {
        min-height: 265px;
        max-width: 727px;
        gap: 24px;
    }

    @media ${theme.media.mobale} {
        min-height: 509px;
        max-width: 345px;
        margin: 0 17px;
        flex-direction: column-reverse;
    }

    @media ${theme.media.miniMobile} {
        min-height: 572px;
        max-width: 288px;
        padding: 0 16px;
        flex-direction: column-reverse;
    }
`

const Title = styled.div`
    font-size: ${theme.typography.headline3.size};
    line-height: ${theme.typography.headline3.lineHeight};
    font-weight: ${theme.typography.headline3.weight};
    height: 100%;

    @media ${theme.media.tablet} {
        font-size: ${theme.typography.headline5.size};
        line-height: ${theme.typography.headline5.lineHeight};
        font-weight: ${theme.typography.headline5.weight};
    }
    @media ${theme.media.mobale} {
        text-align: center;
        font-size: ${theme.typography.headline5.size};
        line-height: ${theme.typography.headline5.lineHeight};
        font-weight: ${theme.typography.headline5.weight};
    }
    @media ${theme.media.miniMobile} {
        text-align: center;
        font-size: ${theme.typography.headline5.size};
        line-height: ${theme.typography.headline5.lineHeight};
        font-weight: ${theme.typography.headline5.weight};
    }
`

const Text = styled.div`
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    color: ${theme.color.gray.darkGray};

    @media ${theme.media.mobale} {
        text-align: center;
    }
    @media ${theme.media.miniMobile} {
        text-align: center;
    }
`

const ImgWrapper = styled.div`
    position: relative;
    max-width: 592px;
    min-height: 448px;

    @media ${theme.media.tablet} {
        min-height: 265px;
        max-width: 351px;
    }
    @media ${theme.media.mobale} {
        min-height: 258px;
        max-width: 342px;
    }
    @media ${theme.media.miniMobile} {
        min-height: 217px;
        max-width: 288px;
    }
`

const Img = styled.img`
    object-fit: cover;
    position: relative;
    z-index: 2;
    @media ${theme.media.tablet} {
        min-height: 265px;
        max-width: 351px;
    }
    @media ${theme.media.mobale} {
        min-height: 258px;
        max-width: 342px;
    }
    @media ${theme.media.miniMobile} {
        min-height: 217px;
        max-width: 288px;
    }
`

const ImgOverlay = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 1;
    @media ${theme.media.tablet} {
        min-height: 265px;
        max-width: 351px;
    }
    @media ${theme.media.mobale} {
        min-height: 258px;
        max-width: 342px;
    }
    @media ${theme.media.miniMobile} {
        min-height: 217px;
        max-width: 288px;
    }
`