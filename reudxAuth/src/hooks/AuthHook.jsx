import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice/authSlice";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  //    All state
  const [registerUsers, setRegisterUsers] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const registerFrom = (data) => {
    let user = JSON.parse(localStorage.getItem("registerUser"));

    if (user) {
      let isUserExist = registerUsers.find((users) => {
        return users.email === user.email;
      });

      if (!isUserExist) {
        toast.error("user already register");
        return;
      }
    }

    let arr = [...registerUsers, data];
    setRegisterUsers(arr);
    localStorage.setItem("registerUser", JSON.stringify(arr));
    toast.success("user register successfully");
    navigate("/");
  };

  const loginFrom = (data) => {
    let user = JSON.parse(localStorage.getItem("registerUser"));

    if (!user) {
      toast.error("register user first before login")
      return
    }

    let isUserExist = user.find((singleUSer) => {
        return singleUSer.email === data.email && singleUSer.password === data.password
    })

    if(isUserExist){
        dispatch(addUser(isUserExist))
        localStorage.setItem('logedUser',JSON.stringify(isUserExist))
        toast.success('user logged in successfully')
        navigate('/main')
        reset()
    }
    
  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    registerFrom,
    loginFrom,
  };
};
