import React, { useEffect, useState } from 'react';
import axios from 'axios';


const baseUrl='https://jsonplaceholder.typicode.com/posts'

function AxiosGetComponent() {

  const [post,setpost]=useState(null)

  useEffect(()=>{
    axios.get(baseUrl+ "/1").then((res)=>{
      setpost(res.data)
    })
  },[])

  return (
    <div>
      <h5>{post && post.title}</h5>
      <p>{post && post.body}</p>
    </div>
  )
}

export default AxiosGetComponent
