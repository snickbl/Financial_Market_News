import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='main-header'>
      <div className='header'>
        <Link to={'articles'} className='logo_link'>
          <div className="logo">
              <span className='sharetrade'>SHARETRADE</span>
              <span className='com'>.COM</span>
          </div>
        </Link>
      </div>
    </div>
   
  )
}

export default Header