import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Confetti from "react-confetti";
import { useEffect } from 'react';
import url from '../../GetAPI/getUrl'
import axios from 'axios';
import { useContext } from 'react';
import { ModalContext } from '../Slot/elements/SlotMachine';

function ModalPopUp(props) {
  const modalShow = useContext(ModalContext)
  const [Prizes, getPrizes] = useState([]);
  const [Winner, setWiner] = useState([])
  const popup = props.popup
  const winnerBil = props.winnerBil
  const winnerName = props.winnerName
  const prize = props.prize

  useEffect(() => {
    const getPrizeAPI = async () => {
      await axios.get(url.ip + url.getPrize)
        .then((response) => {
          getPrizes(response.data)
        })
    }
    getPrizeAPI()
  }, [])

  function reload() {
    window.location = "/Random"
  }

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
      >
        <Confetti className="w-100" />
        <Modal.Body className="border border-1">
          <h2 className="text-center mt-1 mb-4 fw-bold">ຜູ້ໂຊກດີ</h2>
          <h3
            style={{ backgroundColor: "#00A8CC" }}
            className="bd text-center my-5 shadow p-3 text-white rounded rounded-3"
          >
            {`ເລກບິນທີ: ${winnerBil}`}
            <br />
            <br />
            {`ຊື່ຜູ້ໂຊກດີ: ${winnerName}`}
            <br />
            <br />
            <h3 className="fw-bold fs-1">{`ເງິນລາງວັນ ${Prizes.filter(e => e.id == prize).map(e => (parseInt(e.description).toLocaleString()))} ກີບ`}</h3>
          </h3>
        </Modal.Body>
        <Button className="w-25 d-block mx-auto my-3 fs-3" onClick={reload}>
        ປິດ
      </Button>
      </Modal>
      {/* { } */}
    </div>
  )
}

export default ModalPopUp