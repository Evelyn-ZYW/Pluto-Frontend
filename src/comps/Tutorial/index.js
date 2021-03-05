import React from 'react';
import styled from 'styled-components';

import Button from 'comps/Button';
import ImgButton from 'comps/ImgButton';

//below are the imported icons
import Close from 'assets/close.png';
import Home from 'assets/home.png';
import ArrowRight from 'assets/right_arrow.png';

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
`;

const Top = styled.div`
    max-wdith: 80%;
    min-wdith: 80%;
    max-height: 10%;
    min-height: 39px;
    display: flex;
    justify-content: flex-end;
`;
const Middle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
const Bottom = styled.div`
    max-wdith: 228px;
    min-wdith: 228px;
    display: flex;
    justify-content: space-between;
`;
const Tutorial = ({ content, icon1, icon2, icon3, icon4, text, bgcolor, minwidth, radius, bshadow,}) => {

    return <Container>
        <Top>
            <ImgButton src={icon1} alt="" />
        </Top>
        <Middle>
            <img src={icon2} />
            <p style={{ width: "230px" }}>{content}</p>
        </Middle>
        <Bottom>
            <ImgButton src={icon3} alt="" />
            <Button
                text={text}
                src={icon4}
                bgcolor={bgcolor}
                minwidth={minwidth}
                radius={radius}
                bshadow={bshadow}
            />
        </Bottom>
    </Container>
}

Tutorial.defaultProps = {
    icon1: Close,
    icon2: Home,
    icon3: null,
    icon4: ArrowRight,
    content: "This is the homepage button. Here you will find all the posts."
}

export default Tutorial;