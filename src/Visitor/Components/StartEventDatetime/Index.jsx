import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import url from '../../GetAPI/getUrl'

function Index(props) {
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
            <div className='d-flex align-items-center my-4'>
            <FontAwesomeIcon icon={faClock} color={''} fontSize={40} className="ms-4"/>
            <span className='fw-bold fs-5 ms-3'>ເລີ່ມວັນທີ {`${data.start_date} ຫາ ${data.end_date}`}</span>
            </div>
        </div>
    )
}

export default Index