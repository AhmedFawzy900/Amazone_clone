
import React from 'react'
import './Oneimage.css'
import {Link} from 'react-router-dom'
function Oneimage({image,title,path}) {
  return (
    <div className='oneimage'>
        <h2 className="title">{title}</h2>
        <img className='image' src={image} alt=""/>
        <Link to={path}>Shop now</Link>
    </div>
  )
}

export default Oneimage