import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../Assets/sass/DetailEvent.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import url from '../GetAPI/getUrl'
import ImageEvent from '../Components/ImageEvent/ImageEvent';
import Description from '../Components/Description/Description';
import Rules from '../Components/Rules/Rules';
import Contact from '../Components/Contact/Contact';
import StartEventDatetime from '../Components/StartEventDatetime/Index'
import MainTitle from '../Components/MainTitle/index'
import SubTitle from '../Components/SubTitle/index'
import LoadingScreen from '../Components/Loading/LoadingScreen';

function Event() {
    window.scrollTo(0, 0)
    const { id } = useParams();
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);
    useEffect(() => {
        const getEventAPI = async () => {
            await axios.get(url.ip + url.postEvent + id)
                .then((response) => {
                    setData(response.data)
                    setLoading(true)
                }).catch((error) => {
                    console.log(error.response)
                })
        }
        getEventAPI()
      }, [])
    return (
        <div>
            {loading ? <Container className='mt-2 mb-5'>
                <Row>
                    <Col className='text-center'>

                    <ImageEvent imageID={id}/>

                    </Col>

                    <Col>
                        <h2 className='text-center my-5'>ລາຍລະອຽດກິດຈະກຳ</h2>
                        <hr />

                        <MainTitle MainID={id}/>
                        <SubTitle SubID={id}/>
                        
                        
                            <Description DesID={id}/>

                            <Rules DatetimeID={id}/>

                            <StartEventDatetime DatetimeID={id}/>

                            <Contact ContactID={id}/>
                        
                    </Col>
                </Row>
            </Container> : "" }
        </div>
    )
}

export default Event