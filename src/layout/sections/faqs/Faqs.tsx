import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/ui/SectionTitle";
import {Faq} from "./faq/Faq";
import {theme} from "../../../styles/Theme.styled";
import {GridWrapper} from "../../../components/GridWrapper";

export const Faqs = () => {
    return (
        <FaqsContainer id="faqs">
                <FaqsWrapper>
                    <SectionTitle>Как это работает</SectionTitle>
                    <GridWrapper gap={"32px"}>
                        <Faq
                            iconId={'waiting'}
                            title={'Прочитай задание внимательно'}
                            description={'Думаю у тебя не займет это больше двух-трех минут'}/>
                        <Faq
                            iconId={'deliveryTruck'}
                            title={'Изучи весь макет заранее'}
                            description={'Подумай как это будет работать на разных разрешениях и при скролле'}/>
                        <Faq
                            iconId={'secure'}
                            title={'Сделай хорошо'}
                            description={'Чтобы мы могли тебе доверить подобные задачи в будущем'}/>
                        <Faq
                            iconId={'money-bags'}
                            title={'Получи предложение'}
                            description={'Ну тут все просто, не я придумал правила, но думаю так и будет)))'}/>
                    </GridWrapper>
                </FaqsWrapper>
        </FaqsContainer>
    );
};
const FaqsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 281px;
    width: 100%;
    padding: 0 20px;

    @media ${theme.media.tablet} {
        gap: 42px;
    }
    @media ${theme.media.mobile} {
        gap: 26px;
        padding: 0 16px;
    }
`
const FaqsContainer = styled.section`

`