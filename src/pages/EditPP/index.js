import { useState, useEffect } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

async function postImage({image, description}) {
  const formData = new FormData();
  formData.append("image", image)
  formData.append("description", description)

  const result = await axios.post('http://localhost:8080/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  return result.data
  const data = await axios.post()
}


function EditPP() {

    const history = useHistory();

  const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([]);
  const [allImages, setAll] = useState([]);

  const submit = async event => {
    event.preventDefault()
    const result = await postImage({image: file, description})
    setImages([result.image, ...images])
    history.push('/EditProfile')
  }

  const fileSelected = event => {
    const file = event.target.files[0]
		setFile(file)
	}

    const getAll = async() => {
        const data = await axios.get('http://localhost:8080/images/:key');
        setAll([data.image, ...images])
    }

    useEffect(() => {
        getAll();
      }, []);

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <button type="submit">Submit</button>
      </form>

      { allImages.map( image => (
        <div key={image}>
          <img src={image}></img>
        </div>
      ))}

      <img src="/images/9fa06d3c5da7aec7f932beb5b3e60f1d"></img>

    </div>
  );
}

export default EditPP;