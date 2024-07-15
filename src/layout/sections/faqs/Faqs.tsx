import React from 'react';
import styled from "styled-components";
import {SectionTitile} from "../../../components/ui/SectionTitile";
import {Faq} from "./faq/Faq";
import {theme} from "../../../styles/Theme.styled";
import {GridWrapper} from "../../../components/GridWrapper";

export const Faqs = () => {
    return (
        <StyledFaqs>
            <SectionTitile>Как это работает</SectionTitile>
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
        </StyledFaqs>
    );
};

const StyledFaqs = styled.section`
    min-height: 281px;
    max-width: 1216px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 30px 0 20px;
        
    @media ${theme.media.tablet} {
        min-height: 281px;
        max-width: 718px;
        gap: 42px;
    }
    @media ${theme.media.mobile} {
        min-height: 458px;
        max-width: 342px;
        gap: 26px;
    }
    @media ${theme.media.miniMobile} {
        min-height: 530px;
        max-width: 288px;
        gap: 26px;
    }
`