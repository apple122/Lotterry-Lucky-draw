import React, {useState, useEffect} from 'react'
import axios from 'axios'
import url from '../../../GetAPI/getUrl'

function Card() {
    const [data, setData] = useState([])
    const [prize, setPrize] = useState([])
    const [loading, setLoading] = useState(false)
    let event = data.sort(function(a, b){
      return b.id-a.id
    })
    let FirstWinner = event.filter(e => e.prize_id === 1)
    let LimitFirstWinner = FirstWinner.slice(0, 1)

    let SecondWinner = event.filter(e => e.prize_id === 2)
    let LimitSecondWinner = SecondWinner.slice(0, 1)

    let ThirdWinner = event.filter(e => e.prize_id === 3)
    let LimitThirdWinner = ThirdWinner.slice(0, 2)
    
    useEffect(() => {
      const getEventAPI = async () => {
        const data = await axios.get(url.ip + url.getWinner)
          .then(function (response) {
            setData(response.data.data)
            setLoading(true)
          })
      }

      const getPrizeAPI = async () => {
        const data = await axios.get(url.ip + url.getPrize)
          .then(function (response) {
            setPrize(response.data)
          })
      }
      getEventAPI()
      getPrizeAPI()
    }, [])
  return (
    <div>
        <div className='pt-5 row justify-content-center w-100 CardLucky' data-aos='fade-right' data-aos-duration="1000">
          {LimitFirstWinner.map((e) =>
              <div key={e.id} className='mx-3 mb-5 luckybox shadow' style={{ width: '18rem' }}>
                  <p className='mt-4 text-center fw-bold fs-3 textColor'>{`${e.fullName}`}</p>
                  <hr className='line'/>
                  <p className='mt-4 text-center fw-bold fs-4 textColor'>{`ເລກບິນ`} <br /> {`${e.bil_number}`}</p>
                  <p className='mt-1 text-center fw-bold fs-3 textColor'>{`ງວດທີ`} {`${e.week_id}`}</p>
                  <p className='text-center fw-bold fs-4 text-center backgroundPrize py-3'>{`ລາງວັນ: ${prize.filter(a => a.id === e.prize_id).map((b) => b.title)}`}</p>
              </div>
            )}

          {LimitSecondWinner.map((e) =>
              <div key={e.id} className='mx-3 mb-5 luckybox shadow' style={{ width: '18rem' }}>
                  <p className='mt-4 text-center fw-bold fs-3 textColor'>{`${e.fullName}`}</p>
                  <hr className='line'/>
                  <p className='mt-4 text-center fw-bold fs-4 textColor'>{`ເລກບິນ`} <br /> {`${e.bil_number}`}</p>
                  <p className='mt-1 text-center fw-bold fs-3 textColor'>{`ງວດທີ`} {`${e.week_id}`}</p>
                  <p className='text-center fw-bold fs-4 text-center backgroundPrize py-3'>{`ລາງວັນ: ${prize.filter(a => a.id === e.prize_id).map((b) => b.title)}`}</p>
              </div>
            )}
          {LimitThirdWinner.map((e) =>
              <div key={e.id} className='mx-3 mb-5 luckybox shadow' style={{ width: '18rem' }}>
                  <p className='mt-4 text-center fw-bold fs-3 textColor'>{`${e.fullName}`}</p>
                  <hr className='line'/>
                  <p className='mt-4 text-center fw-bold fs-4 textColor'>{`ເລກບິນ`} <br /> {`${e.bil_number}`}</p>
                  <p className='mt-1 text-center fw-bold fs-3 textColor'>{`ງວດທີ`} {`${e.week_id}`}</p>
                  <p className='text-center fw-bold fs-4 text-center backgroundPrize py-3'>{`ລາງວັນ: ${prize.filter(a => a.id === e.prize_id).map((b) => b.title)}`}</p>
              </div>
            )}
          </div>
    </div>
  )
}

export default Card