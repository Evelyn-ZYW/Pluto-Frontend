import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImgButton from '../../comps/ImgButton';
import Button from '../../comps/Button';
import Profile from '../../comps/Profile';
import InputElements from '../../comps/Input';
import DeletePopup from '../../comps/DeletePopup';
import ArrowLeft from '../../assets/left_arrow.png';
import Avatar from '../../assets/a1.png';
import { useHistory } from 'react-router-dom';


const Container = styled.div`
border: 1px solid black;
width: 414px;
height: 868px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
position: relative;

.uname {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 24px;
}
`;
const Top = styled.div`
    width: 90%;
    height: 5%;
    display: flex;
    margin-top: 3%;
    align-items: center;
    // border: 1px solid red;
`;
const Middle = styled.div`
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .inputs {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 21px;
    }
    #area {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 15px;
        resize: none;
        outline: none;
        border: 1px solid;
        display: block;
        box-sizing: border-box;
        width: 361px;
        height: 143px;
        padding: 12px;
    }

    #measure {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 15px;
        position: absolute;
        bottom: 170px;
        right: 35px;
        color: #5B5B5B;
    }
`;

const Bottom = styled.div`
    height: 10%;
    display: flex;
    align-items: flex-end;
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
const EditProfile = () => {
    const history = useHistory();

    const [name, setName] = useState("");
    const [un, setUn] = useState("");
    const [count, setCount] = useState(0);

    const [display, setDisplay] = useState(null);

    const GoBack = () => {
        history.push('/Profile')
    }
    const LogOut = () => {
        setDisplay(true);
    }
    const HandleClick = (selected) => {
        if (selected === 1) {
            setDisplay(false);
        } else if (selected === 2) {
            history.push('/')
        }
    }

    const handleWordCount = (e) => {
        setCount(e.target.value.length);
    }
    useEffect(() => {
        setDisplay(false);
    }, [])
    return <Container>
        <Top>
            <ImgButton src={ArrowLeft} maxwh="30px" onClick={GoBack} />
        </Top>
        <Middle>
            <Profile src={Avatar} />
            <InputElements onChange={(e) => setName(e.target.value)} fontSize="15px" minwidth="345px" minheight="50px" placeholder="name" className="inputs" />
            <InputElements onChange={(e) => setUn(e.target.value)} fontSize="15px" minwidth="345px" minheight="50px" placeholder="username" className="inputs" />
            <div>
                <textarea id="area" placeholder="bio"
                    maxLength="150"
                    onChange={handleWordCount}
                ></textarea>
                <div id="measure">{count}/150</div>
            </div>
            <Button text="Update" maxheight="50px" minwidth="345px" bgcolor="#DCD8F1" radius="40px" border="none" />
        </Middle>
        <Bottom>
            <Button
                text="Log Out" bgcolor="none" bshadow="none" border="none" onClick={LogOut} />
        </Bottom>
        {display ? <div>
            <Overlay >
                <DeletePopup
                    title={"Log out of Pluto?"}
                    content={null}
                    option1={"CANCEL"}
                    option2={"LOGOUT"}
                    onClick={HandleClick}
                />
            </Overlay>
        </div> : null}


    </Container>
}

export default EditProfile;