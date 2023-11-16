import React from 'react';
import "./styles.scss"

export default function CategoryItems({ imageUrl, title }) {
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}
