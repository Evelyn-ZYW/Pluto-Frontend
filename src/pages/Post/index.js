import React, {useState} from 'react';
import styled from 'styled-components';
import Navigation from  '../../comps/Navigation';
import Post from '../../comps/Post';

const Container  = styled.div`
border: 1px solid black;
width: 414px;
height: 868px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

#text {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 21px;
  
}



`;

const Main = styled.div`
margin-top:20px;
display: flex;
align-items: center;
justify-content: center;

`;

const PostPage =() =>{

return <Container>
        <Main>
        <Post/>
        </Main>
    <Navigation minwidth="400px"/>
</Container>
}

export default PostPage