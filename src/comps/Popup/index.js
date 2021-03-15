import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animData from './animate/complete1.json';

import Button from 'comps/Button';

const Container = styled.div`
    max-width: 300px;
    min-width: 300px;
    max-height: 557px;
    min-height: 557px;
    border-radius: 35px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h4 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 21px;
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 18px;
    }
`;

const Popup = ({onClick}) => {

    const dO = {
        loop: false,
        autoplay: true,
        animationData: animData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return <Container>

        <div style={{ textAlign: "center" }}>
            <Lottie
                options={dO}
                background={"blue"}
                style={{ width: "180px", height: "180px" }}
            />
            <h4>Awesome!</h4>
            <p>You're ready to use pluto.</p>
        </div>
        <Button
            text="GET STARTED"
            minwidth={"205px"}
            minheight={"52px"}
            onClick={onClick}
        />
    </Container>
}

Popup.defaultProps = {

}

export default Popup;