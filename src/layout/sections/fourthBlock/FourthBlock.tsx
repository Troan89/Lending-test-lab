import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/ui/SectionTitle";
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
        <FourthBlockSection id="fourthBlock">
            <SectionTitle>Вопросы и ответы</SectionTitle>
            <FlexWrapper direction={'column'} gap={'24px'}>
                {items.map((item, index) => (
                    <FlexWrapper direction={'column'} gap={'24px'} key={index}>
                        <FourthBlockBottomBorder></FourthBlockBottomBorder>
                        <FourthBlockQuestionWrapper onClick={() => handleToggle(index)}>
                            <FourthBlockQuestion>{item.question}</FourthBlockQuestion>
                            <FourthBlockIconWrapper>
                                <Icon iconId={openIndex === index ? 'close' : 'open'}
                                      hoverColor={theme.color.primary.primary}
                                />
                            </FourthBlockIconWrapper>
                        </FourthBlockQuestionWrapper>
                        {openIndex === index && (
                            <FourthBlockAnswer>
                                {item.answer}
                            </FourthBlockAnswer>
                        )}
                    </FlexWrapper>
                ))}
            </FlexWrapper>
        </FourthBlockSection>
    );
};


const FourthBlockSection = styled.section`
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

    @media ${theme.media.mobile} {
        max-width: 343px;
    }

    @media ${theme.media.miniMobile} {
        max-width: 288px;
    }
`

export const FourthBlockQuestionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 48px;
    width: 100%;

    &:hover {
        color: ${theme.color.primary.primary};
        cursor: pointer;
    }
`

const FourthBlockQuestion = styled.div`
    font-weight: ${theme.typography.body18.bold};
    font-size: ${theme.typography.body18.size};
    line-height: ${theme.typography.body18.lineHeight};
    max-width: 936px;
    width: 100%;
`

const FourthBlockBottomBorder = styled.div`
    height: 1px;
    border-bottom: 1px solid ${theme.color.gray.lightGray};
`

const FourthBlockAnswer = styled.div`
    font-size: ${theme.typography.body18.size};
    line-height: ${theme.typography.body18.lineHeight};
    color: ${theme.color.gray.darkGray};
    font-weight: ${theme.typography.body18.weight};
    max-width: 936px;
    
    @media ${theme.media.mobile} {
        font-size: ${theme.typography.body16.size};
        line-height: ${theme.typography.body16.lineHeight};
        font-weight: ${theme.typography.body16.weight};
    }
`
const FourthBlockIconWrapper = styled.div`
    display: flex;
`
