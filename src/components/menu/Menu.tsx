import React from 'react';
import styled from "styled-components";

type Props = {
    menuItems: string[]
    color?:string
}

export const Menu = (props: Props) => {
    const {menuItems, color} = props

    const menu = menuItems.map((item, index) => <li key={index}><a href="">{item}</a></li>)

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
        font-size: 16px;
        font-weight: 400;
        

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 10px;
        }
    }

    li a {
        text-decoration: none;
        color: ${({color}) => color || 'var(--white-color)'}};
        transition: color 0.3s, text-decoration 0.3s;

        @media (max-width: 768px) {
            color: white;
        }   
    }

    li a:hover {
        color: var(--white-color);
        text-decoration: underline; 
    }
`
