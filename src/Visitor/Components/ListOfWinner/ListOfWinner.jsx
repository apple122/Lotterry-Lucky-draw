import React from 'react'
import { useState, useEffect } from 'react'
import '../../Assets/sass/LuckyPeople.scss'
import '../../Assets/sass/LuckyName.scss'
import ReactPaginate from 'react-paginate';
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import url from '../../GetAPI/getUrl'
import * as ReactBoostrap from 'react-bootstrap'

function LuckyPeople() {
  AOS.init()
  const [select, setSelect] = useState("")
  const [winner, getWinner] = useState([])
  const [data, setData] = useState(winner)
  const [prize, setPrize] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const Account = async () => {
      await axios.get(url.ip + url.getWinner)
        .then(function (response) {
          getWinner(response.data.data)
          setLoading(true)
        })
    }
   
    const getPrizeAPI = async () => {
      const data = await axios.get(url.ip + url.getPrize)
        .then(function (response) {
          setPrize(response.data)
        })
    }
    Account()
    getPrizeAPI()
  }, [])
  let ReverseData = winner.sort(function(a, b){
    return b.id-a.id
  })
  function getInput(event) {
    setSelect(event.target.value)
    filterData(event.target.value)
  }

  const filterData = (value) => {
    if (!value) {
      setData(winner)
    }
    else if (value) {
      const filteredData = []
      setData(filteredData)
    }
    else if (value != winner.value) {
      const filteredData = "No data"
      setData(filteredData)
    }
  }

  const [pageNumber, setPageNumber] = useState(0)

  const itemsPerPage = 12
  const pageVisited = pageNumber * itemsPerPage
  const displayUsers = ReverseData.slice(pageVisited, pageVisited + itemsPerPage).map(e => {
    return (
      <div key={e.id} className='mx-3 mb-4 luckybox shadow' style={{ width: '18rem' }} >
        <p className='mt-4 text-center fw-bold fs-3 textColor'>{`${e.fullName}`}</p>
        <hr className='line' />
        <p className='mt-4 text-center fw-bold fs-4 textColor'>{`ເລກບິນ`} <br /> {`${e.bil_number}`}</p>
        <p className='mt-1 text-center fw-bold fs-3 textColor'>{`ງວດທີ`} {`${e.week_id}`}</p>
        <p className='text-center fw-bold fs-4 text-center backgroundPrize py-3'>{`ລາງວັນ: ${prize.filter(a => a.id === e.prize_id).map((b) => b.title)}`}</p>
      </div>
    )
  })

  let filterUser = ReverseData.filter((e) => e.fullName.toLowerCase().includes(select) || e.bil_number.toLowerCase().includes(select)).slice(0, 12).map((e, i) =>
    <div key={e.id} className='mx-3 mb-4 luckybox shadow' style={{ width: '18rem' }} data-aos="" data-aos-duration="500">
      <p className='mt-4 text-center fw-bold fs-3 textColor'>{`${e.fullName}`}</p>
      <hr className='line' />
      <p className='mt-4 text-center fw-bold fs-4 textColor'>{`ເລກບິນ`} <br /> {`${e.bil_number}`}</p>
      <p className='mt-1 text-center fw-bold fs-3 textColor'>{`ງວດທີ`} {`${e.week_id}`}</p>
      <p className='text-center fw-bold fs-4 text-center backgroundPrize py-3'>{`ລາງວັນ: ${prize.filter(a => a.id === e.prize_id).map((b) => b.title)}`}</p>
    </div>
  )

  const pageCount = Math.ceil(winner.length / itemsPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  return (
    <div>
      <div className='formCard'>
        <div style={{ height: "auto" }} className='container mt-3'>
          
        <p className='fs-1 fw-bold mt-5 mb-4 BackgroundLuckyPeople'>ລາຍຊື່ຜູ້ໂຊກດີ</p>

          <div className='d-flex justify-content-between align-items-center pt-5 pe-4'>
            <div>

            </div>
            <div className='d-flex'>
              <label htmlFor="" className='justify-item-center me-3 fs-4'>ຄົ້ນຫາ:</label>
              <input className='form-control w-75' type="text" name="" id=""
                placeholder='ຄົ້ນຫາຊື່ ຫລື ເລກໃບບິນ'
                value={select}
                onChange={getInput}
                data-aos="fade"
              />

            </div>
          </div>
          <div className='row justify-items-center justify-content-center my-4'>
          </div>
          {loading ? 
          <div>
            {winner.length === 0 ? <h1 className='text-center'>ບໍ່ມີຂໍ້ມູນ</h1> : ""}
          {select === "" ?
            <div className='row justify-content-center justify-items-center' data-aos="fade-up" data-aos-duration="1000">
              {displayUsers}
            </div> :
            <div className='row justify-content-center justify-items-center' data-aos="fade-up" data-aos-duration="1000">
              {filterUser}
            </div>}
            </div> : <ReactBoostrap.Spinner className='loader d-block mx-auto' animation='border'/> }
            
        </div>
      </div>
      <div className='mt-4 mb-5 p-1 position-static'>
        {winner.length >= 12 ? <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtn"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        >
        </ReactPaginate> : ""

        }

      </div>
    </div>
  )
}

export default LuckyPeople