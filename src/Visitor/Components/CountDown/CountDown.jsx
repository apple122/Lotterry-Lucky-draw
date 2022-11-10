import React, { useState } from "react";
import axios from "axios";
import url from '../../GetAPI/getUrl'
import { useEffect } from "react";
import '../../Assets/sass/CountDown.scss'

function Countdown() {
  const [days, setDays] = useState("0")
  const [hours, setHours] = useState("0")
  const [minutes, setMinutes] = useState("0")
  const [seconds, setSeconds] = useState("0")
  const [stop, setStop] = useState(0)
  const [event, getEvent] = useState([])
  const datetime = localStorage.getItem('dt')
  const [deadline, setDeadline] = useState("")

  useEffect(() => {
    const getPage = async () => {
      await axios.get(url.ip + url.getEvent)
        .then((response) => {
          let page = response.data.totalPages
            axios.get(url.ip + url.getEvent + '/' + `?page=${page-1}`)
              .then((response) => {
                getEvent(response.data.lists.sort(function(a, b){
                  return b.id-a.id
                }))
                localStorage.setItem('dt', response.data.lists[0].end_date+','+response.data.lists[0].time)
              })
          setDeadline(datetime)
        })
    }
    getPage()
  }, [])
  
  function getTimeUntil(datetime) {
    const time = Date.parse(datetime) - Date.parse(Date());
    if (time < 0) {
      setStop(1)
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      setSeconds(seconds)
      setMinutes(minutes)
      setHours(hours)
      setDays(days)

    }
  }

  if (stop == true) {

  } else {
    function componentDidMount() {
      setInterval(() => getTimeUntil(datetime), 1000);

    }
    componentDidMount()
  }
  
  return (
    <div>
      {stop === 0 ? <div className="bg-primary text-white fs-2 text-center py-2 fw-bold">ກິດຈະກຳຈະເລີ່ມໃນອີກ</div> : <div className="bg-success p-3 text-center text-white fw-bold"><h1 className="Ready">Ready Go!</h1></div>}
      {stop === 0 ? <div className="d-block mx-auto">
        <div className="d-flex bg-warning text-white fs-1 justify-content-center align-items-center">
          <div className="mx-3">
            <div className="fw-bold">
              {days}
              <div className="fw-bold">ວັນ</div>
            </div>
          </div>
          <div className="mx-3">
            <div className="fw-bold">
              {hours}
              <div className="fw-bold">ຊົ່ວໂມງ</div>
            </div>
          </div>
          <div className="mx-3">
            <div className="fw-bold">
              {minutes}
              <div className="fw-bold">ນາທີ</div>
            </div>
          </div>
          <div className="mx-3">
            <div className="fw-bold">
              {seconds}
              <div className="fw-bold">ວິນາທີ</div>
            </div>
          </div>
        </div>
      </div> : ""}
    </div>
  );
}

export default Countdown;
