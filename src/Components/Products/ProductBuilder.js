import React from 'react'

const ProductBuilder = ({name,imgSrc,desc}) => {
  return (
    <div className='product'>
        <img src={imgSrc} alt={name} />
        <h3>{name}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default ProductBuilder