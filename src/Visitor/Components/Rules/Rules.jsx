import React, { useEffect, useState } from 'react'
import url from '../../GetAPI/getUrl'
import axios from 'axios'
import {FaStar} from "react-icons/fa"
import Icon from '../../Assets/icon/wheel.png'

function Rules(props) {
    const getId = props.DatetimeID
    const [data, setData] = useState([])

    useEffect(() => {
        const getEventAPI = async () => {
            await axios.get(url.ip + url.postEvent + getId)
                .then((response) => {
                    setData(response.data)
                }).catch((error) => {
                    console.log(error.response)
                })
        }
        getEventAPI()
    }, [])
    return (
        <div>
            <div className='d-flex align-items-center mb-3'>
            <FaStar className='ms-3' color="gold"/><span className='fw-bold fs-5 ms-2'>ກະຕິກາການລຸ້ນໂຊກ</span>
            </div>
            
            <p className='ms-2 fs-5'>1. ຊື້ຫວຍ 20,000 ກີບຂື້ນໄປ</p>
            <p className='ms-2 fs-5'>2. ຂຽນລາຍລະອຽດໃຫ້ຄົບຖ້ວນດັ່ງລຸ່ມນີ້:</p>
            <ul className='ms-2'>
                <li className='fs-5'>ຊື່ ແລະ ນາມສະກຸນ</li>
                <li className='fs-5'>ເບີໂທ</li>
                <li className='fs-5'>ບ້ານ, ເມືອງ, ແຂວງ</li>
                <li className='fs-5'>ເລກໃບບິນ</li>
                <li className='fs-5'>ລາຄາລວມຂອງບິນຫວຍທີ່ຊື້</li>
            </ul>
            <p className='ms-2 fs-5'>3. ຖ່າຍຣູບບິນ ແລ້ວສົ່ງມາທີ່ Whatsapp ທາງບໍລິສັດ 020 77 537 777</p>
            
            <div className='d-flex align-items-center my-4'>
                <img className='ms-3' width={50} src={Icon} alt="" />
                <span className='fw-bold fs-5 ms-2'>ເລີ່ມສຸ່ມວັນທີ {data.end_date} ເວລາ {data.time}</span>
            </div>
            
        </div>
    )
}

export default Rules