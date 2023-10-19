import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Constants() {
    const [dbData,setdbData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/data").then((response) => {
            
        setdbData(response.data);});
      },[]);
  return (
    <div>
      
    </div>
  )
}

export default Constants
