import React, { useEffect } from "react";
import {toast} from 'react-toastify'
import {nanoid} from 'nanoid'

const Form = ({form,userData,setIsupdate,isupdate,setForm,setToggle,setUserData}) => {

    console.log("form",form)


  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f5",
    flexDirection:"column",
    gap:"10px"
  };

  const formStyle = {
    width: "350px",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "8px",
    marginBottom: "18px",
    border: "1px solid #d4d4d8",
    borderRadius: "8px",
    fontSize: "15px",
    boxSizing: "border-box",
    outline: "none",
  };

  const labelStyle = {
    fontSize: "14px",
    fontWeight: "600",
    color: "#27272a",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "5px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#18181b",
    color: "white",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  };


  let handleChnage = (e) =>{
    let {name,value} = e.target;
    setForm({...form,[name]:value})
  }

  let handleSubmit = (e) => {
    e.preventDefault()

    const user = {
        ...form,
        id:nanoid()
    }

    if(isupdate){
        const updateUser = userData.find((val) => val.id === form.id)

        setUserData((prev) => 
        prev.map((val) => val.id == updateUser.id ? form : val)
        )
        console.log(updateUser)
        setIsupdate(false)
    }else{
        setUserData([...userData,user])
        setIsupdate(false)
    }
    
    setForm({
        name:"",
        email:"",
        imageUrl:""
    })

    toast.success("user create successfully")

    setToggle(false)
  }


 

  return (
    <div style={containerStyle}>
        <div style={{display:"flex", justifyContent:"space-between" , width:"350px"}}>
            <div></div>
            <div onClick={() => setToggle(false)} style={{backgroundColor:"black",padding:"5px 10px" , color:'white', borderRadius:"20px"}}>close</div>
        </div>
      <form 
      onSubmit={handleSubmit}
      style={formStyle}>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#18181b",
          }}
        >
          Create Account
        </h1>

        {/* Name */}
        <label style={labelStyle}>Name</label>
        <input
        onChange={handleChnage}
        name="name"
        value={form.name}
          type="text"
          placeholder="Enter your name"
          style={inputStyle}
        />

        {/* Email */}
        <label style={labelStyle}>Email</label>
        <input
        onChange={handleChnage}
        name="email"
        value={form.email}
          type="email"
          placeholder="Enter your email"
          style={inputStyle}
        />

        {/* image url */}
        <label style={labelStyle}>Password</label>
        <input
        onChange={handleChnage}
        name="imageUrl"
        value={form.imageUrl}
          type="url"
          placeholder="Enter your Url"
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          create
        </button>
      </form>
    </div>
  );
};

export default Form;