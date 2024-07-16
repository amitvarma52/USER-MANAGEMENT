/** @format */

import React, { useContext, useEffect, useState } from "react";
import { context } from "../Store/Store";

const UserInformation = () => {
  const { obj } = useContext(context);
  useEffect(() => {
    console.log(obj.userData);
  }, [obj]);

  if (!obj.userData || obj.userData.length === 0) {
    return <h1>No users found</h1>;
  }

  return (
    <>
      <h1>ALL USERS</h1>
      <div className="flex">
        {obj.userData.map((element) => (
          <div className="container" key={element._id}>
            <div className="wrapper">
              <img
                src={
                  "http://localhost:8000/api/v1/user/data/allUsers/" +
                  element.image
                }
                alt={`${element.image}`}
              />

              <h2>
                {element.name} {element.last_name}
              </h2>
            </div>
            <div className="button-wrapper">
              <button className="btn outline">{element.email}</button>
              <button className="btn fill">{element.phone}</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserInformation;
