import React, {useState, useEffect} from 'react'
import '../../Assets/sass/carousel.scss'
import Carousel from 'react-bootstrap/Carousel';
import url from '../../GetAPI/getUrl'
import axios from 'axios';

function Carousels() {

  const [banners, getBanners] = useState([]);

  useEffect(() => {
    const getBannersAPI = async () => {
      const data = await axios.get(url.ip + url.getBanner)
      .then(function (response) {
        getBanners(response.data)
      })
    }
    getBannersAPI()
  },[])
  
  return (
    <div>
      <div>
     <Carousel
     interval={5000}
    className='shadow'>
      {banners.map((e, key) => 
        <Carousel.Item key={key}>
        <img
        height={600}
          className="w-100 img-fluid"
          src={`${url.ip}/${e.image}`}
          alt={e.name}
        />
      </Carousel.Item>
      )}
    </Carousel>
       </div>
  </div>
  )
}

export default Carousels