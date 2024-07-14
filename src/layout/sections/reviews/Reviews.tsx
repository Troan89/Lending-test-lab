import React from 'react';
import styled from "styled-components";
import {SectionTitile} from "../../../components/SectionTitile";
import {theme} from "../../../styles/Theme.styled";
import {useAppSelector} from "../../../store/store";
import {Review} from "./review/Review";

export const Reviews = () => {
    const reviews = useAppSelector(state => state.baseSlice.reviewsItems)
    return (
        <StyledWrapper>
            <StyledSlider>
                <SectionTitile>Отзывы</SectionTitile>
                <Review reviews={reviews}/>
            </StyledSlider>
        </StyledWrapper>
    )
};

const StyledWrapper = styled.section`
    max-width: 1920px;
    width: 100%;
    min-height: 564px;
    background-color: ${theme.color.gray.extralightGray};
    display: flex;
    justify-content: center;

    @media ${theme.media.tablet} {
        max-width: 768px;
        width: 100%;
        min-height: 540px;
    }
    @media ${theme.media.mobale} {
        max-width: 375px;
        width: 100%;
        min-height: 451px;
    }
    @media ${theme.media.miniMobile} {
        max-width: 320px;
        width: 100%;
        min-height: 499px;
    }
`;

const StyledSlider = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
    max-width: 1238px;
    min-height: 412px;
    margin: 57px auto 45px auto;


    @media ${theme.media.tablet} {
        max-width: 768px;
        width: 100%;
        min-height: 540px;
        height: 100%;
        margin-top: 33px;
        margin-bottom: 0;
    }
    @media ${theme.media.mobale} {
        max-width: 375px;
        width: 100%;
        min-height: 451px;
        margin-top: 27px;
        margin-bottom: 0;
    }
    @media ${theme.media.miniMobile} {
        max-width: 320px;
        width: 100%;
        min-height: 451px;
    }
`
