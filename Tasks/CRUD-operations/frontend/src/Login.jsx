import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
const Login = () =>{

   const Fun = async() =>{
    const result = await axios.get(`http://localhost:9000/get-data/${1}`)
    console.log(result.data)

   }
   const Fun2 = async() =>{
    const result = await axios.post(`http://localhost:9000/get-data`,{
        "id":3,
        "username":"Girish",
        "password":"4466"
    })
    console.log(result.data)

   }
    return(
        <>
            <button onClick={Fun}>Call API</button>
            <button onClick={Fun2}>Get Data</button>
        </>
    )
}

export default Login;