import React from 'react';
import styled from 'styled-components';

import photo from 'assets/cute.jpeg';


const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    align-items: center;
    max-width: ${props => props.maxwidth ? props.maxwidth : "297px"};
    min-width: ${props => props.minwidth ? props.minwidth : "297px"};
    max-height: ${props => props.maxheight ? props.maxheight : "69px"};
    min-height: ${props => props.minheight ? props.minheight : "69px"};

`;

const Pic = styled.div`

    max-width: 165px;
    max-height: auto;
    margin: 0px 130px 0px 130px;
`;

const PFP =styled.img`
    border-radius: 50%;
    height: 100%;
    width: 100%;
`;

const Name = styled.h1`
    margin: 10px 0;
    text-transform: lowercase;
`;

const Bio = styled.p`

`;
const Profile = ({username, bio}) =>{

    return  <Container>
            
            <Pic> <PFP src={photo} /> </Pic>
             <Name>{username}</Name>
             <Bio>{bio}</Bio>

    </Container>
   




   }

   Profile.defaultProps = {
      username:'Username',
      bio:'hello,'
      
   }
   
   


export default Profile;