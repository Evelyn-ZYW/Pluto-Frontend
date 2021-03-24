import React from 'react';
import styled from 'styled-components';
import AddPhoto from '../../assets/add_photo.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    max-width: ${props => props.maxwidth ? props.maxwidth : "297px"};
    min-width: ${props => props.minwidth ? props.minwidth : "297px"};
    max-height: ${props => props.maxheight ? props.maxheight : "252px"};
    min-height: ${props => props.minheight ? props.minheight : "252px"};
`;



const Img = styled.img`
    border-radius: 50%;
    background-color: #C4C4C4;
    object-fit: cover;
    max-width: ${props => props.maxwh ? props.maxwh : "164px"};
    min-width: ${props => props.minwh ? props.minwh : "164px"};
    max-height: ${props => props.maxht ? props.maxht : "164px"};
    min-height: ${props => props.minht ? props.minht : "164px"};
`;

const Name = styled.h3`
    margin: 10px 0;
    text-transform: lowercase;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 24px;
`;

const Bio = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 21px;
`;

const EditableProfile = ({ onChange, username, bio, src }) => {

    return <Container>

        <label for="file-input">
            <Img src={src} style={{ cursor: "pointer" }} />
        </label>
        <input id="file-input" type="file" onChange={onChange} style={{ display: 'none' }} />
        <Name>{username}</Name>
        <Bio>{bio}</Bio>

    </Container>
}

EditableProfile.defaultProps = {
    username: 'Username',
    onChange: () => { },
    bio: 'hello,',
    src: "assets/a1.png"
}

export default EditableProfile;