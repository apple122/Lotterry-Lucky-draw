import React, { useEffect, useState, useContext } from "react";
import "../../Assets/sass/RandomPage.scss";
import "../../Assets/sass/LuckyPeople.scss";
import "../../Assets/sass/LuckyName.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import url from "../../GetAPI/getUrl"
import LoadingScreen from "../Loading/LoadingScreen";
import SlotMachine from "./elements/SlotMachine";
import TitleSelect from "./elements/TitleSelect";
import { createContext } from "react";
import { useLocation } from 'react-router-dom'
import '../../Assets/sass/style.scss'
import ModalPopUp from "../Modal/ModalPopUp";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const SelectContext = createContext()
export const TimesContext = createContext()
export const WarningContext = createContext()
export const WarningTimesContext = createContext()

function RandomPage() {
  AOS.init();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const token = localStorage.getItem('token')
  const CheckToken = localStorage.getItem('CheckToken')
  const [prize, setPrize] = useState();
  const [prizes, getPrizes] = useState([])
  const [event, getEvent] = useState([])
  const [loading1, setLoading1] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [showWarningPrize, setShowWarningPrize] = useState(false)
  const [showWarningTimes, setShowWarningTimes] = useState(false)
  let getPrizeID = localStorage.getItem('PrizeID')
  let Times = localStorage.getItem('Times')
  let Save = localStorage.getItem('Save')
  const [PrizeID, setPrizeID] = useState(getPrizeID)
  const [times, setTimes] = useState(Save ? Times : null)
  const location = useLocation();
  const splitLocation = location.pathname

  function getPrize(id) {
    setPrize(id.target.value);
    setShowWarningPrize(false)
    localStorage.setItem('PrizeID', id.target.value)
    localStorage.setItem('Save', true)
  }

  function getTimes(id) {
    setTimes(id.target.value);
    setShowWarningTimes(false)
    localStorage.setItem('Times', id.target.value)
  }

  useEffect(() => {
    const getPrizeAPI = async () => {
      await axios.get(url.ip + url.getPrize)
        .then((response) => {
          getPrizes(response.data)
          setLoading1(true)
        })
    }
    getPrizeAPI()

    const getRandomAPI = async () => {
      await axios.get(url.ip + url.getRandom)
        .then((response) => {
          setLoading2(true)
        })
    }
    getRandomAPI()
  }, [])

//     let elem = document.getElementById("fullScreen");
// function openFullscreen() {
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.webkitRequestFullscreen) { /* Safari */
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) { /* IE11 */
//     elem.msRequestFullscreen();
//   }
// }

  return (
    <SelectContext.Provider value={getPrizeID}>
      <TimesContext.Provider value={times}>
        <WarningContext.Provider value={{ showWarningPrize, setShowWarningPrize }}>
          <WarningTimesContext.Provider value={{showWarningTimes, setShowWarningTimes}}>
          <div className="bg-white" id="fullScreen">
         {/* <button onClick={openFullscreen}>Fullscreen</button> */}
              <div class="row resize mt-5">
               <div className="col-md-6 d-flex pd-bottom">
               <label className="text-center fw-bold lab scale">ເລືອກລາງວັນ:</label>
                <select onChange={getPrize} className="form-control shadow-sm rounded rounded-2 bg-white scale" name="" id="">
                  <option selected="" value={PrizeID == null ? "" : PrizeID}>{PrizeID == null ? "--ກະລຸນາເລືອກລາງວັນ--" : `ລາງວັນທີ ${PrizeID} ຈຳນວນເງິນ ${prizes.filter(e => e.id == PrizeID).map(e => parseInt(e.description).toLocaleString())} ກີບ ຈຳນວນ ${prizes.filter(e => e.id == PrizeID).map(e => (e.quantity))} ລາງວັນ`} </option>
                  {prizes.map((e, key) =>
                    <option className="fs-5 text-black" key={key} value={e.id}>{`ລາງວັນທີ ${e.id} ຈຳນວນເງິນ ${parseInt(e.description).toLocaleString()} ກີບ ຈຳນວນ ${e.quantity} ລາງວັນ`}</option>
                  )}
                </select>
               </div>
               <div className="col-md-6 d-flex pd-bottom">
               <label className="text-center fw-bold ms-4 lab scale">ປ້ອນງວດ:</label>
                <input onChange={getTimes} className="form-control shadow-sm rounded rounded-2 scale" type="number" placeholder={`ງວດລ່າສຸດແມ່ນ ${Times}`} defaultValue={times} min={1} />
               </div>
              </div>
            {<div className="background mt-4">
              {loading1 && loading2 ? <SlotMachine/> : <LoadingScreen />}

            </div>
            }
          </div>
          </WarningTimesContext.Provider>
        </WarningContext.Provider>
      </TimesContext.Provider>
    </SelectContext.Provider>
  );
}

export default RandomPage;
