import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Form from './components/Form'


const App = () => {

const [toggle, setToggle] = useState(false)
const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData"))||[])
const [isupdate, setIsupdate] = useState(false)
 const [form, setForm] = useState({
        name:"",
        email:"",
        imageUrl:""
    })

     useEffect(()=>{
    console.log("userData",userData)
    localStorage.setItem("userData",JSON.stringify(userData))
  },[userData])

console.log("userData",userData)

  return (
    <div style={{position:"relative"}}>
      <Navbar setToggle={setToggle}/>

      {toggle ?  <div style={{position:"absolute" ,width:"100%",top:"0"}}>
      <Form userData={userData} setIsupdate={setIsupdate} isupdate={isupdate} setForm={setForm} form={form} setToggle={setToggle} setUserData={setUserData} userData={userData}/> 
      </div>
      :
      <div style={{marginTop:"10px",display:"flex",gap:"10px"}}>
        {userData.map((val) => (
          <Card setIsupdate={setIsupdate} setForm={setForm} setToggle={setToggle} key={val.id} userData={userData} setUserData={setUserData} user={val}/>
        ))}
      </div>
      
    }
      
     
      
    </div>
  )
}

export default App