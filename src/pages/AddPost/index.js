import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImgButton from '../../comps/ImgButton';
import Input from '../../comps/Input';
import Upload from '../../comps/Upload';
import Navigation from '../../comps/Navigation';
import Close from '../../assets/close.png';


const Container = styled.div`
    border: 1px solid black;
    width: 414px;
    height: 868px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;
const Top = styled.div`
    width: 90%;
    min-height: 76px;
    max-height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 21px;
    #center {
        position: absolute;
        left: 35%;
    }
    #post {
        color: #9DCFF6;
    }
`;
const Middle = styled.div`
    width: 414px;
    height: 414px;
    background-color: ${props => props.bgcolor ? props.bgcolor : "#E5E5E5"};
    display: flex;
    justify-content: center;
    align-items: center;
    &>img {
        width: 49px;
        height: 49px;
    }
`;
const Bottom = styled.div`

`;

const AddPost = () => {
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
        <Top>
            <ImgButton src={Close} maxwh="27px" maxht="27px" />
            <h3 id="center">NEW POST</h3>
            {upload ? <h3 id="post">POST</h3> : <h3></h3>}
        </Top>
        <Middle>
            {upload ? <Upload onChange={HandleUpload} url={image.preview} display={"none"} /> : <Upload onChange={HandleUpload} url={image.preview} />}
        </Middle>
        <Bottom>
            <Input
                maxwidth="371px"
                minwidth="371px"
                maxheight="220px"
                minheight="220px"
                bradius="10px"
            />
        </Bottom>
        <Navigation />
    </Container>
}

export default AddPost;