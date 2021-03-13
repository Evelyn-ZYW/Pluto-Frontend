import React, {useState} from 'react';
import styled from 'styled-components';
import Tutorial from '../../comps/Tutorial';
import Navigation from  '../../comps/Navigation';

import ArrowRight from '../../assets/right_arrow.png';


import { Tutorial2 } from 'stories/Components.stories';
import { Tutorial3 } from 'stories/Components.stories';

const Container  = styled.div`
border: 1px solid black;
width: 414px;
height: 868px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

#text {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 21px;
    width: 100%;
    margin-left: 50px;
    margin-bottom: 30px;
    margin-top: 50px;
}

`;
const Main = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top:50px;
max-width: 90%;
min-width: 90%;
`;



const TutorialPage = () => {


    
    return <Container>
        <Main>
        <Tutorial  bshadow={"none"}
                    bgcolor={"none"}
                    icon4={ArrowRight}
                   
                   />
                
         {/* <Tutorial2 />
        <Tutorial3 /> */}

        </Main>
        <Navigation/>
    </Container>
}

export default TutorialPage