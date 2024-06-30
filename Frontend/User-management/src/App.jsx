import { useState } from 'react'
import './App.css'
import RegisterForm from './components/RegisterForm'
import UserInformation from './components/UserInformation'
import ShowBtn from './components/ShowBtn'

function App() {
  const [showInfo,setShowInfo]=useState(true)
  return (
    <>
    <ShowBtn showInfo={showInfo} setShowInfo={setShowInfo}/>
    {showInfo==true ?<UserInformation setShowInfo={setShowInfo}/>:<RegisterForm setShowInfo={setShowInfo}/>}
    </>
  )
}

export default App
