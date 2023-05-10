import axios from "axios";
import { useEffect, useState } from "react";

export const ServerLink = "https://health-management.up.railway.app"

export const GetData = (link) => {
    const [users, setUsers] = useState([])
    
    useEffect(()=>{
        axios.get(`${ServerLink}${link}`)
        .then(res => {
            setUsers(res.data)
        })
        .catch(err => {
          console.log("##> ",err.message);
        })
    }, [])

    return users
}

export const DeleteUser = (id) => {
  axios.delete(`${ServerLink}/users/${id}`)
      .then(res => {
        console.log("==> Succeded: ", res);

        axios.delete(`${ServerLink}/userDetails/${id}`)
        .then(res =>{
          console.log("==> Succeded: ", res);
        })
        .catch(error => {
          console.log("## Error: ", error);
        })
      })
      .catch(error => {
        console.log("## Error: ", error);
      })
}

export const Delete = (link, id, fun) => {
  axios.delete(`${ServerLink}${link}${id}`)
      .then(res => {
        console.log("==> Succeded: ", res);
        fun()
      })
      .catch(error => {
        console.log("## Error: ", error);
      })
}

export const Post = (path, data, fun) => {
  axios.post(`${ServerLink}${path}`, data, {headers: {'Content-Type':'multipart/form-data' }})
    .then(res=> {
      console.log("==> Succeded: ",res.data)
      fun(res.data?.user?._id)
    })
    .catch(error => {
      console.log("## Error: ", error.response);
    })
}