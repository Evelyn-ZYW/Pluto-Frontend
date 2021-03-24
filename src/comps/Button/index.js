import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    background-color: ${props => props.bgcolor ? props.bgcolor : "#DCD8F1"};
    color: ${props => props.color ? props.color : "#000000"};
    padding: ${props => props.padding ? props.padding : "10px"};
    max-width: ${props => props.maxwidth ? props.maxwidth : ""};
    min-width: ${props => props.minwidth ? props.minwidth : ""};
    max-height: ${props => props.maxheight ? props.maxheight : ""};
    min-height: ${props => props.minheight ? props.minheight : ""};
    border-radius: ${props => props.radius ? props.radius : "40px"};
    box-shadow: ${props => props.bshadow ? props.bshadow : "0px 4px 4px rgba(0, 0, 0, 0.45);"};
    border-right: ${props=>props.borderR ? props.borderR : ""};
    border-bottom: ${props=>props.borderB ? props.borderB : ""};
    font-size: ${props=>props.fontSize ? props.fontSize : "20px"};
    font-family: ${props=>props.fontFamily ? props.fontFamily : "'Poppins', sans-serif"};
    font-weight: ${props=>props.fontWeight ? props.fontWeight : "600"};
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
    }
`;

const Img = styled.img`
    max-width: ${props => props.maxwh ? props.maxwh : ""};
    min-width: ${props => props.minwh ? props.minwh : ""};
`;

const Button = ({ text, color, bgcolor, maxwidth, minwidth, maxheight, minheight, radius, bshadow,
     src, maxwh, minwh, 
     borderR, borderB, onClick, padding, fontWeight, fontSize, fontFamily }) => {

    return <Container
        color={color}
        bgcolor={bgcolor}
        padding={padding}
        maxwidth={maxwidth}
        minwidth={minwidth}
        maxheight={maxheight}
        minheight={minheight}
        radius={radius}
        bshadow={bshadow}
        borderR={borderR}
        borderB={borderB}
        onClick={onClick}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
    >
        {text}
        <Img src={src} maxwh={maxwh} minwh={minwh} />
    </Container>
}

Button.defaultProps = {

}

export default Button;