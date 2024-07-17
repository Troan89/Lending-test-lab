import React, {useState} from 'react';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {theme} from "../../../../styles/Theme.styled";
import {PrevArrow} from "../../../../components/PrevArrow";
import {NextArrow} from "../../../../components/NextArrow";
import Slider from "react-slick";
import {ReviewsItems} from "../../../../store/types";

type Props = {
    reviews: ReviewsItems[]
}
export const Review = (props: Props) => {
    const {reviews} = props

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow currentSlide={currentSlide} slideCount={reviews.length}/>,
        nextArrow: <NextArrow currentSlide={currentSlide} slideCount={reviews.length}/>,
        beforeChange: (current: number, next: number) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            },

        ],
    };

    return (
        <ReviewSliderWrapper>
            <ReviewSlider {...settings}>
                {reviews.map((review, index) => (
                    <ReviewSliderCardWrapper key={index}>
                        <ReviewSliderCard key={index}>
                            <ReviewSliderCardTitleWrapper>
                                <ReviewSliderCardImg src={review.image} alt={`avatar ${review.name}`}/>
                                <ReviewSliderCardTitle>
                                    <ReviewSliderCardName>{review.name}</ReviewSliderCardName>
                                    <ReviewSliderCardCity>{review.city}</ReviewSliderCardCity>
                                </ReviewSliderCardTitle>
                            </ReviewSliderCardTitleWrapper>
                            <ReviewSliderCardFeedback>{review.feedback}</ReviewSliderCardFeedback>
                        </ReviewSliderCard>
                    </ReviewSliderCardWrapper>
                ))}
            </ReviewSlider>
        </ReviewSliderWrapper>
    );
};

const ReviewSliderWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 32px;
    box-sizing: border-box;

    @media ${theme.media.tablet} {
        max-width: 768px;
        min-height: 419px;
        padding: 0 20px;
    }
    @media ${theme.media.mobile} {
        max-width: 375px;
        min-height: 326px;
        padding: 0 19px 0 16px;
    }
    @media ${theme.media.miniMobile} {
        max-width: 320px;
        min-height: 414px;
        padding: 0 16px 0 16px;
    }

`;
const ReviewSlider = styled(Slider)`

    .slick-slide {
        display: flex;
        justify-content: center;
        padding: 0 16px;
        min-height: 316px;

    }

    .slick-list {
        margin-bottom: 20px;
    }

    .slick-dots {
        display: flex !important;
        justify-content: center;
        margin-top: 20px;

        li {
            margin: 0 5px;
        }
    }

    .slick-prev::before,
    .slick-next::before {
        display: none;
    }

    .slick-prev,
    .slick-next {
        z-index: 1;
    }

    .slick-dots li button::before {
        font-size: 8px;
        color: ${theme.color.primary.primary};
        padding-top: 20px;
    }
`;

const ReviewSliderCard = styled.div`
    display: flex;
    flex-flow: column;

    background: ${theme.color.white};
    border-radius: 8px;
    box-shadow: 0 5px 24px rgba(0, 0, 0, 0.1);
    padding: 22px 22px 38px;
    width: 100%;
    min-height: 100%;
    box-sizing: border-box;

    @media ${theme.media.mobile} {
        min-height: 281px;
        padding: 22px 22px 27px 22px;
    }

    @media ${theme.media.miniMobile} {
        min-height: 335px;
    }
`;

const ReviewSliderCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    //align-items: stretch;
    width: 100%;
    height: 100%;
`



const ReviewSliderCardTitleWrapper = styled.div`
    text-align: left;
    display: flex;
    align-items: stretch;
    gap: 24px;
`;

const ReviewSliderCardImg = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 50%;
`

const ReviewSliderCardTitle = styled.div`
    display: grid;
`

const ReviewSliderCardName = styled.h3`
    font-size: ${theme.typography.headline6.size};
    font-weight: ${theme.typography.headline6.weight};
    line-height: ${theme.typography.headline6.lineHeight};
`;

const ReviewSliderCardCity = styled.p`
    font-size: ${theme.typography.body12.size};
    line-height: ${theme.typography.body12.lineHeight};
    color: ${theme.color.gray.darkGray};
    font-weight: ${theme.typography.body12.weight};
`;

const ReviewSliderCardFeedback = styled.div`
    font-size: ${theme.typography.body14.size};
    line-height: ${theme.typography.body14.lineHeight};
    font-weight: ${theme.typography.body14.weight};
    margin-top: 20px;
`;

