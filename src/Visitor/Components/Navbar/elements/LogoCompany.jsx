import React from 'react'
import logo from '../../../Assets/icon/SBSLOGO2.png'

function LogoCompany() {
  return (
    <div>
      <img style={{top: 10}} className='position-absolute mb-5 iconLogo' src={logo} alt="" />
    </div>
  )
}

export default LogoCompany