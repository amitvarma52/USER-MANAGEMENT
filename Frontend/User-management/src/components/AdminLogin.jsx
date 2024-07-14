/** @format */

import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../Redux-toolkit/Store";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const adminName = useRef();
  const adminPass = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userActions.login({
        adminName: adminName.current.value,
        adminPass: adminPass.current.value,
      })
    );
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
              type="password"
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
