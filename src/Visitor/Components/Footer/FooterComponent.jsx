import React from 'react'
import { CDBBox, CDBFooter} from 'cdbreact';
import '../../Assets/sass/Footer.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

function FooterComponent() {
  return (
    <div>
      <CDBFooter className="shadow mt-auto footer text-white">
        <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>

            <CDBBox className="mb-2">
                <p className="h5 mb-4 text-center" style={{ fontWeight: '600' }}>
                  ຕິດຕໍ່
                </p>

                <CDBBox className='text-center' flex="column" display="flex" style={{ padding: '0' }}>
                <a href="https://www.facebook.com/profile.php?id=100076165835544" target="_blank" className='text-decoration-none'><div className='d-flex align-items-center mb-3'>
                    <FontAwesomeIcon color='white' icon={faFacebook} fontSize={35} />
                    <span className='text-white ms-2'>SBS Trade of Service</span>
                  </div></a>
                  <a href="https://wa.me/8562077537777?text=" target="_blank" className='text-decoration-none'><div className='d-flex align-items-center mb-3'>
                    <FontAwesomeIcon color='white' icon={faWhatsapp} fontSize={40} />
                    <span className='text-white ms-2'>+856 20 77 537 777</span>
                  </div></a>
                  <a href="mailto:Heaven11111loan@gmail.com?subject=subject&cc=Heaven11111loan@gmail.com" target="_blank" className='text-decoration-none'><div className='d-flex align-items-center mb-3'>
                    <FontAwesomeIcon color='white' icon={faMailBulk} fontSize={35} />
                    <span className='text-white ms-2'>Heaven11111loan@gmail.com</span>
                  </div></a>

                </CDBBox>
              </CDBBox>
              
            </CDBBox>

            <CDBBox>
              <p className="h5 mb-4 text-center" style={{ fontWeight: '600' }}>
                ເມນູທັງຫມົດ
              </p>

              <CDBBox className='text-center' flex="column" display="flex" style={{ padding: '0',}}>
                <Link className='text-decoration-none text-white itemFooter' to="/luckydraw"><p>ຫນ້າຫລັກ</p></Link>
                <Link className='text-decoration-none text-white itemFooter' to="/Random"><p>ຫນ້າສຸ່ມ</p></Link>
                <Link className='text-decoration-none text-white itemFooter' to="/List"><p>ລາຍຊື່ຜູ້ມີສິດສຸ່ມ</p></Link>
                <Link className='text-decoration-none text-white itemFooter' to="/LuckyList"><p>ຜູ້ໂຊກດີ</p></Link>
                <Link className='text-decoration-none text-white itemFooter' to="/About"><p>ກ່ຽວກັບ</p></Link>
              </CDBBox>
            </CDBBox>

            <CDBBox>
              <p className="h5 mb-4 " style={{ fontWeight: '600' }}>
                ທີ່ຕັ້ງບໍລິສັດ
              </p>

              <CDBBox className='' flex="column" display="flex" style={{ padding: '0' }}>
                <p className='text-white'>Syshai Village</p>
                <p className='text-white'>Sykhodtabong District</p>
              <p className='text-white'>Vientiane Capital</p>

              </CDBBox>
            </CDBBox>


          </CDBBox>

          <hr />
          
          <small className="text-center mt-3">&copy; SBS, {new Date().getFullYear()}. All rights reserved.</small>

        </CDBBox>
      </CDBFooter>
    </div>
  )
}

export default FooterComponent