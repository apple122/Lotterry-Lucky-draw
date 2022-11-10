import React, {useEffect, useState} from 'react'
import axios from 'axios'
import url from '../../GetAPI/getUrl'

function Index(props) {
    const getId = props.MainID
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
        <h3 className='text-center fw-bold'>ຫົວຂໍ້ {data.title}</h3>
    </div>
  )
}

export default Index