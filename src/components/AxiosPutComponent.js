import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl='https://jsonplaceholder.typicode.com/posts'

function AxiosPutComponent() {
  const [post,setPost]=useState(null)

  useEffect(()=>{
    axios.get(baseUrl + '/1').then((res)=>{
      setPost(res.data)
    })
  },[])
  function updateData(){
    axios.put(baseUrl + '/1',{
      title:'suchit patel',
      body:'welcome to unacedmy'
    }).then((res)=>{
      setPost(res.data)
    })
  }
  return (
    <div>
      <h5>{post && post.title}</h5>
      <p>{post && post.body}</p>
      <button onClick={updateData}>Update data</button>
    </div>
  )
}

export default AxiosPutComponent

