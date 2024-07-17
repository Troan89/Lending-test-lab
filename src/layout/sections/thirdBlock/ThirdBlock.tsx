    import React from 'react';
    import styled from "styled-components";
    import {FlexWrapper} from "../../../components/FlexWrapper";
    import {theme} from "../../../styles/Theme.styled";
    import car from '../../../assets/img/2_2.png'
    import human from '../../../assets/img/2_1.png'

    export const ThirdBlock = () => {
        return (
            <ThirdBlockSection id="thirdBlock">
                    <ThirdBlockWrapper>
                        <FlexWrapper direction={'column'} gap={'18px'}>
                            <ThirdBlockTitle>Круто, ты дошел до третьего блока</ThirdBlockTitle>
                            <ThirdBlockText>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные
                                расходы
                                свыше 15 000 ₽.</ThirdBlockText>
                            <ThirdBlockText>Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на
                                процентах и
                                штрафах.</ThirdBlockText>
                        </FlexWrapper>
                        <ThirdBlockImgWrapper>
                            <ThirdBlockImg src={human} alt={'human'}/>
                            <ThirdBlockImgOverlay src={car} alt={'car'}/>
                        </ThirdBlockImgWrapper>
                    </ThirdBlockWrapper>
            </ThirdBlockSection>
        );
    };
    const ThirdBlockWrapper = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 32px;
        padding: 0 20px;
    
        @media ${theme.media.tablet} {
            gap: 24px;
        }
    
        @media ${theme.media.mobile} {
            flex-direction: column-reverse;
        }
    `

    const ThirdBlockSection = styled.section`
        
    `

    const ThirdBlockTitle = styled.div`
        font-size: ${theme.typography.headline3.size};
        line-height: ${theme.typography.headline3.lineHeight};
        font-weight: ${theme.typography.headline3.weight};
        height: 100%;
    
        @media ${theme.media.tablet} {
            font-size: ${theme.typography.headline5.size};
            line-height: ${theme.typography.headline5.lineHeight};
            font-weight: ${theme.typography.headline5.weight};
        }
        @media ${theme.media.mobile} {
            text-align: center;
        }
    `

    const ThirdBlockText = styled.div`
        font-size: ${theme.typography.body16.size};
        line-height: ${theme.typography.body16.lineHeight};
        font-weight: ${theme.typography.body16.weight};
        color: ${theme.color.gray.darkGray};
    
        @media ${theme.media.mobile} {
            text-align: center;
        }
    `

    const ThirdBlockImgWrapper = styled.div`
        position: relative;
        width: 100%;
        max-width: 592px;
        display: flex;
        justify-content: center;
        align-items: center;
    
        @media ${theme.media.tablet} {
            max-width: 351px;
        }
        @media ${theme.media.mobile} {
            max-width: 342px;
        }
        @media ${theme.media.miniMobile} {
            max-width: 288px;
        }
    `

    const ThirdBlockImg = styled.img`
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: relative;
        z-index: 2;
        object-position: center;
        
        @media ${theme.media.tablet} {
            min-height: 265px;
            max-width: 351px;
        }
        @media ${theme.media.mobile} {
            min-height: 258px;
            max-width: 342px;
        }
        @media ${theme.media.miniMobile} {
            min-height: 217px;
            max-width: 288px;
        }
    `

    const ThirdBlockImgOverlay = styled.img`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        object-fit: cover;
        z-index: 1;
        
        @media ${theme.media.tablet} {
            min-height: 265px;
            max-width: 351px;
        }
        @media ${theme.media.mobile} {
            min-height: 258px;
            max-width: 342px;
        }
        @media ${theme.media.miniMobile} {
            min-height: 217px;
            max-width: 288px;
        }
    `