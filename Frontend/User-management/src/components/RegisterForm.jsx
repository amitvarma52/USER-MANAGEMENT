/** @format */

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataWithImage = new FormData();
    formDataWithImage.append("name", formData.name);
    formDataWithImage.append("last_name", formData.last_name);
    formDataWithImage.append("email", formData.email);
    formDataWithImage.append("phone", formData.phone);
    formDataWithImage.append("password", formData.password);

    if (image) {
      formDataWithImage.append("image", image);
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/Register/NewUser",
        formDataWithImage,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setFormData({
        name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
      });
      setImage(null); // Clear the image state after successful submit
      setMessage("User registered successfully!");
      // navigate('/allUser')
    } catch (error) {
      console.error("Failed to register user", error);
      setMessage("Failed to register user");
    }
  };

  return (
    <>
      <div className="container">
        <h2>Register</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-data">
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-data">
            <label>Lastname</label>
            <input
              name="last_name"
              type="text"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-data">
            <label>Email</label>
            <input
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-data">
            <label>Phone</label>
            <input
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-data">
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-data">
            <label>Profile Image</label>
            <input
              name="image"
              type="file"
              onChange={handleImageChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
