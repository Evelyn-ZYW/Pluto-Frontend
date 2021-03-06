import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
border-radius: ${props => props.radius ? props.radius : "8px"};

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

max-width: 360px;
min-width: 360px;
min-height:190px;

`;

const Text = styled.div`

`;

const Header = styled.h1`

`;

const Body = styled.p`
`;

const Options = styled.div`


display: inline-flex;
flex-direction: row;

`;

const Left = styled.h1`
background-color: ${props => props.bgcolor ? props.bgcolor : "#F1E8E1"};
min-width: 180px;
max-width: 180px;
min-height:50px;
align-items: center;
`;
const Right = styled.h1`
background-color: ${props => props.bgcolor ? props.bgcolor : "#F1E8E1"};
min-width: 180px;
max-width: 180px;
min-height:50px;
align-items: center;
color:red;
`;


const DeletePopup = ({question, bodytext,text1, text2}) =>{ 
    return <Container>
        <Text>
            <Header>{question}</Header>
            <Body>{bodytext}</Body>
        </Text>

        <Options>
            <Left>{text1}</Left>
            <Right>{text2}</Right>
        </Options>
    </Container>
}



DeletePopup.defaultProps = {
    question: "Are you sure?",
    bodytext: "Deleting your post is permanent and cannot be reversed.",
    text1:"CANCEL",
    text2:"DELETE"

}

export default DeletePopup;