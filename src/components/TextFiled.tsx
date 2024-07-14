import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme.styled";

type Props = {
    labelText:string
    type: 'text' | 'password'
}

export const TextFiled = (props:Props) => {
    const {labelText, type} = props
    return (
        <StyledWrapper>
            <Input type={type} id='textFiled' placeholder={labelText}/>
            <Label htmlFor="textFiled">{labelText}</Label>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    position: relative;
    max-width: 384px;
    width: 100%;
    min-height: 64px;
    display: flex;
    flex-direction: column-reverse;
    background-color: ${theme.color.gray.extralightGray};
    
    @media ${theme.media.tablet} {
        max-width: 352px;
        width: 100%;
        min-height: 64px;
    }

    &:hover, &:focus-within, &:has(input:not(:placeholder-shown)) {
        border: 2px solid ${theme.color.gray.midGray};
        border-radius: 4px;
        background-color: transparent;
    }

`

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    outline: none;
    vertical-align: top;
    padding-inline-end: revert;
    background-color: transparent;
    padding: 28px 16px 4px;
    
    &:focus-visible {
        background-color: transparent;    
    }
    
    &:focus + label,
    &:not(:placeholder-shown) + label {
        transform: translateY(-1rem);
        font-size: 14px;
        color: ${theme.color.gray.gray};
        background-color: transparent;
    }
    
    &::placeholder {
        opacity: 0;
    }
`

const Label = styled.label`
    position: absolute;
    left: 16px;
    top: 16px;
    font-size: 18px;
    line-height: 32px;
    font-weight: 400;
    pointer-events: none;
    transition: 0.2s;
    color: ${theme.color.gray.gray}
`