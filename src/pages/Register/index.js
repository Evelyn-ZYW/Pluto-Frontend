import React, {useState} from 'react';
import styled from 'styled-components';
import ImgButton from '../../comps/ImgButton';
import Button from '../../comps/Button';
import InputElements from '../../comps/Input';
import ArrowLeft from '../../assets/left_arrow.png';
import PopUp from '../../comps/Popup';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

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
    margin-top: 50px;
}

.open {
    display: block;
    position: relative;
}

.open.open {
    display: none;
}

.close {
    display: none;
}

.close.open {
    display: block;
}

#error {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 21px;
    color: red;
    margin-left: 50px;
    width: 100%;
}
`;
const BackCont = styled.div`
width: 100%;
margin-left: 5%;
margin-top: 5%;
`;

const ButtonCont = styled.div`
margin-top: 175px;
`;


const InputCont = styled.div`

display: flex;
flex-direction: column;
height: 394px;
justify-content: space-between;
align-items: center;
width: 100%;
`;

const Overlay = styled.div`
background-color: rgba(0,0,0,0.5);
width: 414px;
height: 868px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
left: 0;

`;

const RegisterPage = () => {

    const history = useHistory();

    const [open, setOpen] = useState(true);
    const [close, setClose] = useState(false);
    
    const [name, setName] = useState("");
    const [un, setUn] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [passconfirm, setPassconfirm] = useState("");
    
    const [error, setError] = useState(null);

    const clickNext = async() => {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(pass !== passconfirm){
            setError("Passwords do not match")
        } else if (!email.match(mailformat)){
            setError("email format is invalid")
        } else {
            // const resp = await axios.post("endpoint api", {name: name, un:un, email: email, password: pass});
            // if(resp.data !== "error/whatever our message is"){
                setOpen(!open);
                setClose(!close);
            // }
        }
    }

    const clickBack = () => {
        history.push('/')
    }

    const clickTutorial = () => {
        history.push('/Tutorial')
    }




    return <Container>
        <BackCont>
            <ImgButton onClick={clickBack} src={ArrowLeft} maxwh="30px" />
        </BackCont>
        <div id="text">
            REGISTER
        </div>
        <InputCont>
            <InputElements onChange={(e)=>setName(e.target.value)}  fontSize="15px" minwidth="345px" minheight="50px" placeholder="name" />
            <InputElements onChange={(e)=>setUn(e.target.value)}  fontSize="15px" minwidth="345px" minheight="50px"  placeholder="username" />
            <InputElements onChange={(e)=>setEmail(e.target.value)}  fontSize="15px" minwidth="345px" minheight="50px"  placeholder="email"/>
            <InputElements onChange={(e)=>setPass(e.target.value)} fontSize="15px" minwidth="345px" minheight="50px"  placeholder="password" type="password"/>
            <InputElements onChange={(e)=>setPassconfirm(e.target.value)} fontSize="15px" minwidth="345px" minheight="50px"  placeholder="confirm password" type="password" />
            <div id="error">
                            {error}
            </div>
        </InputCont> 
        <ButtonCont onClick={() => {
                   clickNext();
              }} >
             <Button  text="NEXT" maxheight="50px" minwidth="345px" bgcolor="#DCD8F1" radius="40px" border="none" />
        </ButtonCont>
        <div className={open ? "open" : null}>
               <Overlay >
                 <PopUp onClick={clickTutorial} />
             </Overlay>
        </div>
    </Container>
}

export default RegisterPage