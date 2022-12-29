import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl='https://jsonplaceholder.typicode.com/posts'

function AxiosPostComponent() {
    const [post,setPost]=useState(null)

    useEffect(()=>{
        axios.post(baseUrl,{
            title:'sk',
            body:'welcome'
        }).then((res)=>{
            setPost(res.data)
        })
    },[])
  return (
    <div>
      <h5>{post && post.title}</h5>
      <h5>{post && post.id}</h5>
      <p>{post && post.body}</p>
    </div>
  )
}

export default AxiosPostComponent

