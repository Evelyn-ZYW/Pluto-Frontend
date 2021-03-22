import React, { useState } from 'react';
import styled from 'styled-components';

//below are the imported icons

import AddPhoto from '../../assets/add_photo.png';

const Container = styled.form`
    max-width: 414px;
    min-width: 414px;
    max-height: 414px;
    min-height: 414px;
    background-color: ${props => props.bgcolor ? props.bgcolor : "#E5E5E5"};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    & > img {
        // max-width: 414px;
    //    height: auto:
       object-fit: fill;

    }
`;
const Icon = styled.img`
    width: 49px;
    height: 49px;
    display: ${props => props.display ? props.display : "block"};
`;

const Upload = ({ onChange, url, display }) => {

    return <Container>

        <img src={url} />
        <label for="file-input" style={{ position: "absolute" }}>
            <Icon src={AddPhoto} style={{ cursor: "pointer" }} display={display}/>
        </label>
        <input id="file-input" type="file" onChange={onChange} style={{ display: 'none' }} />

    </Container>
}

Upload.defaultProps = {
    onChange: () => { },
}

export default Upload;