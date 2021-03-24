// import React, { useState, useEffect } from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import ImgButton from '../../comps/ImgButton';
import Upload from '../../comps/Upload';
import Navigation from '../../comps/Navigation';
import Close from '../../assets/close.png';
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
`;
const Top = styled.div`
    width: 90%;
    min-height: 76px;
    max-height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 21px;
    #center {
        position: absolute;
        left: 35%;
    }
    #post {
        color: #9DCFF6;
    }
`;
const Middle = styled.div`
    width: 414px;
    height: 414px;
    background-color: ${props => props.bgcolor ? props.bgcolor : "#E5E5E5"};
    display: flex;
    justify-content: center;
    align-items: center;
    &>img {
        width: 49px;
        height: 49px;
    }
`;
const Bottom = styled.div`
    height: 318px;

    #area {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 21px;
        resize: none;
        outline: none;
        border: 1px solid;
        border-radius: 10px;
        display: block;
        box-sizing: border-box;
        width: 371px;
        height: 220px;
        padding: 20px;
        background-position: bottom right;
    }
`;


// const Container = styled.div`
//     border: 1px solid black;
//     width: 414px;
//     height: 868px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-between;
//     position: relative;
// `;
// const Top = styled.div`
//     width: 90%;
//     min-height: 76px;
//     max-height: 76px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     font-family: 'Poppins', sans-serif;
//     font-weight: 700;
//     font-size: 21px;
//     #center {
//         position: absolute;
//         left: 35%;
//     }
//     #post {
//         color: #9DCFF6;
//     }
// `;
// const Middle = styled.div`
//     width: 414px;
//     height: 414px;
//     background-color: ${props => props.bgcolor ? props.bgcolor : "#E5E5E5"};
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     &>img {
//         width: 49px;
//         height: 49px;
//     }
// `;
// const Bottom = styled.div`

//     #area {
//         font-family: 'Poppins', sans-serif;
//         font-weight: 400;
//         font-size: 21px;
//         resize: none;
//         outline: none;
//         border: 1px solid;
//         border-radius: 10px;
//         display: block;
//         box-sizing: border-box;
//         width: 371px;
//         height: 220px;
//         padding: 20px;
//         background-position: bottom right;
//     }
// `;

// const AddPost = () => {

//     const history = useHistory();

//     const [upload, setUpload] = useState();
//     const [image, setImage] = useState({ preview: '', raw: '' });
//     const [img, setImg] = useState("");
//     const [caption, setCaption] = useState("");

//     const CreatePost = async event => {
//         event.preventDefault()
//         var token = await sessionStorage.getItem("token")
//         if (token) {
//           axios.defaults.headers.common['Authorization'] = token;
//         } else {
//           history.push("/Login");
//         }
//         const data = new FormData()
//         data.append('image', img)
//         data.append('caption', caption)
//         console.log(img, caption)
//         const resp = await axios.post("http://localhost:8080/api/create_posts", data
//         );
//         console.log("resp", resp.data)
//       }
    


//     const HandleUpload = (e) => {
//         setUpload(true);
//         setImage({
//             preview: URL.createObjectURL(e.target.files[0]),
//             raw: e.target.files[0]
//         })
//         setImg(e.target.files[0])
//     }

//     const clickExit = () => {
//         history.push('/AllPosts')
//     }


//     return <Container>
//         <Top>
//             <ImgButton src={Close} maxwh="27px" maxht="27px" onClick={clickExit} />
//             <h3 id="center">NEW POST</h3>
//             {upload ? <h3 onClick={CreatePost} id="post">POST</h3> : <h3></h3>}
//         </Top>
//         <Middle>
//             {upload ? <Upload onChange={HandleUpload} url={image.preview} display={"none"} /> : <Upload onChange={HandleUpload} url={image.preview} />}
//         </Middle>
//         <Bottom>
//             <textarea onChange={(e)=>setCaption(e.target.value)}  id="area" placeholder="caption here..."
//                 maxLength="150"
//             ></textarea>
//         </Bottom>
//         <Navigation minwidth="400px" />
//     </Container>
// }

// export default AddPost;


async function postImage({ image, description, user_id}) {
  const formData = new FormData();

  formData.append("image", image)
  formData.append("description", description)
  formData.append("user_id", user_id)

  const result = await axios.post('http://localhost:8080/images', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
  console.log(result)
  return result.data
}


function AddPost() {

    const CheckToken = async () => {
        //asume we will store the token in the sessionStorage
        const token = await sessionStorage.getItem("token");
        console.log("token", token)

        function parseJwt(token) {
        if (!token) { return; }
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
        CheckToken();
    }, [])

  
    

   const [user_id, setUI] = useState()
  const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([])

  const submit = async event => {
    event.preventDefault()
    const result = await postImage({ image: file, description, user_id })
    setImages([result.image, ...images])
  }

  const fileSelected = event => {
    const file = event.target.files[0]
    setFile(file)
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <input value={description} onChange={e => setDescription(e.target.value)} type="text"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPost;
