import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: ${props => props.maxwidth ? props.maxwidth : "297px"};
    min-width: ${props => props.minwidth ? props.minwidth : "297px"};
    max-height: ${props => props.maxheight ? props.maxheight : "252px"};
    min-height: ${props => props.minheight ? props.minheight : "252px"};
`;

const Img = styled.img`
    border-radius: 50%;
    max-width: ${props => props.maxwh ? props.maxwh : ""};
    min-width: ${props => props.minwh ? props.minwh : ""};
    max-height: ${props => props.maxht ? props.maxht : ""};
    min-height: ${props => props.minht ? props.minht : ""};
    object-fit: cover;
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
const Profile = ({ maxwh, minht, onClick, username, bio, src }) => {

    return <Container onClick={onClick}>

        <Img maxwh={maxwh} minht={minht} src={src} />
        <Name>{username}</Name>
        <Bio>{bio}</Bio>

    </Container>
}

Profile.defaultProps = {
    username: 'Username',
    onClick: ()=>{},
    bio: 'hello,',
    src: "assets/a1.png"
}

export default Profile;