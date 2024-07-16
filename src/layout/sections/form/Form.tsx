import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitile} from "../../../components/ui/SectionTitile";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TextFiled} from "../../../components/ui/TextFiled";
import {theme} from "../../../styles/Theme.styled";

export const Form = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [consent, setConsent] = useState(false);
    const [errors, setErrors] = useState({name: '', phone: '', consent: ''});
    const [formTouched, setFormTouched] = useState(false);  // новый флаг

    const validateForm = () => {
        let valid = true;
        let errors = {name: '', phone: '', consent: ''};

        if (name.trim() === '') {
            errors.name = 'Имя обязательно для заполнения';
            valid = false;
        }

        if (phone.trim() === '') {
            errors.phone = 'Телефон обязателен для заполнения';
            valid = false;
        }

        if (!consent) {
            errors.consent = 'Необходимо согласие';
            valid = false;
        }

        setErrors(errors);
        setFormTouched(true);
        return valid;
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        const formData = {name, phone, consent};

        try {
            const response = await fetch('https://example.com/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Форма успешно отправлена');
                setName('');
                setPhone('');
                setConsent(false);
                setErrors({name: '', phone: '', consent: ''});
                setFormTouched(false);
            } else {
                alert('Произошла ошибка при отправке формы');
            }
        } catch (error) {
            alert('Произошла ошибка при отправке формы');
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit} id="form">
            <FlexWrapper direction={'column'} justify={'space-between'}>
                <SectionTitile>Отправь форму</SectionTitile>
                <FormContainer>
                    <TextFiledContainer>
                        <TextFiled type={'text'} labelText={'Имя'} value={name}
                                   onChange={(e) => setName(e)}
                                   error={errors.name} touched={formTouched}/>
                        <TextFiled type={'text'} labelText={'Телефон'} value={phone}
                                   onChange={(e) => setPhone(e)}
                                   error={errors.phone} touched={formTouched}/>
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
                    {errors.consent && <ErrorMessage>{errors.consent}</ErrorMessage>}

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
    @media ${theme.media.mobile} {
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
    @media ${theme.media.mobile} {
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
    @media ${theme.media.mobile} {
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
    font-size: ${theme.typography.body16.size};
    line-height: ${theme.typography.body16.lineHeight};
    font-weight: ${theme.typography.body16.weight};
`

const Button = styled.button`
    max-width: 384px;
    width: 100%;
    min-height: 64px;
    background-color: ${theme.color.primary.primary};
    color: ${theme.color.white};
    padding: 20px 40px;
    border-radius: 4px;
    border: none;
    font-size: ${theme.typography.headline5.size};
    line-height: ${theme.typography.headline5.lineHeight};
    font-weight: ${theme.typography.headline5.weight};
    cursor: pointer;

    @media ${theme.media.tablet} {
        max-width: 352px;
        width: 100%;
        min-height: 64px;
    }
`

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
`;