import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Navigation from  '../../comps/Navigation';
import Post from '../../comps/Post';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

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

    const history = useHistory();

//     const CheckToken = async () => {
//         //asume we will store the token in the sessionStorage
//         const token = await sessionStorage.getItem("token");
//         console.log("token", token)
//         if(token){
//             axios.defaults.headers.common['Authorization'] = token;
//             history.push("/profile");
//         }
//     }

//     useEffect(()=>{
//         //when the page loads, do the following
//     CheckToken();
// },[])

return <Container>
        <Main>
        <Post/>
        </Main>
    <Navigation minwidth="400px"/>
</Container>
}

export default PostPage