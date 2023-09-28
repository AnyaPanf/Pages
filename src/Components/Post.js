import React from 'react'

export const Post = ({ id, title, description }) => {
  return (
    <div className='posts__post'>
      <div className='posts__number'><p>{id}</p></div>
      <div className='posts__info'>
        <h3 className='posts__subtitle'>{title}</h3>
        <p className='posts__text'>{description}</p>
      </div>
    </div>
  )
}
