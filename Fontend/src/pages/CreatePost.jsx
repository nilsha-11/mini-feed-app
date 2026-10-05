import React from 'react'
import '../index.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreatePost = () => {

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
    
        const formdata = new FormData(e.target)
        await axios.post("http://localhost:3000/create-post" ,formdata)
        .then((res) =>{
         alert("Post created sucessfully")
         e.target.reset()
         navigate("/Feed")
        })
        .catch((err) => {
            alert("error in createting post")
        })
    }
  return (
    <div className='createpost-class'>
        <h1> Create Post</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name='image' accept='image/*' />
            <input type="text" name='caption' required placeholder='Enter Caption' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CreatePost