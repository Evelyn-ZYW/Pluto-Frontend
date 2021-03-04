import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animData from './animate/complete1.json';

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
`;

const Button = styled.div`
    background-color:#DCD8F1;
    width: 205px;
    height: 52px;
    border-radius: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
`;
const Popup = () => {

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
        <Button><h4>GET STARTED</h4></Button>
    </Container>
}

Popup.defaultProps = {

}

export default Popup;