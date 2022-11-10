import React from 'react'
import Form from './elements/Form'
import { ModalContext, LuckyNumberContext } from '../SlotForVisitor/elements/SlotMachine'
import { useContext } from 'react';

function ModalPopUp(props) {
  const modalShow = useContext(ModalContext)
  const WinnerName = props.WinnerName
  const WinnerBil = props.WinnerBil
  const prize = props.prize
  
  return (
    <div>
        <Form popup={modalShow} winnerName={WinnerName} WinnerBil={WinnerBil} prize={prize}/>
    </div>
  )
}

export default ModalPopUp