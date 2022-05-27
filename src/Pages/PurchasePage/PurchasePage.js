import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const PurchasePage = () => {
    const {id} = useParams();
    
    const [tool, setTool] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/tool/${id}`)
        .then(res => res.json())
        .then(data => setTool(data))
    },[id])
  return (
    <div>PurchasePage</div>
  )
}

export default PurchasePage;