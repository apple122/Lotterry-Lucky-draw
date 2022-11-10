import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Link} from 'react-router-dom'
import Card from './elements/Card';

function LuckyNameAtHomePage() {
  AOS.init()

  return (
    <div className='my-5 boxsize'>
      <div className='shadow-sm w-100 d-block mx-auto backgroundLuckyName position-absolute'>
        
      <div className='position-absolute text-center p-2 fs-1 backgroundLucky text-white fw-bold shadow'>
          ຜູ້ໂຊກດີ
        </div>

        <Link to="/Winner" className='pt-3 float-end pe-3 viewAll text-muted fw-bold'><p>ເບິ່ງຂໍ້ມູນທັງຫມົດ</p></Link>

        <Card />
      </div>
    </div>
  )
}

export default LuckyNameAtHomePage