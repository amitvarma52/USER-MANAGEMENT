/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserInformation = () => {
  const {userData}= useSelector(state => state.users);
  console.log(userData);
  // const [load, setLoad] = useState(false);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setLoad(true);
  //   axios.get("http://localhost:8000/api/v1/user/data/allUsers")
  //     .then(response => {
  //       setLoad(false);
  //       setData(response.data);
  //       console.log(response.data); // Log the fetched data for debugging
  //     })
  //     .catch(error => {
  //       console.error("Error fetching data:", error);
  //       setLoad(false);
  //     });
  // }, []);

  // if (load) {
  //   return <h1>Loading...</h1>;
  // }

  // if (!data || data.length === 0) {
  //   return <h1>No users found</h1>;
  // }

  return (
    <>
      <h1>ALL USERS</h1>
      {/* <div className="flex">
        {data.map((element) => (
          <div className="container" key={element._id}>
            <div className="wrapper">
              {element.image ? (
                <img
                  src={element.image}
                  alt={`${element.name} ${element.last_name}`}
                />
              ) : (
                <div>No Image Available</div>
              )}
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
      </div> */}
    </>
  );
};

export default UserInformation;
