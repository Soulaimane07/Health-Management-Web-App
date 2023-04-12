import axios from "axios";
import { useEffect, useState } from "react";

export const ServerLink = "https://health-manager.onrender.com"

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
    })

    return users
}

export const Delete = (id) => {
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

export const Post = (path, data, navigateLink) => {

  axios.post(`${ServerLink}${path}`, data, {headers: {'Content-Type':'multipart/form-data' }})
    .then(res=> {
      console.log("==> Succeded: ",res.data)
      navigateLink('/food')
    })
    .catch(error => {
      console.log("## Error: ", error);
    })
}