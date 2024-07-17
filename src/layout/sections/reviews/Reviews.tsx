import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/ui/SectionTitle";
import {theme} from "../../../styles/Theme.styled";
import {useAppSelector} from "../../../store/store";
import {Review} from "./review/Review";

export const Reviews = () => {
    const reviews = useAppSelector(state => state.baseSlice.reviewsItems)
    return (
        <ReviewsSection>
            <ReviewsSlider>
                <SectionTitle>Отзывы</SectionTitle>
                <Review reviews={reviews}/>
            </ReviewsSlider>
        </ReviewsSection>
    )
};

const ReviewsSection = styled.section`
    max-width: 1920px;
    width: 100%;
    min-height: 564px;
    background-color: ${theme.color.gray.extralightGray};
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    @media ${theme.media.tablet} {
        max-width: 768px;
        width: 100%;
        min-height: 540px;
    }
    @media ${theme.media.mobile} {
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

const ReviewsSlider = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    width: 100%;
    max-width: 1238px;
    min-height: 462px;
    margin-top: 57px;
    margin-bottom: 45px;


    @media ${theme.media.tablet} {
        max-width: 768px;
        width: 100%;
        min-height: 540px;
        height: 100%;
        margin-top: 33px;
    }
    @media ${theme.media.mobile} {
        max-width: 375px;
        width: 100%;
        min-height: 451px;
        height: 100%;
        margin-top: 27px;
        margin-bottom: 37px;
    }
    @media ${theme.media.miniMobile} {
        max-width: 320px;
        width: 100%;
        min-height: 451px;
    }
`

