import axios from "axios";
import { useEffect, useState } from "react";

const Link = "https://health-manager.onrender.com"

export const GetData = (prop) => {
    const [users, setUsers] = useState([])
    
    useEffect(()=>{
        axios.get(`${Link}${prop}`)
        .then(res => {
            setUsers(res.data)
        })
    }, [])

    return users
}

export const Delete = (id) => {
  axios.delete(`${Link}/users/${id}`)
      .then(res => {
        console.log("User is Deleted!!");

        axios.delete(`${Link}/userDetails/${id}`)
        .then(res =>{
          console.log("User Details is Deleted!!");
        })
      })
}

export const Post = (path, data, fun) => {
  axios.post(`${Link}${path}`, data)
    .then(res=> {
      fun && (fun(res.data.user._id))
      console.log(res.data)
    })
}