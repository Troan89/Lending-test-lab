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
        // arrows: true,
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
        <SliderWrapper>
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <CardWrapper key={index}>
                        <Card key={index}>
                            <CardWrapperTitle>
                                <Img src={review.image} alt={`avatar ${review.name}`}/>
                                <CardTitle>
                                    <Name>{review.name}</Name>
                                    <City>{review.city}</City>
                                </CardTitle>

                            </CardWrapperTitle>
                            <CardContent>
                                <Feedback>{review.feedback}</Feedback>
                            </CardContent>
                        </Card>
                    </CardWrapper>
                ))}
            </Slider>
        </SliderWrapper>
    );
};

const SliderWrapper = styled.div`
    max-width: 1055px;
    height: 100%;
    margin: 0 -10px;
    align-items: center;

    .slick-prev::before,
    .slick-next::before {
        display: none;
    }
    //.slick-dots {
    //    //bottom: 75px; // Измените это значение в зависимости от ваших требований по высоте
    //}
    .slick-prev {
        left: -42px; // Смещение влево на 32 пикселя
    }
    //.slick-next {
    //    right: -32px; // Смещение вправо на 32 пикселя (если нужно)
    //}

    .slick-prev, .slick-next {
        z-index: 1;
    }

    .slick-dots li button::before {
        font-size: 8px;
        color: ${theme.color.primary.primary};
        padding-top: 50px;

        @media ${theme.media.mobale} {
            padding-top: 20px;
        }

    }

    @media ${theme.media.tablet} {
        max-width: 768px;
        min-height: 419px;
        padding: 0 20px;
    }
    @media ${theme.media.mobale} {
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

const CardWrapper = styled.div`
    max-width: 341px;
    width: 100%;
    min-height: 316px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin: 0 10px;
    
    

    @media ${theme.media.tablet} {
        max-width: 351px;
        //margin: 0 20px;
    }
    @media ${theme.media.mobale} {
        max-width: 340px;
        min-height: 281px;
        height: 100%;
        
    }
    @media ${theme.media.miniMobile} {
        max-width: 288px;
        min-height: 335px;
    }
`;

const Card = styled.div`
    background: ${theme.color.white};
    border-radius: 8px;
    box-shadow: 0 5px 24px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    padding: 22px 22px 38px;
    gap: 20px;
    max-width: 341px;
    min-height: 316px;
    
    @media ${theme.media.mobale} {
        max-width: 340px;
        min-height: 281px;
        padding: 22px 22px 27px 22px;
    }

    @media ${theme.media.miniMobile} {
        max-width: 288px;
        min-height: 335px;
    }
`;

const CardWrapperTitle = styled.div`
    text-align: left;
    min-height: 44px;
    max-width: 237px;
    display: flex;
    gap: 24px
`;

const Img = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 50%;
`

const CardTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const CardContent = styled.div`
    text-align: left;
    max-height: 192px;
`;

const Name = styled.h3`
    font-size: ${theme.typography.headline6.size};
    font-weight: ${theme.typography.headline6.weight};
    line-height: ${theme.typography.headline6.lineHeight};
`;

const City = styled.p`
    font-size: 12px;
    line-height: 16px;
    color: ${theme.color.gray.darkGray};
    font-weight: 400;
`;

const Feedback = styled.p`
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
`;

