import React from 'react'
import {Link} from 'react-router-dom'
import '../../../../Assets/sass/ButtonViewDetail.scss'

function ButtonViewDetail() {
    return (
        <div>
            <div className='pt-5'>
                <Link to="/TableWinnerDetail" className='text-decoration-none'><button className='effect fs-2 fw-bold d-block mx-auto p-3 mx-5 rounded rounded-2 border border-0'>ເບິ່ງລາຍລະອຽດ</button></Link>
            </div>
        </div>
    )
}

export default ButtonViewDetail