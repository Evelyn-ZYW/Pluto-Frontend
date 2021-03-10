import React from 'react';
import styled from 'styled-components';
import ImgButton from '../../comps/ImgButton';
import Button from '../../comps/Button';
import InputElements from '../../comps/Input';
import ArrowLeft from '../../assets/left_arrow.png';

const Container = styled.div`
border: 1px solid black;
width: 414px;
height: 868px;
display: flex;
flex-direction: column;
align-items: center;

#text {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 21px;
    width: 100%;
    margin-left: 50px;
    margin-bottom: 30px;
    margin-top: 94px;
}
`;

const BackCont = styled.div`
width: 100%;
margin-left: 5%;
margin-top: 5%;
`;

const ButtonCont = styled.div`
margin-top: 75px;
`;


const InputCont = styled.div`

display: flex;
flex-direction: column;
height: 135px;
justify-content: space-between;
align-items: center;
width: 100%;
`;


const LoginPage = () => {


    return <Container>
        <BackCont>
            <ImgButton src={ArrowLeft} maxwh="30px" />
        </BackCont>
        <div id="text">
            LOGIN
        </div>
        <InputCont>
            <InputElements fontSize="15px" minwidth="345px" minheight="50px"  placeholder="username" />
            <InputElements fontSize="15px" minwidth="345px" minheight="50px"  placeholder="password" type="password"/>
        </InputCont> 
        <ButtonCont>
             <Button  text="NEXT" maxheight="50px" minwidth="345px" bgcolor="#DCD8F1" radius="40px" border="none" />
        </ButtonCont>
    </Container>
}

export default LoginPage