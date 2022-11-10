import React from 'react'
import * as ReactBoostrap from 'react-bootstrap'
import { useState, useEffect } from 'react';
import axios from 'axios'
import url from '../../GetAPI/getUrl'

function ContainerInfo() {
  const [loading, setLoading] = useState(false)
  const [data, getData] = useState([])
  useEffect(() => {
    const Account = async () => {
      await axios.get(url.ip + url.getAbout)
        .then(function (response) {
          getData(response.data)
          setLoading(true)
        })
    }
    Account()
  }, [])

  return (
    <div>
      {loading ? <div className='container border border-5 my-5'>

      <div className='my-3'>
          <img className='d-block mx-auto image' height={150} src={url.ip+'/'+data[0].image} alt={data[0].image} data-aos="flip-left" data-aos-duration="1000"/>
      </div>
      
      <p className='fs-1 fw-bold text-center mt-4'>{data[0].title}</p>
      <div style={{height: "auto"}}  className='container mt-2'>
        <div className='container rounded rounded-3'>
        <p className='p-4 fs-4'>{data[0].description}</p>
        </div>
    </div>
  
    </div> : <ReactBoostrap.Spinner style={{marginTop: 300}} className='loader d-block mx-auto' animation='border'/> }
        
    </div>
  )
}

export default ContainerInfo