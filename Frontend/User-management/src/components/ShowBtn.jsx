import React from 'react'

const ShowBtn = ({showInfo,setShowInfo}) => {
    const handleClick=()=>{
        setShowInfo(!showInfo)
    }
  return (
    <div className='show-btn'>
        <button class="show" onClick={handleClick} >Register</button>
        <button class="show" onClick={handleClick}>All User</button>
    </div>
  )
}

export default ShowBtn