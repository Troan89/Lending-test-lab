import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitile} from "../../../components/SectionTitile";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TextFiled} from "../../../components/TextFiled";
import {theme} from "../../../styles/Theme.styled";

export const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (!consent) {
            alert('Пожалуйста, подтвердите согласие.');
            return;
        }

        if (name === '' || email === '') {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        alert(`Данные отправлены:\nИмя: ${name}\nЭлектронная почта: ${email}`);

        setName('');
        setEmail('');
        setConsent(false);
    };
    return (
        <StyledForm>
            <FlexWrapper direction={'column'} justify={'space-between'}>
                <SectionTitile>Отправь форму</SectionTitile>
                <FormContainer>
                    <TextFiledContainer>
                        <TextFiled type={'text'} labelText={'Имя'}/>
                        <TextFiled type={'text'} labelText={'Телефон'}/>
                    </TextFiledContainer>
                    <CheckboxContainer>
                        <Checkbox>
                            <input
                                type="checkbox"
                                id="consent"
                                name="consent"
                                checked={consent}
                                onChange={(e) => setConsent(e.target.checked)}
                                required
                            />
                            <Label htmlFor="consent">Я соглашаюсь, отказываюсь</Label>
                        </Checkbox>
                        <Button type="submit">Отправить</Button>
                    </CheckboxContainer>


                </FormContainer>
            </FlexWrapper>

        </StyledForm>
    );
};

const StyledForm = styled.section`
    max-width: 800px;
    width: 100%;
    min-height: 258px;
    display: flex;
    justify-content: space-between;
    //padding: 0 20px;
    
    @media ${theme.media.tablet} {
        max-width: 728px;
        min-height: 246px;
    }
    @media ${theme.media.mobale} {
        max-width: 343px;
        min-height: 342px;
    }
    @media ${theme.media.miniMobile} {
        max-width: 288px;
        min-height: 342px;
    }
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    min-height: 158px;
    

    @media ${theme.media.tablet} {
        gap: 24px;
    }
    
`
const TextFiledContainer = styled.div`
    display: flex;
    gap: 32px;

    @media ${theme.media.tablet} {
        gap: 24px;
    }
    @media ${theme.media.mobale} {
        flex-wrap: wrap;
        gap: 20px;
    }
    @media ${theme.media.miniMobile} {
        flex-wrap: wrap;
        gap: 20px;
    }
`

const CheckboxContainer = styled.div`
    display: flex;
    gap: 32px;
    width: 100%;

    @media ${theme.media.tablet} {
        gap: 24px;
    }
    @media ${theme.media.mobale} {
        flex-wrap: wrap;
        gap: 20px;
    }
    @media ${theme.media.miniMobile} {
        flex-wrap: wrap;
        gap: 20px;
    }
`
const Checkbox = styled.div`
    max-width: 384px;
    width: 100%;
    min-height: 28px;
    display: flex;
    align-items: center;
    gap: 16px;
    input[type="checkbox"] {
        //appearance: none;
        //-webkit-appearance: none;
        width: 24px;
        height: 24px;
        border-radius: 4px;
        border: 2px solid ${theme.color.gray.darkGray};
        outline: none;
    }

`
const Label = styled.label`
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
`

const Button = styled.button`
    max-width: 384px;
    width: 100%;
    min-height: 64px;
    background-color: ${theme.color.primary.primary};
    color: ${theme.color.white} ;
    padding: 20px 40px;
    border-radius: 4px;
    border: none;
    font-size: ${theme.typography.headline5.size};
    line-height: ${theme.typography.headline5.lineHeight};
    font-weight: ${theme.typography.headline5.weight};

    @media ${theme.media.tablet} {
        max-width: 352px;
        width: 100%;
        min-height: 64px;
    }
`