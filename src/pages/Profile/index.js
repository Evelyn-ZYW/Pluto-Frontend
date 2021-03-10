import React from 'react';
import styled from 'styled-components';
import ImgButton from '../../comps/ImgButton';
import Profile from '../../comps/Profile';
import Navigation from '../../comps/Navigation';
import More from '../../assets/more.png';
import Avatar from '../../assets/a1.png';

const Container = styled.div`
border: 1px solid black;
width: 414px;
height: 868px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

.uname {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 24px;
}
`;
const Top = styled.div`
    max-width: 90%;
    min-width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Middle = styled.div`

`;
const Bottom = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    & > div {
        margin: 1.5px;
        background-color: #C4C4C4;
        width: 136px;
        height: 136px;
    }
`;



const ProfilePage = () => {

    return <Container>
        <Top>
            <h3 className="uname">Username</h3>
            <ImgButton src={More} maxwh="27px" maxht="27px" />
        </Top>
        <Middle>
            <Profile src={Avatar} />
        </Middle>
        <Bottom className="bottom">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Bottom>
        <Navigation />
    </Container>
}

export default ProfilePage;