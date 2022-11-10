import React, { useEffect, useState } from 'react'
import '../../Assets/sass/CardActivity.scss'
import CardActivity from './elements/CardActivity'

function EventAtHome() {
  
  return (
    <div>
        <div className='mt-5 w-100 '>
                <p className='fs-1 fw-bold textActivity text-center' >ກິດຈະກຳ</p>
            </div>
        <CardActivity/>
    </div>
  )
}

export default EventAtHome