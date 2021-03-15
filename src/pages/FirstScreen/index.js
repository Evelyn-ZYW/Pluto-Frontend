import React from 'react';
import styled from 'styled-components';
import Button from '../../comps/Button';
import Pluto from '../../assets/Logo.png';
import {useHistory} from 'react-router-dom';

const Container = styled.div`
width: 414px;
height: 868px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border: 1px solid black;
font-family: 'Poppins', sans-serif;
font-weight: 600;
font-size: 21px;
`;
const LogoCont = styled.div`
margin-top: 30%;

`;
const Logo = styled.img``;
const ButtonCont = styled.div`
height: 110px;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const FirstScreen = () => {

    const history = useHistory();

    const clickLogin = () => {
        history.push('/Login')
    }

    const clickRegister = () => {
        history.push('/Register')
    }

    return <Container>
        <LogoCont>
            <Logo src={Pluto}></Logo>
        </LogoCont>
        <ButtonCont>
            <Button onClick={clickLogin} text="LOGIN" maxheight="52px" minwidth="205px" bgcolor="#DCD8F1" radius="40px" border="none" />
            <Button onClick={clickRegister} text="REGISTER" maxheight="52px" minwidth="205px" bgcolor="#C4C4C4" radius="40px" border="none"/>
        </ButtonCont>
    </Container>
}

export default FirstScreen