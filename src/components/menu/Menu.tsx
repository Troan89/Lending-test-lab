import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";

type Props = {
    menuItems: Item[]
    color?: string
}

type Item = {
    name: string
    id: string
}

export const Menu = (props: Props) => {
    const {menuItems, color} = props

    const menu = menuItems.map((item, index) => (
        <li key={index}>
            <Link href={`#${item.id}`}>
                {item.name}
            </Link>
        </li>
    ))

    return (
        <StyledMenu color={color}>
            <ul>
                {menu}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    cursor: pointer;
    z-index: 1;

    ul {
        display: flex;
        gap: 20px;
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: ${theme.typography.body16.size};
        font-weight: ${theme.typography.body16.weight};
        line-height: ${theme.typography.body16.lineHeight};


        @media (max-width: 768px) {
            flex-direction: column;
            gap: 10px;
        }
    }

    li a {
        text-decoration: none;
        color: ${({color}) => color || `${theme.color.white}`
        }
    }
;
    transition: color 0.3s, text-decoration 0.3s;

    @media (max-width: 768px) {
        color: white;
    }
}

li a:hover {
    color: ${theme.color.white};
    text-decoration: underline;
}
`
const Link = styled.a`

`