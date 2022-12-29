import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl='https://jsonplaceholder.typicode.com/posts';

function AxiosDeleteComponent() {

const [post,setPost]=useState(null);
useEffect(()=>{
    axios.get(baseUrl + '/2').then((res)=>{
        setPost(res.data)
    })
},[])

function deleteData(){
axios.delete(baseUrl + '/2').then(()=>{
    setPost(null)
    alert("deleted")
})
}

  return (
    <div>
      <h5>{post && post.title}</h5>
      <p>{post && post.body}</p>
      <button onClick={deleteData}>Delete data</button>
    </div>
  )
}

export default AxiosDeleteComponent
