import React from 'react';
import styled from 'styled-components';
import ImgButton from '../../comps/ImgButton';
import Profile from '../../comps/Profile';
import Navigation from '../../comps/Navigation';
import More from '../../assets/more.png';
import Avatar from '../../assets/a1.png';
import Cute1 from '../../assets/pomer.jpg';
import Cute2 from '../../assets/cute.jpeg';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
border: 1px solid black;
width: 414px;
height: 868px;
display: flex;
flex-direction: column;
align-items: center;
position: relative;

.uname {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 24px;
}
`;
const Top = styled.div`
    width: 90%;
    min-height: 76px;
    max-height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Middle = styled.div`
    height: 300px;
`;
const Bottom = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    & > div {
        margin: 1.5px;
        background-color: #C4C4C4;
        width: 136px;
        height: 136px;
        & > img {
            width: 136px;
            height: 136px;
            object-fit: cover;
        }
    }
`;

const ProfilePage = () => {
    const history = useHistory();
    const EditProfile = () => {
        history.push('/EditProfile')
    }
    return <Container>
        <Top>
            <h3 className="uname">Username</h3>
            <ImgButton src={More} maxwh="27px" maxht="27px" onClick={EditProfile} />
        </Top>
        <Middle>
            <Profile src={Avatar} />
        </Middle>
        <Bottom className="bottom">
            <div><img src={Cute1} /></div>
            <div><img src={Cute2} /></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Bottom>
        <Navigation minwidth="400px" />
    </Container>
}

export default ProfilePage;