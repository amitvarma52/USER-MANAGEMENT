import React, { useState } from 'react'
import axios from 'axios'
const RegisterForm = () => {
    const [formData,setFormData]=useState({
        name:"",
        last_name:"",
        email:"",
        phone:"",
        password:""
    })
    const [image,setImage]=useState(null)
    const [message,setMessage]=useState("")
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    

    const handleImageChange=(e)=>{
        setImage(e.target.files[0])
    }
    const handleSubmit= async(e)=>{
        e.preventDefault()
        const formDataWithImage= new FormData()
        formDataWithImage.append("name",formData.name)
        formDataWithImage.append("last_name",formData.last_name)
        formDataWithImage.append("email",formData.email)
        formDataWithImage.append("phone",formData.phone)
        formDataWithImage.append("password",formData.password)
    if (image) {
      formDataWithImage.append("image", image);
    }
        try {
            const response= await axios.post("http://localhost:8000/api/v1/user/Register/NewUser",formDataWithImage,{
                headers:{"content-Type":"multipart/form-data"}
            })
            console.log(response.data)
            setFormData({
                name:"",
                last_name:"",
                email:"",
                phone:"",
                password:""
            })    
            setImage(null)       
            setMessage("User registered successfully!") 
        } catch (error) {
            setMessage("failed to register user")
        }
    }
    
  return (
    <>
    <h1>Register</h1>
    <div className='container' onSubmit={handleSubmit}>
        <h2>Register</h2>
        {message &&<p>message</p>}
        <form >
            <div className='form-container'> 
                <label >Name</label>
                <input name='name' type='text' value={formData.name} onChange={handleChange} required></input>
            </div>
            <div className='form-data'> 
                <label htmlFor="">Lastname</label>
                <input name='last_name' type='text' value={formData.last_name} onChange={handleChange} required></input>
            </div>
            <div className='form-data'> 
                <label htmlFor="">Email</label>
                <input name='email' type='text' value={formData.email} onChange={handleChange} required></input>
            </div>
            <div className='form-data'> 
                <label htmlFor="">Phone</label>
                <input name='phone' type='text' value={formData.phone} onChange={handleChange} required></input>
            </div>
            <div className='form-data'> 
                <label htmlFor="">Password</label>
                <input name='password' type='text' value={formData.password} onChange={handleChange} required></input>
            </div>
            <div className='form-data'> 
                <label htmlFor="">Profile Image</label>
                <input name='image' type='file' onChange={handleImageChange} required></input>
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
    </>
  )
}
export default RegisterForm