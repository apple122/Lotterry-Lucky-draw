import React, {useState, useEffect} from 'react'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import url from '../../GetAPI/getUrl'


function Contact(props) {
    const getId = props.ContactID
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
            <div className='d-flex align-items-center my-4'>
            <FontAwesomeIcon className='ms-4' icon={faPhone} color={"aqua"} fontSize={40}/>
            <span className='fw-bold fs-5 ms-2'>ຕິດຕໍ່ສອບຖາມໃດ້ທີ່ເບີໂທ {data.phone}</span>
            </div>

            {/* <div className='my-3 border border-2 align-items-center fs-4 text-center align-middle p-3'>
            ຕິດຕໍ່ສະຫມັກວຽກ Call: +856 20 550 932 05
            </div> */}
            
        </div>
    )
}

export default Contact