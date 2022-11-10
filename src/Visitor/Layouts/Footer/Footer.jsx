import {useLocation} from 'react-router-dom'
import React from 'react';
import FooterComponent from '../../Components/Footer/FooterComponent';

function Footer() {
  const location = useLocation();
  const splitLocation = location.pathname
  return (
   <div className={splitLocation == '/Login' ? 'footerHide' : 'footerShow'}>
      <FooterComponent/>
   </div>
  )
}

export default Footer