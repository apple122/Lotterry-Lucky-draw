import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Ads() {
  return (
    <div>
    <hr />
    <Carousel interval={5000} nextIcon={false} prevIcon={false} indicators={false} fade className='px-5 pt-3'>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          style={{width: 1500, height: 200, objectFit: "fill"}}
          src="https://api.olaa.la/files/Realme%20Q5%20Pro%20Long%20Desktop.jpg"
          alt="First slide"
        />

      </Carousel.Item>
    
    </Carousel>
    </div>
  )
}

export default Ads