import { useState, useEffect } from 'react'
import axios from 'axios'

async function postImage({ image, user_id}) {
  const formData = new FormData();

  formData.append("image", image)
  formData.append("user_id", user_id)

  const result = await axios.post('https://pluto-db.herokuapp.com/api/profile/edit_pp', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
  console.log(result)
  return result.data
}


function EditPP() {

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
  const [images, setImages] = useState([])

  const submit = async event => {
    event.preventDefault()
    const result = await postImage({ image: file, user_id })
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditPP;

