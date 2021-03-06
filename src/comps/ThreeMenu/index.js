import React from 'react';
import styled from 'styled-components';

import Button from '../Button';

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

const Options = styled.div`

    background: #FFFFFF;
    text-transform: uppercase;
    justify-content: center;
    max-width: ${props => props.maxwidth ? props.maxwidth : ""};
    min-width: ${props => props.minwidth ? props.minwidth : ""};
    max-height: ${props => props.maxheight ? props.maxheight : ""};
    min-height: ${props => props.minheight ? props.minheight : ""};
    margin-top: ${props=>props.margin ? props.margin : 0};
    margin-bottom: 25px;

`;

const Line = styled.hr`
width:296px;
`;


const ThreeMenu = ({}) => {
    return <Container>
        <Options>
            <Button 
              bgcolor="#FFFFFF"
              radius={"8px"}
              bshadow={"none"}
              text={"EDIT"}
              minwidth={"297px"}
              minheight={"69px"}></Button>
              <Line></Line>
            <Button
              bgcolor="#FFFFFF"
              color="#FF0000"
              radius={"8px"}
              bshadow={"none"}
              text={"DELETE"}
              minwidth={"297px"}
              minheight={"69px"}></Button>

        </Options>

   
        <Button 
        radius={"8px"}
        bshadow={"none"}
        text={"CANCEL"}
        minwidth={"297px"}
        minheight={"69px"} ></Button>

        
    </Container>
}

ThreeMenu.defaultProps = {

 

}

export default ThreeMenu;