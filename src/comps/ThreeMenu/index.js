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

const ThreeMenu = ({ onClick }) => {
    return <Container>
            <Button
                bgcolor="#FFFFFF"
                radius={"8px 8px 0px 0px"}
                borderB={"1px solid #C4C4C4"}
                bshadow={"none"}
                text={"EDIT"}
                minwidth={"297px"}
                minheight={"69px"}
                select={1}
                onClick={() => onClick(1)}
            ></Button>
            <Button
                bgcolor="#FFFFFF"
                color="#FF0000"
                radius={"0px 0px 8px 8px"}
                bshadow={"none"}
                text={"DELETE"}
                minwidth={"297px"}
                minheight={"69px"}
                select={2}
                onClick={() => onClick(2)}
            ></Button>
            <br></br>
        <Button
            radius={"8px"}
            bshadow={"none"}
            text={"CANCEL"}
            minwidth={"297px"}
            minheight={"69px"}
            select={3}
            onClick={() => onClick(3)}
        ></Button>


    </Container>
}

ThreeMenu.defaultProps = {

}

export default ThreeMenu;