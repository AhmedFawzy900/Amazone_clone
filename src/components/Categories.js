import React from 'react'
import './Categories.css'
import {Link} from 'react-router-dom'
function Categories( {title,image1,image2,image3,image4,desc1,desc2,desc3,desc4}) {
  return (
    <div className="categories">
      <h2>{title}</h2>
      <div className='images'>
        <div className='one'>
          <img src={image1} alt=""/>
          <p>{desc1}</p>
        </div>
        <div className='two'>
          <img src={image2} alt=""/>
          <p>{desc2}</p>
        </div>
        <div className='three'>
          <img src={image3} alt=""/>
          <p>{desc3}</p>
        </div>
        <div className='four'>
          <img src={image4} alt=""/>
          <p>{desc4}</p>
        </div>
      </div>
      <Link to="./Electeric">See more</Link>
    </div>
  )
}

export default Categories
