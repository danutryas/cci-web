import React from 'react'
import cciLogo from '../Assets/Image/cci-logo2.png';
import './styles/footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={cciLogo} alt="cci-logo" width={"220px"}/>
        <div className="text-info">
            <p className='cci-info'>Unit Kegiatan Mahasiswa di Telkom University yang berfokus pada bidang ICT (Information, Communication and Technology).</p>
            <p className="copyright">© 2022 Central Computer Improvement, All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer