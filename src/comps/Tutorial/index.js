import React from 'react';
import styled from 'styled-components';

import Close from './icons/close.png';
import Home from './icons/home.png';
import ArrowLeft from './icons/left_arrow.png';
import ArrowRight from './icons/right_arrow.png';
import Puppy from './icons/puppy.png';
import New from './icons/new.png';

const Container = styled.div`
    max-width: 300px;
    min-width: 300px;
    max-height: 557px;
    min-height: 557px;
    border-radius: 35px;
    background: rgba(220, 216, 241, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    // align-items: center;
`;

const Icon = styled.img`
    max-wdith: 20px;
    max-height: 20px; 
`;
const Top = styled.div`
    max-wdith: 80%;
    min-wdith: 80%;
    display: flex;
    justify-content: flex-end;
    // border: 1px solid red;
`;
const Middle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    // border: 1px solid red;
`;
const Bottom = styled.div`
    max-wdith: 228px;
    min-wdith: 228px;
    display: flex;
    justify-content: space-between;
    // border: 1px solid red;
`;
const Tutorial = ({ text, icon1, icon2, icon3, icon4 }) => {

    return <Container>
        <Top>
            <Icon src={icon1} />
        </Top>
        <Middle>
            <img src={icon2} />
            <p style={{ width: "230px" }}>{text}</p>
        </Middle>
        <Bottom>
            <Icon src={icon3} />
            <Icon src={icon4} />
        </Bottom>
    </Container>
}

Tutorial.defaultProps = {
    icon1: Close,
    icon2: Home,
    icon3: null,
    icon4: ArrowRight,
    text: "This is the homepage button. Here you will find all the posts."
}

export default Tutorial;