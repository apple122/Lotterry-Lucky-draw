import React, { useEffect } from 'react'
import url from '../../GetAPI/getUrl'
import axios from 'axios'
import { useState } from 'react'

function Description(props) {
    const getId = props.DesID
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
            <p className='px-2 fs-5'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {data.description}
            </p>
        </div>
    )
}

export default Description