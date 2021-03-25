import React, {useState} from 'react';
import styled from 'styled-components';
import ImgButton from '../../comps/ImgButton';
import Button from '../../comps/Button';
import InputElements from '../../comps/Input';
import ArrowLeft from '../../assets/left_arrow.png';
import {useHistory} from 'react-router-dom';
import axios from 'axios'

const Container = styled.div`
border: 1px solid black;
width: 414px;
height: 868px;
display: flex;
flex-direction: column;
align-items: center;

#text {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 21px;
    width: 100%;
    margin-left: 50px;
    margin-bottom: 30px;
    margin-top: 94px;
}
`;

const BackCont = styled.div`
width: 100%;
margin-left: 5%;
margin-top: 5%;
`;

const ButtonCont = styled.div`
margin-top: 75px;
`;


const InputCont = styled.div`

display: flex;
flex-direction: column;
height: 135px;
justify-content: space-between;
align-items: center;
width: 100%;
`;


const LoginPage = () => {


    const history = useHistory();

    const [user, setUsername] = useState(null);
    const [pass, setPassword] = useState(null);
    const [error, setError] = useState(null);
    
    const clickLogin = async() => {
    

        if(pass === null) {
            setError("please enter a password")
        }

        if(user === null) {
            setError("please enter a username")
        }


        if(pass !== null && user !== null){
                const resp = await axios.post("https://pluto-db.herokuapp.com/api/users/login", { username:user, password: pass});
                if(resp.data !== error){
                    history.push('/AllPosts')
    
                    const token = resp.data.token;
                    console.log(token)
                    sessionStorage.setItem("token", token);
                    axios.defaults.headers.common['Authorization'] = token;
                } else {
                    setError("There was a problem logging in, please try again.")
                }
            
        }
    }
    const clickBack = () => {
        history.push('/')
    }

    

    return <Container>
        <BackCont>
            <ImgButton onClick={clickBack} src={ArrowLeft} maxwh="30px" />
        </BackCont>
        <div id="text">
            LOGIN
        </div>
        <InputCont>
            <InputElements onChange={(e)=>setUsername(e.target.value)}  fontSize="15px" minwidth="345px" minheight="50px"  placeholder="username" />
            <InputElements onChange={(e)=>setPassword(e.target.value)}  fontSize="15px" minwidth="345px" minheight="50px"  placeholder="password" type="password"/>
        </InputCont> 
        <ButtonCont>
             <Button onClick={clickLogin} text="NEXT" maxheight="50px" minwidth="345px" bgcolor="#DCD8F1" radius="40px" border="none" />
        </ButtonCont>
    </Container>
}

export default LoginPage