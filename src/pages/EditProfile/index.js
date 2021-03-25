import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImgButton from '../../comps/ImgButton';
import Button from '../../comps/Button';
import EditableProfile from '../../comps/EditableProfile';
import InputElements from '../../comps/Input';
import DeletePopup from '../../comps/DeletePopup';
import ArrowLeft from '../../assets/left_arrow.png';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


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
    #bio {
        position: relative;
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
        height: 208px;
        padding: 12px;
    }

    #measure {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 15px;
        position: absolute;
        bottom: 10px;
        right: 10px;
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


async function editProfilePicture({ image, user_id }) {
    const formData = new FormData();

    formData.append("image", image)
    formData.append("user_id", user_id)

    const result = await axios.post('http://localhost:8080/api/profile/edit_pp', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    console.log(result)
    return result.data
}


const EditProfile = () => {
    const history = useHistory();


    const [un, setUn] = useState("");
    const [count, setCount] = useState(0);

    const [display, setDisplay] = useState(null);

    const GoBack = () => {
        history.push('/Profile')
    }
    const LogOut = () => {
        setDisplay(true);
    }

    // const HandleUpload = (e) => {
    //     setUpload(true);
    //     setImage({
    //         preview: URL.createObjectURL(e.target.files[0]),
    //         raw: e.target.files[0]
    //     })
    // }

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

    const [upload, setUpload] = useState();
    const [photo, setPhoto] = useState({ preview: '', raw: '' });
    const [ph, setPh] = useState();


    const [user_id, setUI] = useState()
    const [file, setFile] = useState()
    const [images, setImages] = useState([])
    const [name, setName] = useState()
    const [bio, setBio] = useState()

    const submit = async event => {
        event.preventDefault()
        const result = await editProfilePicture({ image: file, user_id })
        setImages([result.image, ...images])
        history.push('/Profile')
    }

    const fileSelected = event => {
        setUpload(true);
        const file = event.target.files[0]
        setFile(file)
        setPhoto({
            preview: URL.createObjectURL(event.target.files[0]),
        })
    }


    const updateInfo = async () => {
        const result = await axios.patch(`https://pluto-db.herokuapp.com/api/user_update/${user_id}`, {name: name, bio: bio  })
    }


    const CheckToken = async () => {
        //asume we will store the token in the sessionStorage
        const token = await sessionStorage.getItem("token");
        console.log("token", token)

        function parseJwt(token) {
            // if (!token) { return; }
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        }
        const data = parseJwt(token);
        const userId = data.userId
        console.log("this is the userId", userId)
        setUI(userId)
    }

    useEffect(() => {
        setDisplay(false);
        CheckToken();
        // CheckToken();
    }, [])
    return <Container>
        <Top>
            <ImgButton src={ArrowLeft} maxwh="30px" onClick={GoBack} />
        </Top>
        <Middle>
            <EditableProfile onChange={fileSelected} src={photo.preview} />
            <InputElements onChange={(e) => setName(e.target.value)} fontSize="15px" minwidth="345px" minheight="50px" placeholder="name" className="inputs" />
            <div id="bio">
                <textarea id="area" placeholder="bio"
                    maxLength="150"
                    onChange={(e) => setBio(e.target.value), handleWordCount}
                ></textarea>
                <div id="measure">{count}/150</div>
            </div>
            <Button onClick={() => submit, updateInfo} text="Update" maxheight="50px" minwidth="345px" bgcolor="#DCD8F1" radius="40px" border="none" />
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