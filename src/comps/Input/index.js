import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
color:#5B5B5B;
display: inline-flex;
flex-direction: column;
`;

const Input = styled.input`
background: #FFFFFF;
border: 1px solid #000000;
border-radius: ${props => props.bradius ? props.bradius : ""};
max-width: ${props => props.maxwidth ? props.maxwidth : ""};
min-width: ${props => props.minwidth ? props.minwidth : ""};
max-height: ${props => props.maxheight ? props.maxheight : ""};
min-height: ${props => props.minheight ? props.minheight : ""};
margin-top: ${props => props.margin ? props.margin : 0};
font-size: ${props => props.fontSize ? props.fontSize : "12px"};
font-family: ${props => props.fontFamily ? props.fontFamily : "'Poppins', sans-serif"};
font-weight: ${props => props.fontWeight ? props.fontWeight : "300"};
padding-left:12px;
outline: none;
`;



const InputElements = ({ placeholder, type, margin, onChange, maxwidth, minwidth, maxheight, minheight, fontSize, fontFamily, fontWeight, bradius }) => {
    return <Container>
        <Input type={type} placeholder={placeholder} margin={margin} onChange={onChange}
            maxwidth={maxwidth}
            minwidth={minwidth}
            maxheight={maxheight}
            minheight={minheight}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            bradius={bradius}
        ></Input>
    </Container>
}


InputElements.defaultProps = {

    placeholder: "username",
    type: "text",
    margin: null,
    onChange: () => { }

}

export default InputElements;