import React from 'react'
import {webdevIcon,networkIcon,DesignIcon,gamesIcon,dataResearchIcon,mediaIcon} from '../Assets/Icon/divisions'
import DivisionBuilder from './DivisionBuilder'
import './styles/divisions.scss'

const Divisions = () => {
    const divisionsList = [
        {name : "Web Development", urlLogo : webdevIcon},
        {name : "Design", urlLogo : DesignIcon},
        {name : "Data Research", urlLogo : dataResearchIcon},
        {name : "Network", urlLogo : networkIcon},
        {name : "Games and Gadget", urlLogo : gamesIcon},
        {name : "Media Management", urlLogo : mediaIcon},
    ]



  return (
    <div className='divisions' id='divisions'>
        <h2>Our Division</h2>
        <div className="divisions-list">
            {divisionsList.map((division,index) => (
                <DivisionBuilder key={index} divisionName={division.name} Logo={division.urlLogo}/>
            ))}
        </div>
    </div>
  )
}

export default Divisions