import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({data,data1}) => {
const [isHovered, setIsHovered] = useState(false)
  return (

<div style={{width:'25%' , position:"relative"}} key={data1} >
<Link to={`/product/${data.id}`}>
{data.isNew && <span style={{position:"absolute",fontSize:"10px",background:"yellow"}}>New Season</span>}
<img style={{height: "169px",width:'100%'}} 
  src={isHovered == data.id ? data.img1 : data.img} alt="" 
  onMouseOver={() => setIsHovered(data.id)}
  onMouseOut={() => setIsHovered(false)}/>
<h4>{data.title}</h4>
<span style={{textDecoration:'line-through'}}>$ {data.oldPrice}</span>
<h5>$ {data.price}</h5>
</Link>
</div>
  )
}

export default Card

