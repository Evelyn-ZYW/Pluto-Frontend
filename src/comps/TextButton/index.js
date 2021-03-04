import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    background-color: ${props => props.bgcolor ? props.bgcolor : "#DCD8F1"};
    color: ${props => props.color ? props.color : ""};
    max-width: ${props => props.maxwidth ? props.maxwidth : "205px"};
    min-width: ${props => props.minwidth ? props.minwidth : "205px"};
    max-height: ${props => props.maxheight ? props.maxheight : "52px"};
    min-height: ${props => props.minheight ? props.minheight : "52px"};
    border-radius: ${props => props.radius ? props.radius : "40px"};
    box-shadow: ${props => props.bshadow ? props.bshadow : "0px 4px 4px rgba(0, 0, 0, 0.45);"};
    align-items: center;
    justify-content: center;
`;

const TextButton = ({ text, bgcolor, maxwidth, minwidth, maxheight, minheight, radius, bshadow }) => {

    return <Container
        bgcolor={bgcolor}
        maxwidth={maxwidth}
        minwidth={minwidth}
        maxheight={maxheight}
        minheight={minheight}
        radius={radius}
        bshadow={bshadow}
    >
        {text}
    </Container>
}

TextButton.defaultProps = {
    text: "LOGIN"
}

export default TextButton;