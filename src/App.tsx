import './App.css';
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";
import styled from "styled-components";
import {Faqs} from "./layout/sections/faqs/Faqs";
import {ThirdBlock} from "./layout/sections/thirdBlock/ThirdBlock";
import {FourthBlock} from "./layout/sections/fourthBlock/FourthBlock";
import {FiveBlock} from "./layout/sections/fiveBlock/FiveBlock";
import {Form} from "./layout/sections/form/Form";
import {Reviews} from "./layout/sections/reviews/Reviews";
import 'normalize.css';


export function App() {
    return (
        <StyledApp>
            <Header/>
            <section id="faqs"><Faqs/></section>
            <section id="thirdBlock"><ThirdBlock/></section>
            <Reviews/>
            <section id="fourthBlock"><FourthBlock/></section>
            <FiveBlock/>
            <section id="form"><Form/></section>
            <Footer/>
        </StyledApp>
    );
}

const StyledApp = styled.div`
    display: flex;
    row-gap: 80px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        row-gap: 56px;
    }
`
