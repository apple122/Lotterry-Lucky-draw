import React, {useContext} from 'react'
import '../../Assets/sass/navbar.scss'
import {Link, useLocation} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DarkMode from './elements/DarkMode';
import { ThemeContext } from '../../Context/ThemeContext';
import TopBox from './elements/TopBox';
import LogoCompany from './elements/LogoCompany';
import NavLinks from './elements/NavLinks';
import LoginAndLogoutButton from './elements/LoginAndLogoutButton';

function Navbarr() {
  const location = useLocation();
  const splitLocation = location.pathname
  const [{theme}] = useContext(ThemeContext);
  const token = localStorage.getItem('token')
  const CheckToken = localStorage.getItem('CheckToken')
  if(splitLocation != '/Random') {
    localStorage.removeItem('PrizeID')
    localStorage.removeItem('Save')
  }

  // window.onbeforeunload = () => {
  //   if(token && CheckToken) {
  //     localStorage.removeItem('token')
  //     localStorage.removeItem('CheckToken')
  //   }
  // }

  return (
    <div>
          <div className={`bg-primary align-items-center ${splitLocation == '/Login' ? 'navhide' : 'navshow'}`}>

            <TopBox/>
            
            <Navbar style={{backgroundColor: theme.backgroundColor, color: theme.color}} className='position-relative py-3' expand="lg">
            <Navbar.Brand className='logoTop'><Link to='/luckydraw'>

              <LogoCompany/>
              
              </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse className='justify-content-between' id="">
          <Nav>
          </Nav>

         <NavLinks/>

          <Nav>

            <DarkMode/>
          
            <LoginAndLogoutButton/>

          </Nav>
        </Navbar.Collapse>
    </Navbar>
          </div>             
    </div>
  )
}

export default Navbarr