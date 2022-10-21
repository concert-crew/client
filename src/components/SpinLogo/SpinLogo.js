import React from 'react'
import { Link } from "react-router-dom";
import pinkLogo from '../../images/logos/cc-favicon-pink.svg'
import './SpinLogo.css'

const SpinLogo = () => {
  return (
    <div> 
      <Link to="/">
        <img className='pinkLogo'  src={pinkLogo} alt='pink logo'/>
      </Link>
  </div>
  )
}

export default SpinLogo