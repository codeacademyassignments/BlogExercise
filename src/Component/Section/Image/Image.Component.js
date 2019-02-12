import React from 'react';
import '../../index.css';


const Image = (props)=>{
  const image = require(`../../../Images/${props.imageUrl}`);
  return (
  <div className='img' style={{backgroundImage:`url(${image})`}}></div>
)};

export default Image;