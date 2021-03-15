import React, {useState} from 'react';
import styled from 'styled-components';
import ImgButton from '../../comps/ImgButton';
import Button from '../../comps/Button';
import InputElements from '../../comps/Input';
import ArrowLeft from '../../assets/left_arrow.png';
import PopUp from '../../comps/Popup';
import axios from 'axios';

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
margin: 17.5px;
`;

const RegisterPage = () => {

    const [open, setOpen] = useState(true);
    const [close, setClose] = useState(false);

    const [pass, setPass] = useState("");
    const [passconfirm, setPassconfirm] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const clickNext = async() => {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(pass !== passconfirm){
            setError("Passwords do not match")
        } else if (!email.match(mailformat)){
            setError("email format is invalid")
        } else {
            setOpen(!open);
            setClose(!close);
        }
    }


    return <Container>
        <BackCont>
            <ImgButton src={ArrowLeft} maxwh="30px" />
        </BackCont>
        <div id="text">
            REGISTER
        </div>
        <InputCont>
            <InputElements fontSize="15px" minwidth="345px" minheight="50px" placeholder="name" />
            <InputElements fontSize="15px" minwidth="345px" minheight="50px"  placeholder="username" />
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
                 <PopUp />
             </Overlay>
        </div>
    </Container>
}

export default RegisterPage