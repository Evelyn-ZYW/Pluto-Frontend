import React from 'react';
import styled from 'styled-components';


import Home1 from 'assets/home.png';
import Plus1 from 'assets/new.png';
import User1 from 'assets/puppy.png';

const Container = styled.div`
    background-color: ${props => props.bgcolor ? props.bgcolor : "#DCD8F1"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0;
    padding: 7px;
    max-width: ${props => props.maxwidth ? props.maxwidth : "414px"};
    min-width: ${props => props.minwidth ? props.minwidth : "414px"};
    max-height: ${props => props.maxheight ? props.maxheight : "60px"};
    min-height: ${props => props.minheight ? props.minheight : "60px"};

`;

const Home = styled.img`
max-width: ${props => props.maxwh ? props.maxwh : "30px"};
min-width: ${props => props.minwh ? props.minwh : "30px"};
margin-left: 12px;
`;

const PlusPost = styled.img`
max-width: ${props => props.maxwh ? props.maxwh : "30px"};
min-width: ${props => props.minwh ? props.minwh : "30px"};
`;

const Puppy = styled.img`
max-width: ${props => props.maxwh ? props.maxwh : "35px"};
min-width: ${props => props.minwh ? props.minwh : "30px"};
margin-right: 12px;
`;


const Navigtion = () => {
    return <Container>
        <Home src={Home1}>

        </Home>
        <PlusPost src={Plus1}>

        </PlusPost>
        <Puppy src={User1}>

        </Puppy>
    </Container>
}

export default Navigtion;