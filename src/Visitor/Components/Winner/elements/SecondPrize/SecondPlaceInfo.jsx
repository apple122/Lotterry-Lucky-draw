import React from 'react'
import axios from 'axios'
import url from '../../../../GetAPI/getUrl'
import { useState, useEffect } from 'react';

function SecondPlaceInfo() {
  const [data, setData] = useState([])

  let times = data.sort(function (a, b) {
    return b.week_id - a.week_id
  })
  let LimitTimes = times.slice(0, 1)
  let LimitTimesID = LimitTimes[0]?.week_id

  let event = data.sort(function (a, b) {
    return b.id - a.id
  })
  let SecondWinners = event.filter(e => e.prize_id === 2 && e.week_id === LimitTimesID)
  let LimitSecondWinners = SecondWinners.slice(0, 3)

  useEffect(() => {
    const getSinglePrizeAPI = async () => {
      await axios.get(url.ip + url.getWinner)
        .then((response) => {
          setData(response.data.data)
        }).catch((error) => {
          console.log(error.response)
        })
    }
    getSinglePrizeAPI()
  }, [])
  return (
    <div>
      <div style={{ height: 563 }} className="w-75 bg-danger d-block mx-auto overflow-auto">
        {LimitSecondWinners.map((e, index) => {
          return (
            <div key={index}>
              <div className='my-1 text-center text-white'>
                <p className='pt-3 fs-4 fw-bold'>{e.fullName}</p>
                <p className='fs-4 fw-bold'>{e.bil_number}</p>
                <p className='fs-4 fw-bold'>ງວດທີ {e.week_id}</p>
              </div>
              <hr className='text-white border border-1' />
            </div>
          )
        }

        )}

      </div>
    </div>
  )
}

export default SecondPlaceInfo