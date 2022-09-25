import React from 'react'
import './styles/division-builder.scss'

const DivisionBuilder = ({divisionName,Logo}) => {
  return (
    <div className='cci-division'>
        <div className="division-logo">
            <Logo />
        </div>
        <div className="division-name">
            <h3>{divisionName}</h3>
        </div>
    </div>
  )
}

export default DivisionBuilder