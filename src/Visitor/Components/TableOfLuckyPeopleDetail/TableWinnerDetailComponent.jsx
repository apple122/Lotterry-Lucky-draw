import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../GetAPI/getUrl'
import * as ReactBoostrap from 'react-bootstrap'

function TableWinnerDetailComponent() {
  window.scrollTo(0, 0)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState()
  let i = 1
  let times = data.sort(function (a, b) {
    return b.week_id - a.week_id
  })
  let LimitTimes = times.slice(0, 1)
  let LimitTimesID = LimitTimes[0]?.week_id

  let event = data.sort(function (a, b) {
    return b.id - a.id
  })

  let FirstWinner = event.filter(e => e.prize_id === 1 && e.week_id === LimitTimesID)

  let SecondWinners = event.filter(e => e.prize_id === 2 && e.week_id === LimitTimesID)

  let ThirdWinners = event.filter(e => e.prize_id === 3 && e.week_id === LimitTimesID)

  useEffect(() => {
    const getSinglePrizeAPI = async () => {
      await axios.get(url.ip + url.getWinner)
        .then((response) => {
          setData(response.data.data)
          setLoading(true)
        }).catch((error) => {
          console.log(error.response)
        })
    }
    getSinglePrizeAPI()
  }, [])
  return (
    <div>
      {loading ? <div>
      <h1 className='text-center my-5 bg-primary text-white p-3 w-50 d-block mx-auto fw-bold'>ຜົນການສຸ່ມ ງວດທີ {`${LimitTimesID}`}</h1>
      <div class="container d-block mx-auto my-5">
  <div class="row">
    <div class="col">
    <div className='fs-4 text-center bg-warning px-3 py-4 text-white fw-bold'>ລາງວັນ 1,000,000 ກີບ</div>
    {FirstWinner.map((e, index) => <div key={index} className='border border-1 py-3 fs-4 text-center'> {`ລຳດັບທີ ${index+1}`} <br /> {e.fullName} <br /> {`ເລກໃບບິນ`} <br /> {e.bil_number}</div> )}
    </div>
    <div class="col">
    <div className='fs-4 text-center bg-danger px-3 py-4 text-white fw-bold'>ລາງວັນ 500,000 ກີບ</div>
    {SecondWinners.map((e, index) => <div key={index} className='border border-1 py-3 fs-4 text-center'>{`ລຳດັບທີ ${index+1}`} <br /> {e.fullName} <br /> {`ເລກໃບບິນ`} <br /> {e.bil_number}</div> )}
    </div>
    <div class="col">
    <div className='fs-4 text-center bg-primary px-3 py-4 text-white fw-bold'>ລາງວັນ 100,000 ກີບ</div>
    {ThirdWinners.map((e, index) => <div key={index} className='border border-1 py-3 fs-4 text-center'>{`ລຳດັບທີ ${index+1}`} <br /> {e.fullName} <br /> {`ເລກໃບບິນ`} <br /> {e.bil_number}</div> )}
    </div>
  </div>
</div>
      </div> : <ReactBoostrap.Spinner style={{marginTop: 300}} className='loader d-block mx-auto' animation='border'/> }
     
    </div>
  )
}

export default TableWinnerDetailComponent