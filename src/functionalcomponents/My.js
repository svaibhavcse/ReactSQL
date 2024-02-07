import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
 import "../App.css";
export default function My() {
    const [name, setName] = useState("");
    const [roll,setRoll] = useState(0);
    const [details,setDetails] = useState([]);
    const [ upname,setupdatedName] = useState("")
    const submit =()=>{
      Axios.post("http://localhost:4000/create",{
      roll:roll,
      name:name}).then(()=>{console.log("sent req")});
    }
    const getDetails = ()=>{
      Axios.get("http://localhost:4000/details").then((res)=>{
    setDetails(res.data);
    });}
    const deleteRecord = (rollno) => {
      Axios.delete(`http://localhost:4000/delete/${rollno}`).then(() => {
        console.log("delete req sent");
      });
    };
     const updateRecord=(rollno)=>{
      Axios.put("http://localhost:4000/update",{rollno:rollno,name:upname});
     }
  return (
    <div className="divo">
      Roll Number : &ensp;
      <input
        type="number"
        onChange={(event) => {
          setRoll(event.target.value);
        }}
      ></input>
      <br /> Name : &ensp;
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <br />
      <button onClick={submit}>SUBMIT</button> <br />
      <button onClick={getDetails}>Display</button>
      <br />
      {details.map((val,key)=>{
return (
  <div className="detailsContainer">
    <p>
      ROLL NO : {val.roll}
    </p>
    <p>
      NAME : {val.name}
    </p>
    <button onClick={()=>{deleteRecord(val.roll)}}>Delete</button>
    <input type="text" onChange={(event)=>{setupdatedName(event.target.value)}}></input> 
    <button onClick={()=>{updateRecord(val.roll)}}>Update</button>
  </div>
)})}

    </div>
  );
}