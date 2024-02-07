import React ,{useState,useEffect} from 'react'
import Axios from 'axios';
export default function Users() {

  //session
Axios.defaults.withCredentials = true
useEffect(()=>{
  Axios.get("http://localhost:4001/login").then((response)=>{
    console.log(response);
    if(response.data.logged ){
    setmessage(response.data.user[0].NAME);}})
  
},[])

//
    //register
    const[regUser,setReguser]= useState()
    const[regPass,setRegpass]= useState("")
    const registerFun = () =>{
        Axios.post("http://localhost:4001/register",{
            username : regUser,
            password : regPass
        }).then((response) => {
          console.log(response);
        });
    }
        //login
        const[user,setuser]= useState("")
    const[pass,setpass]= useState("")
    const loginFun = () =>{
        Axios.post("http://localhost:4001/login",{
            username : user,
            password : pass
        }).then((response) => {
           if(response.data.message){
                setmessage(response.data.message);
           }
           else{
            setmessage(response.data[0].NAME);
           }
        });
    }
    const[message,setmessage]= useState("...");
  return (
    <>
      <div id="register">
        <h2>Register</h2>
        NAME :{" "}
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setReguser(e.target.value);
          }}
        />{" "}
        <br />
        PASSWORD :{" "}
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setRegpass(e.target.value);
          }}
        />{" "}
        <br />
        <button onClick={registerFun}>Register as a new user</button>
      </div>
      <div id="login">
        <h2>Login</h2>
        NAME :{" "}
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setuser(e.target.value);
          }}
        />{" "}
        <br />
        PASSWORD :{" "}
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setpass(e.target.value);
          }}
        />{" "}
        <br />
        <button onClick={loginFun}>Login</button>
      </div>
      <h3>Status : {message} </h3>
    </>
  );
}
