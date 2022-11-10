import React from 'react'
import Slot from '../Components/Slot/Slot'
import WinnerCharts from '../Components/Winner/WinnerCharts'
import CountDown from '../Components/CountDown/CountDown'
import SlotForVisitor from '../Components/SlotForVisitor/SlotForVisitor';
import Prizes from '../Components/Prizes/Prizes';

function RandomPage() {
  window.scrollTo(0, 100)
  const token = localStorage.getItem('token');
  const CheckToken = localStorage.getItem('CheckToken');
  return (
    <div>
      <CountDown/>
      <Prizes/>
      <SlotForVisitor/>
      <WinnerCharts/>
    </div>
  )
}

export default RandomPage