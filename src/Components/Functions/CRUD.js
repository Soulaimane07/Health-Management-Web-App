import axios from "axios";
import { useEffect, useState } from "react";

export const ServerLink = "https://health-manager.onrender.com"

export const GetData = (prop) => {
    const [users, setUsers] = useState([])
    
    useEffect(()=>{
        axios.get(`${ServerLink}${prop}`)
        .then(res => {
            setUsers(res.data)
        })
    }, [])

    return users
}

export const Delete = (id) => {
  axios.delete(`${ServerLink}/users/${id}`)
      .then(res => {
        console.log("User is Deleted!!");

        axios.delete(`${ServerLink}/userDetails/${id}`)
        .then(res =>{
          console.log("User Details is Deleted!!");
        })
      })
}

export const Post = (path, data, fun) => {
  axios.post(`${ServerLink}${path}`, data, {headers: {'Content-Type':'multipart/form-data' }})
    .then(res=> {
      fun && (fun(res.data.user._id))
      console.log(res.data)
    })
}