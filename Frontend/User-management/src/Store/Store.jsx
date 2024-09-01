/** @format */

import React, { useReducer, useRef, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export const context = createContext();

const Store = ({ children }) => {
  const navigate = useNavigate();
  const adminInfo = useRef({});
  const [obj, setObj] = useState({
    showOther: false,
    userData: [],
  });
  const handleLogin = (adminName=adminInfo.adminName, adminPass=adminInfo.adminPass) => {
    console.log(adminName,adminPass)
    fetch("http://localhost:8000/api/v1/user/data/allUsers", {
      method: "POST",
      body: JSON.stringify({
        password: adminPass,
        adminName: adminName,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok == true) {
          return res.json();
        } else {
          console.log(res.statusText);
        }
      })
      .then((data) => {
        let newState = obj;
        newState.userData = data;
        newState.showOther = true;
        adminInfo.current = { adminName, adminPass };
        setObj(newState);
        navigate("/allUser");
      })
      .catch((error) => {
        console.log(adminName, adminPass);
        console.error("Error fetching data:", error);
      });
  };
  return (
    <>
      <context.Provider value={{ obj, setObj,handleLogin,adminInfo }}>
        {children}
      </context.Provider>
    </>
  );
};

export default Store;