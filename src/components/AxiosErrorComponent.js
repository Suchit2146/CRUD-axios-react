import React, { useEffect, useState } from 'react';
import axios from 'axios';


const baseUrl='https://jsonplaceholder.typicode.com/posts'

function AxiosErrorComponent() {

    const [post,SetPost]=useState(null)
    const [error,setError]=useState(null)

    useEffect(()=>{
        axios.get(baseUrl).then((res)=>{
            SetPost(res.data)
        }).catch((err)=>{
            setError(err)
        })
    },[])
  return (
    <div>
      <h5>{error && error.message}</h5>
      <h5>{post && post[1].title}</h5>
      <p>{post && post[1].body}</p>
    </div>
  )
}

export default AxiosErrorComponent
