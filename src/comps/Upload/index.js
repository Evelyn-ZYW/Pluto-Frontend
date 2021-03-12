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
    & > img {
        max-width: 414px;
        min-width: 414px;
        max-height: 414px;
        min-height: 414px;
    }
`;
const Icon = styled.img`
width: 49px;
height: 49px;
`;


const Upload = () => {
    const [upload, setUpload] = useState();
    const [image, setImage] = useState({ preview: '', raw: '' });

    const HandleUpload = (e) => {
        setUpload(true);
        setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
        })
    }

    return <Container>

        {upload === true ? <img src={image.preview} /> : <label for="file-input" style={{ position: "absolute" }}>
            <Icon src={AddPhoto} style={{ maxWidth: "49px", maxHeight: "49px", cursor: "pointer" }} />
        </label>}
        <input id="file-input" type="file" onChange={HandleUpload} style={{ display: 'none' }} />

        {/* <img src={url} />
        <label for="file-input" style={{ position: "absolute" }}>
            <Icon src={AddPhoto} style={{ maxWidth: "49px", maxHeight: "49px", cursor: "pointer" }} />
        </label>
        <input id="file-input" type="file" onChange={onChange} style={{ display: 'none' }} /> */}

    </Container>
}

Upload.defaultProps = {
    onChange: () => { },
}

export default Upload;