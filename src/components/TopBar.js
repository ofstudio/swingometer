import React from 'react'
import '../styles/TopBar.sass'
import appLogo from '../images/logo-swingometer.svg'
import lifeLogo from '../images/logo-wcslife.svg'

export default function TopBar() {
  return (
    <div className='TopBar'>
      <div className="appLogo">
        <img src={appLogo} alt="Swing-o-meter"/>
      </div>
      <div className="lifeLogo">
        <a href="https://wcs.life" target="_blank" rel="noopener noreferrer">
          <img src={lifeLogo} alt="WCS! Life"/>
        </a>
      </div>
    </div>
  )
}
