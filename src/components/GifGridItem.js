import React from 'react'
import '../index.css';
import 'animate.css';

export const GifGridItem = ( {id, title, url} ) => {
  return (
    <div className='animate__animated card animate__fadeIn'>
        <img src={url} alt={"img"} />
        <p>{title}</p>
    </div>
  )
}
