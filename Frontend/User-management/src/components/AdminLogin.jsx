/** @format */

import React, { useContext, useRef } from "react";
import { context } from "../Store/Store";

const AdminLogin = () => {
  const {handleLogin}=useContext(context)
  const adminName = useRef();
  const adminPass = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(adminName.current.value,adminPass.current.value,)
    adminName.current.value='';
    adminPass.current.value='';
  };
  return (
    <>
      <div className="container">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-data">
            <label>email</label>
            <input
              name="name"
              type="text"
              onChange={(e) => adminName.current.value}
              ref={adminName}
              required
            />
          </div>
          <div className="form-data">
            <label>password</label>
            <input
              name="last_name"
              type="text"
              onChange={(e) => adminPass.current.value}
              ref={adminPass}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
