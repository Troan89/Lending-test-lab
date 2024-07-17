import React from 'react';
import styled from "styled-components";
import {SectionTitile} from "../../../components/ui/SectionTitile";
import {Faq} from "./faq/Faq";
import {theme} from "../../../styles/Theme.styled";
import {GridWrapper} from "../../../components/GridWrapper";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Faqs = () => {
    return (
        <StyledFaqs id="faqs">
            <Container>
                <Wrapper>
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
                </Wrapper>
            </Container>
        </StyledFaqs>
    );
};
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 281px;

    @media ${theme.media.tablet} {
        gap: 42px;
    }
    @media ${theme.media.mobile} {
        gap: 26px;
    }
`
const StyledFaqs = styled.section`
`