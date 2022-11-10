import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import url from '../../../GetAPI/getUrl'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import LoadingScreen from '../../Loading/LoadingScreen'

function CardActivity() {
  const [data, setData] = useState([])
  const [loading1, setLoading1] = useState(false)
  const [loading2, setLoading2] = useState(false)
  let event = data.sort(function(a, b){
    return b.id-a.id
  })
  let sliceData = event.slice(0, 3)

  useEffect(() => {
    const getEventAPI = async () => {
      const data = await axios.get(url.ip + url.getEvent)
        .then(function (response) {
          let page = response.data.totalPages
          axios.get(url.ip + url.getEvent + '/' + `?page=${page-1}`)
          .then((response) => {
            setData(response.data.lists)
            setLoading1(true)
          })
          
        })
    }
    getEventAPI()

    const getWinnerAPI = async () => {
      const data = await axios.get(url.ip + url.getWinner)
        .then(function (response) {
          setLoading2(true)
        })
    }
    getWinnerAPI()
  }, [])

  return (
    <div>
      <div className='form position-relative ps-3 backgroundEvent'>
      {loading1 && loading2 === true ?
        <div className='row w-100 justify-content-center position-absolute Event' data-aos='fade-left' data-aos-duration="1500">
          {sliceData.map((e, key) =>
            <div key={key} className='cardBox justify-items-center imgZoom'>
             
              <Card className='mt-4 mx-3 shadow'>
                <Link to={`/DetailEvent/${e.id}`}>
                  <img style={{objectFit: "fill"}} height={350} className='shadow-sm w-100' src={`${url.ip}/${e.image}`} alt="" />
                </Link>
                <Card.Body>
                  <FontAwesomeIcon className='pe-2 text-muted' icon={faClock} fontSize={20} /><span className='text-muted'>{`${e.start_date} - ${e.end_date}`}</span>
                  <div className='text-truncate-container mt-2'>
                    <p className='text-center text-black text-muted'>{e.description}</p>
                  </div>
                </Card.Body>
                <Link to={`/DetailEvent/${e.id}`}><Button className='mb-3 d-block mx-auto fs-5 btn'>ເບິ່ງລາຍລະອຽດ</Button></Link>
              </Card>
            </div>
          )} 
         
        </div> : <LoadingScreen/>}
      </div>
    </div>
  )
}

export default CardActivity