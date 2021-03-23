import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router';




// async function postImage({image}) {
//   const formData = new FormData();
//   formData.append("image", image)
//   console.log(image)
// //   const result = await axios.post("http://localhost:8080/api/images", formData, { headers: {'Content-Type': 'multipart/form-data'}})
// //   return result.data
// }


function App() {


const [image] = useState(null)

    const EditPicture = async event => {
        event.preventDefault()
        const token = await sessionStorage.getItem("token")
        console.log(token)
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
        } else {
            history.push("/");
        }

        const data = new FormData()
        data.append('image', image)
        const resp = await axios.post('http://localhost:8080/api/images', data
        );
        console.log(resp)

    }


       const CheckToken = async () => {
        //asume we will store the token in the sessionStorage
        const token = await sessionStorage.getItem("token");
        console.log("token", token)
        if(token){
            axios.defaults.headers.common['Authorization'] = token;
        }
        // } else {
        //       history.push('/');
        // }
    }

    useEffect(() => {
        CheckToken();
    }, [])

    const history = useHistory();
  const [file, setFile] = useState()

//   const submit = async event => {
//     event.preventDefault()
//     const result = await postImage({image: file})
//     history.push('/EditProfile')
//   }

  const fileSelected = event => {
    const file = event.target.files[0]
		setFile(file)
	}

  return (
    <div className="App">
      <form onSubmit={EditPicture}>
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
