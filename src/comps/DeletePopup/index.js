import React, { useState } from 'react';
import styled from 'styled-components';

import Button from 'comps/Button';

const Container = styled.div`
    border-radius: ${props => props.radius ? props.radius : "8px"};
    max-width: 360px;
    min-width: 360px;
    max-height: 196px;
    min-height: 196px;
    background-color: white;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    min-width: 100%;
    min-height: 146px;

    &>div{
        text-align: center;
    }
}
`;
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 100%;
    font-weight: bold;
    position: absolute;
    bottom: 0px;
`;

const DeletePopup = ({ title, content, option1, option2, onClick }) => {
    const [select, setSelect] = useState(null);

    return <Container>
        <Text>
            <h3>{title}</h3>
            <div>{content}</div>
        </Text>
        <Buttons>
            <Button
                text={option1}
                minwidth={"159.5px"}
                minheight={"40px"}
                radius={"0 0 0 8px"}
                bshadow={"none"}
                borderR={"1px solid black"}
                select={1}
                bgcolor={select === 1 ? "#B6AEA7" : "#F1E8E1"}
                onClick={()=>onClick(1)}
            />
            <Button
                text={option2}
                minwidth={"159.5px"}
                minheight={"40px"}
                radius={"0 0 8px 0"}
                bshadow={"none"}
                select={2}
                bgcolor={select === 2 ? "#B6AEA7" : "#F1E8E1"}
                color={"#FF0000"}
                onClick={()=>onClick(2)}
            />
        </Buttons>
    </Container>
}



DeletePopup.defaultProps = {
    title: "Are you sure?",
    content: "Deleting your post is permanent and cannot be reversed.",
    option1: "CANCEL",
    option2: "DELETE"

}

export default DeletePopup;