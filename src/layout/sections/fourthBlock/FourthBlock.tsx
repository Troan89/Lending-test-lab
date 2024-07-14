import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitile} from "../../../components/SectionTitile";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme.styled";
import {useAppSelector} from "../../../store/store";

export const FourthBlock = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const items = useAppSelector(state=>state.baseSlice.fourthBlock)

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <StyledSection>
            <SectionTitile>Вопросы и ответы</SectionTitile>
            <FlexWrapper direction={'column'} gap={'24px'}>
                {items.map((item, index) => (
                    <FlexWrapper direction={'column'} gap={'24px'} key={index}>
                        <BottomBorder></BottomBorder>
                        <QuestionWrapper onClick={() => handleToggle(index)}>
                            <Question>{item.question}</Question>
                            <IconWrapper>
                                <Icon iconId={openIndex === index ? 'close' : 'open'}
                                      hoverColor={theme.color.primary.primary}
                                />
                            </IconWrapper>
                        </QuestionWrapper>
                        {openIndex === index && (
                            <Answer>
                                {item.answer}
                            </Answer>
                        )}
                    </FlexWrapper>
                ))}
            </FlexWrapper>
        </StyledSection>
    );
};


const StyledSection = styled.section`
    max-width: 1008px;
    width: 100%;
    min-height: 640px;
    display: flex;
    flex-direction: column;
    gap: 41px;
    padding: 0 16px;

    @media ${theme.media.tablet} {
        max-width: 727px;
    }

    @media ${theme.media.mobale} {
        max-width: 343px;
    }

    @media ${theme.media.miniMobile} {
        max-width: 288px;
    }
`

export const QuestionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 48px;
    width: 100%;

    &:hover {
        color: ${theme.color.primary.primary};
        cursor: pointer;
    }
`

const Question = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    max-width: 936px;
    width: 100%;
`

const BottomBorder = styled.div`
    height: 1px;
    border-bottom: 1px solid ${theme.color.gray.lightGray};
`

const Answer = styled.div`
    font-size: 18px;
    line-height: 32px;
    color: ${theme.color.gray.darkGray};
    font-weight: 400;
    max-width: 936px;
`
const IconWrapper = styled.div`
    display: flex;
`
