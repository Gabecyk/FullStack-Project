import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

function Post() {

  let { id } = useParams()
  const [postObject, setPostObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
        console.log(response);
    });
    
  });

  return (
    <div>
      <div>{id}</div>
      
    </div>
  )
}

export default Post