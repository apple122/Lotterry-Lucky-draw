import React, {useEffect, useState} from 'react'
import axios from 'axios'
import url from '../../GetAPI/getUrl'

function Index(props) {
    const getId = props.SubID
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
        <h4 className='text-center'>{data.sub_title}</h4>
    </div>
  )
}

export default Index