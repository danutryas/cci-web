import React from 'react'
import cciLogo from '../Assets/Image/cci-logo.png'
import './styles/homepage.scss'

const Homepage = () => {
  return (
    <div className="homepage-wrapper">
      <div className="homepage" id="home">
          <div className="home-info">
            <h1>Central Computer Improvment </h1>
            <p>Unit Kegiatan Mahasiswa di Telkom University yang berfokus pada bidang ICT (Information, Communication and Technology).</p>
          </div>
          <div className="home-logo">
            <img src={cciLogo} alt="cci-logo" />
          </div>
      </div>
    </div>
  )
}

export default Homepage