import React from "react"
import url from '../../GetAPI/getUrl'
import axios from 'axios'
import { useState, useEffect } from 'react'

function ImageEvent(props) {
  const getId = props.imageID
    const [data, setData] = useState([]);
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
        <img style={{maxWidth: 750, height: 775}} className='mt-5 mb-4 img d-block mx-auto' src={`${url.ip}/${data.image}`} alt={data.image}/>
    </div>
  )
}

export default ImageEvent