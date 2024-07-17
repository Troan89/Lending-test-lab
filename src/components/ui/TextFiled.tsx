import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";
import {Icon} from "../icon/Icon";

type Props = {
    labelText:string
    type: 'text' | 'password'
    value: string
    onChange: (value:string) => void
    error?: string
    touched?: boolean;
}

export const TextFiled = (props:Props) => {
    const {labelText, type, value, error, onChange, touched} = props
    return (
        <StyledWrapper>
            <Input type={type} id='textFiled' placeholder={labelText} value={value}
                   onChange={(e) => onChange(e.target.value)}
                   aria-invalid={!!error}/>
            <Label htmlFor="textFiled">{labelText}</Label>
            {touched && (error?.length! > 0
                ? <ErrorIconContainer><Icon iconId={'error'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/></ErrorIconContainer>
                : <ErrorIconContainer><Icon iconId={'sucsefull'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/></ErrorIconContainer>)}
            {error && <ErrorMassage>{error}</ErrorMassage>}
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
        outline: 2px solid ${theme.color.gray.midGray};
        border-radius: 4px;
        background-color: transparent;
    }

`

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 4px;
    font-weight: ${theme.typography.body18.bold};
    font-size: ${theme.typography.body18.size};
    line-height: ${theme.typography.body18.lineHeight};
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
    font-weight: ${theme.typography.body18.bold};
    font-size: ${theme.typography.body18.size};
    line-height: ${theme.typography.body18.lineHeight};
    pointer-events: none;
    transition: 0.2s;
    color: ${theme.color.gray.gray}
`
const ErrorIconContainer = styled.div`
    position: absolute;
    top: 22px;
    right: 22px;
`
const ErrorMassage = styled.div`
    position: absolute;
    bottom: -1.5rem;
    color: ${theme.color.dangerous};
`