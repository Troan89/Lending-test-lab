import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: ${theme.color.white};
        margin: 0;
        font-family: 'Graphik LCG', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :root {
        --primary-color: ${theme.color.primary.primary};
        --primary-disabled-color: ${theme.color.primary.disabled};
        --primary-hover-color: ${theme.color.primary.hover};
        --greenSuccess-color: ${theme.color.greenSuccess};
        --dangerous-color: ${theme.color.dangerous};
        --white-color: ${theme.color.white};
        --gray-color: ${theme.color.gray.gray};
        --darkGray-color: ${theme.color.gray.darkGray};
        --midGray-color: ${theme.color.gray.midGray};
        --lightGray-color: ${theme.color.gray.lightGray};
        --extralightGray-color: ${theme.color.gray.extralightGray};
        --dark-color: ${theme.color.dark};

        --headline1-weight: ${theme.typography.headline1.weight};
        --headline1-size: ${theme.typography.headline1.size};
        --headline1-line-height: ${theme.typography.headline1.lineHeight};

        --headline2-weight: ${theme.typography.headline2.weight};
        --headline2-size: ${theme.typography.headline2.size};
        --headline2-line-height: ${theme.typography.headline2.lineHeight};

        --headline3-weight: ${theme.typography.headline3.weight};
        --headline3-size: ${theme.typography.headline3.size};
        --headline3-line-height: ${theme.typography.headline3.lineHeight};

        --headline4-weight: ${theme.typography.headline4.weight};
        --headline4-size: ${theme.typography.headline4.size};
        --headline4-line-height: ${theme.typography.headline4.lineHeight};

        --headline5-weight: ${theme.typography.headline5.weight};
        --headline5-size: ${theme.typography.headline5.size};
        --headline5-line-height: ${theme.typography.headline5.lineHeight};

        --headline6-weight: ${theme.typography.headline6.weight};
        --headline6-size: ${theme.typography.headline6.size};
        --headline6-line-height: ${theme.typography.headline6.lineHeight};
    }
`