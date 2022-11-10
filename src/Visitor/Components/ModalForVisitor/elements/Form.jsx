import React, { useState } from 'react'
import Button from './ButtonClose'
import Modal from "react-bootstrap/Modal";
import Confetti from "react-confetti";
import { useEffect } from 'react';
import url from '../../../GetAPI/getUrl'
import axios from 'axios';

function Form(props) {
  const [modalShow, setModalShow] = useState(false);
  const Winner_Name = props.winnerName
  const Winner_Bil = props.winnerBil
  const [Prizes, getPrizes] = useState([]);
  const popup = props.popup
  const prize = props.prize

if(modalShow === true) {
  let timeleft = 15;
    let downloadTimer = setInterval(function(){
      document.querySelector(".countdown").textContent = timeleft;
    timeleft--;
    if (timeleft < 0) {
      clearInterval(downloadTimer);
      window.location.reload(true)
    }
    },1000);
}

  useEffect(() => {
    setModalShow(popup)
    setLuckyNumber(lucky)
  })
 
  useEffect(() => {
    const getPrizeAPI = async () => {
      await axios.get(url.ip + url.getPrize)
        .then((response) => {
          getPrizes(response.data)
        })
    }
    getPrizeAPI()
  }, [])


  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
        className="rounded rounded-5"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Confetti className="w-100" />
        <Modal.Body className="border border-1">
          <h2 className="text-center mt-1 mb-4 fw-bold">ຜູ້ໂຊກດີ</h2>
          <h3
            style={{ backgroundColor: "#00A8CC" }}
            className="bd text-center my-5 shadow p-3 text-white rounded rounded-3"
          >
            {`ເລກບິນທີ: ${Winner_Bil}`}
            <br />
            <br />
            {`ຊື່ຜູ້ໂຊກດີ: ${Winner_Name}`}
            <br />
            <br />
            <h3 className="fw-bold fs-1">{`ເງິນລາງວັນ ${Prizes.filter(e => e.id == prize).map(e => (e.amount))} ກີບ`}</h3>
          </h3>
          <h4 className='text-center'>ກຳລັງຈະປິດຫນ້າຕ່າງພາຍໃນ <span className='countdown'></span> ວິນາທີິ</h4>
        </Modal.Body>
        <Button />
      </Modal>
      {/* { } */}
    </div>
  )
}

export default Form