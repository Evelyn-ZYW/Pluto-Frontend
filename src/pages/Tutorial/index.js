import React, {useState} from 'react';
import styled from 'styled-components';
import Tutorial from '../../comps/Tutorial';
import Navigation from  '../../comps/Navigation';

const Container  = styled.div`
width: 414px;
height: 868px;
display: flex;
flex-direction: column;
align-items: center;
`;

const TutorialPage = () => {

    return <Container>

        <Tutorial />

        <div className="footer">
        <Navigation/>
        </div>
  
    </Container>
}

export default TutorialPage