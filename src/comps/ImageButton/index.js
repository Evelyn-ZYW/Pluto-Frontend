import React from 'react';
import styled from 'styled-components';

import Close from './icons/close.png';
import Home from './icons/home.png';
import ArrowLeft from './icons/left_arrow.png';
import ArrowRight from './icons/right_arrow.png';
import Puppy from './icons/puppy.png';
import New from './icons/new.png';

const Container = styled.div`
    max-width: 300px;
    min-width: 300px;
    max-height: 557px;
    min-height: 557px;
    border-radius: 35px;
    background: rgba(220, 216, 241, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    // align-items: center;
`;

const ImageButton = ({ }) => {

    return <Container>

    </Container>
}

ImageButton.defaultProps = {

}

export default ImageButton;