import React, { useEffect, useState } from 'react'

const UserInformation = () => {
  const [load,setLoad]=useState(false)
  
  const [data,setData]=useState()
  useEffect(()=>{
    setLoad(true)
    fetch("http://localhost:8000/api/v1/user/data/allUsers")
    .then(res=>res.json())
    .then(resData=>{
      setLoad(false)
      setData(resData)
    })
  },[])
  if(!data){
    return <h1>no user</h1>
  }
  return (
    <>
    {load==true && <h1>Loading</h1>}
    {load==false && <div>
      <h1>ALL USERS</h1>
  <div className='flex'>
    {data.map((element)=>{
      return <div class="container" key={element._id}>
 <div class="wrapper">
  <img src={element.image}  alt='error'/>
   <h1>{element.name} {element.last_name} </h1>
  </div>
  <div class="button-wrapper"> 
  <button class="btn outline">{element.email}</button>
    <button class="btn fill">{element.phone}</button>
  </div>
  <div className='edit-btn'>
    
  </div>
    </div> 
    })}
    </div>
      </div>}
    
    </>
  )
}

export default UserInformation