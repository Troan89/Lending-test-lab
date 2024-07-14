import React, {useState} from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {MainTitle} from "../sections/main/MainTitle";
import {Logo} from "../../components/logo/Logo";
import {theme} from "../../styles/Theme.styled";
import {FlexWrapper} from "../../components/FlexWrapper";
import {AdaptiveImage} from "../../components/AdaptiveImageHeder";
import defaultImage from '../../assets/Lunch_atop_a_Skyscraper.png'
import largeImage from '../../assets/Lunch_atop_a_Skyscraper (768x1024).png'
import mediumImage from '../../assets/Lunch_atop_a_Skyscraper (375x596).png'
import smallImage from '../../assets/Lunch_atop_a_Skyscraper (320x509).png'

const items = ["Как это работает", "3-й блок", "Вопросы и ответы", "Форма"]

// const defaultImage = require('../../assets/Lunch_atop_a_Skyscraper.png');

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const imageSources = [
        { srcSet: defaultImage, media: `(max-width: 1920px)` },
        { srcSet: largeImage, media: `(max-width: 768px)` },
        { srcSet: mediumImage, media: `(max-width: 375px)` },
        { srcSet: smallImage, media: `(max-width: 320px)` },
    ];
    return (
        <StyledWrapper>
            <AdaptiveImage
                sources={imageSources}
                defaultSrc="../../../assets/Lunch_atop_a_Skyscraper.png"
                alt="Header background"
            />
            <StyledHeader>
                <StyledLogo>
                    <Logo/>
                </StyledLogo>
                <NavLinks color={'var(--white-color)'}>
                    <Menu menuItems={items}/>
                </NavLinks>
                <BurgerMenu onClick={toggleMenu}>
                    <div/>
                    <div/>
                </BurgerMenu>
                {menuOpen && (
                    <MenuWrapper>
                        <MenuHeader>
                            <Logo/>
                            <CloseButton onClick={toggleMenu}>X</CloseButton>
                        </MenuHeader>
                        <FlexWrapper direction={"column"}>
                                <Menu menuItems={items} color={'var(--gray-color)'}/>
                        </FlexWrapper>

                    </MenuWrapper>
                )}
            </StyledHeader>
            <MainTitle/>
        </StyledWrapper>

    );
};

const StyledWrapper = styled.header`
    display: flex;
    flex-direction: column;
    min-height: 1024px;
    max-width: 1920px;
    width: 100%;
    position: relative;
    color: ${theme.color.white};

    & > picture {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;

        & > img {
            min-height: 960px;
            max-width: 1920px;
            object-fit: cover;
            background-repeat: no-repeat;
            background-position: center top;

            @media ${theme.media.tablet} {
                min-height: 1024px;
                max-width: 768px;
            }
            @media ${theme.media.mobale} {
                min-height: 596px;
                max-width: 375px;
            }
            @media ${theme.media.miniMobile} {
                min-height: 509px;
                max-width: 320px;
            }
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${theme.color.primary.primary};
        opacity: 0.8;
        pointer-events: none;

    }

    @media ${theme.media.desktop} {
        min-height: 960px;
        max-width: 1920px;
    }

    @media ${theme.media.tablet} {
        min-height: 1024px;
        max-width: 768px;
    }
    @media ${theme.media.mobale} {
        min-height: 596px;
        max-width: 375px;
    }
    @media ${theme.media.miniMobile} {
        min-height: 509px;
        max-width: 320px;
    }

`

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 80px;
    z-index: 1;

    @media screen and (max-width: 768px) {
        justify-content: space-between;
        padding: 0 16px;
    }
`

const StyledLogo = styled.div`
    display: flex;
    gap: 9px
`

const NavLinks = styled.nav`
    display: flex;
    gap: 20px;
    color: ${({color}) => color || 'var(--white-color)'};

    @media (max-width: 768px) {
        display: none;
    }
`;

const BurgerMenu = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 25px;
    height: 25px;
    cursor: pointer;

    div {
        width: 100%;
        height: 2px;
        background: white;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`

const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    max-width: 320px;
    width: 100%;
    min-height: 667px;
    background: ${theme.color.white};
    z-index: 100;
    padding: 0 20px;
    transition: .5s;
`;

const MenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    min-height: 80px;
`;

const CloseButton = styled.div`
    font-size: 24px;
    cursor: pointer;
    color: black;
`;


