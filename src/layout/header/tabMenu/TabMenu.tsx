import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled";
import {Icon} from "../../../components/icon/Icon";

type Props = {
    menuItems: Item[]
    color?: string
}

type Item = {
    name:string
    id:string
}

export const TabMenu = (props: Props) => {
    const {menuItems, color} = props

    const menu = menuItems.map((item, index) => (
        <ListItem key={index}>
            <Link href={`#${item.id}`}>
                {item.name}
            </Link>
            <StyledIconTransform>
                <Icon iconId={'fi-sr-angle-left'} width={'12px'} height={'24px'} />
            </StyledIconTransform>
        </ListItem>)
    )

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
        gap: 33px;
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
        color: ${({color}) => color || 'var(--white-color)'}};
        transition: color 0.3s, text-decoration 0.3s;
    }
`


const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0;
    
    position: relative;
    
    &::before {
        content: '';
        display: inline-block;
        height: 1px;
        width: 100%;
        background-color: ${theme.color.gray.lightGray};
        
        position: absolute;
        bottom: -16px;
    }

`

const Link = styled.a`
    //z-index: 1;
`

const StyledIconTransform = styled.div`
    transform: rotate(180deg);
`