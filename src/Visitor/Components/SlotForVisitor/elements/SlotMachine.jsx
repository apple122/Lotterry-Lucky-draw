import React, { useState, useReducer } from 'react'
import url from "../../../GetAPI/getUrl"
import axios from "axios";
import Warning from "../elements/Warning";
import { useEffect, createContext } from 'react';
import ModalPopUp from './../../Modal/ModalPopUp';
import { useContext } from 'react';
import Toastify from '../../Toastify/Toastify';
import LoadingScreen from "../../Loading/LoadingScreen";

export const ModalContext = createContext()
export const LuckyNumberContext = createContext()

function SlotMachine() {
  const [candidate, setCandidate] = useState([])
  const token = localStorage.getItem('token')
  const CheckToken = localStorage.getItem('CheckToken')
  let savePrize = localStorage.getItem("prize")
  const [modalShow, setModalShow] = useState(false);
  const [Prizes, getPrizes] = useState([])
  const [showToastify, setShowToastify] = useState(false)
  const [winnerID, setWinnerID] = useState()
  let randNumber = Math.floor(Math.random() * candidate.length);
  let Winner = candidate[randNumber];
  const [winnerBil, setWinnerBil] = useState()
  const [winnerName, setWinnerName] = useState()
  const [loading, setLoading] = useState(false)
  const [seed, setSeed] = useState([])
  const [reducer, setReducer] = useReducer(x => x + 1, 0)
  const [start, setStart] = useState(0)

  useEffect(() => {

    const getCandidateAPI = async () => {
      await axios.get(url.ip + url.getRandom)
        .then((response) => {
          setCandidate(response.data)
          setLoading(true)
        }).catch((error) => {
          console.log(error.response)
        })
    }
    getCandidateAPI()

  }, [])

  // useEffect(() => {
  //   const getSeed = async () => {
  //     // setInterval(() => getSeed() , 1000);
  //     await axios.get(url.ip + url.getBanner)
  //       .then((response) => {
  //         setSeed(response.data)
  //         setReducer()
  //       }).catch((error) => {
  //         console.log(error.response)
  //       })
  //   }
  //   getSeed()
  // }, [reducer])

  // let data = seed.sort(function (a, b) {
  //   return b.id - a.id
  // })
  // let seedID = data.slice(0, 1)

  // if (seed.length > 3) {
  //   localStorage.setItem('Start', 1)
  // }

  // let Start = localStorage.getItem('Start')

  // if (Start == 1) {
  //   Random()
  // }

  // useEffect(() => {
  //   function componentDidMount() {
  //     setInterval(() => setReducer(), 1500);

  // }
  // componentDidMount()
  // }, [reducer])

  function Random() {
    // axios.delete(url.ip + url.deleteBanner + seedID[0].id).then((res) => {
    //   // setSeed(res.data)
    // }).catch((error) => {
    //   console.log(error)
    // })
    // localStorage.setItem('Start', 0)
    let slot = document.querySelector(".slot");
    let item = document.querySelectorAll(".itemNumber");
    let text = document.querySelectorAll(".TextNumber")
    let luckyElement = document.querySelector(`.Number${Winner?.id}`)
    // const spin = document.querySelector(".circle");
    let speed = 0;
    let time = 16;
    let slot2;
    let amountOfLooping = 0;
    let transition = 'ease'
    if (candidate.length > 10 && candidate.length < 100) {
      speed = 15
      amountOfLooping = 5
      for (let i = 0; i < item.length; i++) {
        item[i].setAttribute("style", "justify-content: center; align-item: center; line-height: 68px");
      }
    } else if (candidate.length <= 10 && candidate.length > 5) {
      speed = 20
      amountOfLooping = 6
      for (let i = 0; i < item.length; i++) {
        item[i].setAttribute("style", "justify-content: center; align-item: center; line-height: 198px");
      }
    } else if (candidate.length <= 5 && candidate.length > 2) {
      speed = 20
      amountOfLooping = 6
      for (let i = 0; i < item.length; i++) {
        item[i].setAttribute("style", "justify-content: center; align-item: center; line-height: 298px");
      }
    } else if (candidate.length <= 3 && candidate.length > 2) {
      speed = 30
      amountOfLooping = 8
      for (let i = 0; i < item.length; i++) {
        item[i].setAttribute("style", "justify-content: center; align-item: center; line-height: 298px");
      }
    } else if (candidate.length === 2 && candidate.length > 1) {
      speed = 30
      amountOfLooping = 8
      for (let i = 0; i < item.length; i++) {
        item[i].setAttribute("style", "justify-content: center; align-item: center; line-height: 398px");
      }
    } else if (candidate.length === 1) {
      for (let i = 0; i < item.length; i++) {
        item[i].setAttribute("style", "justify-content: center; align-item: center; line-height: 298px");
      }
      setModalShow(true)
      // reload()
    } else if (candidate.length < 1) {
      // alert("ບໍ່ມີລາຍຊື່ຜູ້ສຸ່ມ ບໍ່ສາມາດສຸ່ມໃດ້")
      // reload()
    } else if (candidate.length >= 500 && candidate.length < 1000) {
      speed = 6
      amountOfLooping = 2
      for (let i = 0; i < item.length; i++) {
        item[i].setAttribute("style", "justify-content: center; align-item: center; line-height: 68px");
      }
    } else if (candidate.length >= 100 && candidate.length < 500) {
      speed = 5
      amountOfLooping = 3
      for (let i = 0; i < item.length; i++) {
        item[i].setAttribute("style", "justify-content: center; align-item: center; line-height: 68px");
      }
    } else if (candidate.length >= 1000 && candidate.length > 500) {
      speed = 6
      amountOfLooping = 2
      for (let i = 0; i < item.length; i++) {
        item[i].setAttribute("style", "justify-content: center; align-item: center; line-height: 68px");
      }
    }

    //ຫາຂະຫນາດຂອງຟອມຈຳນວນຜູ້ສຸ່ມລວມກັນທັງຫມົດ
    let rectslot = slot.getBoundingClientRect();

    //ເພິ່ມຈຳນວນຜູ້ສຸ່ມເພື່ອບໍ່ໃຫ້ມັນເລື່ອນບໍ່ຫມົດ
    // spin.style.visibility = "hidden";
    const height = slot.offsetHeight;
    for (let i = 0; i <= amountOfLooping; i++) {
      slot2 = slot.cloneNode(true);
      slot.appendChild(slot2);
      slot2.style.top = `${height}px`;
    }

    //ຫາຕຳແຫນ່ງຂອງ Element ຜູ້ໂຊກດີ
    let target = document.getElementById(`${Winner?.id}`);
    let rectTarget = target.getBoundingClientRect();

    //ຫາຄ່າ Rand
    let rand = Math.floor(Math.random() * (280 - 250 + 1)) + 250;

    // spin.classList.add("spinning");
    setTimeout(() => {
      slot.classList.add("blur");
    }, 1000);
    slot.style.transition = `all ${time}s ${transition}`; //ໃຫ້ເລື່ອນພາຍໃນ 15 ວິນາທີໃຫ້ເລື່ອນຂຶ້ນໄປເທິງເປັນແນວແກນ Y
    slot.style.transform = `translateY(-${(rectslot.height * speed) + (rectTarget.y - rectslot.top - rand)
      }px)`; //ສູດຄຳນວນຫາຕຳແຫນ່ງ Element ຜູ້ໂຊກດີ ແບບແນວຕັ້ງແກນ Y

    //ເງື່ອນໄຂ ຫລັງຈາກຢຸດຫມຸນ
    slot.addEventListener("transitionend", function () {
      let style = document.createElement("style");
      style.innerHTML = `.Number${Winner?.id} {
              animation: zoom-in-zoom-out 1s ease infinite;
            }
            
            @keyframes zoom-in-zoom-out {
              0% {
                transform: scale(1, 1);
              }
              50% {
                transform: scale(1.2, 1.2);
              }
              100% {
                transform: scale(1, 1);
              }
            }`;
      document.body.appendChild(style);
      slot.style.transition = "none";
      setTimeout(() => {
        // getLuckyPeople()
        setModalShow(true)
        slot.style.transform = `translateY(${(0)
          }px)`;
        // spin.style.visibility = "visible";

        style.innerHTML = `.Number${Winner?.id} {
                    animation: zoom-in-zoom-out 1s ease 
                  }
                  
                  @keyframes zoom-in-zoom-out {
                    0% {
                      transform: scale(0, 0);
                    }
                    50% {
                      transform: scale(0, 0);
                    }
                    100% {
                      transform: scale(0, 0);
                    }
                  }`;
      }, 4000); //ເວລາໃນການສະແດງຟອມ Pop up
    });
  }

  return (
    <ModalContext.Provider value={modalShow}>
      <div>
        {loading === true ? <div>
          <h1 className="my-4 p-3 text-center fw-bold fs-2 backgroundText1">
            Spin ສຸ່ມລຸ້ນໂຊກ
          </h1>
          <div style={{ height: 600 }} data-aos="fade-up">
            <div className="border border-5 d-block mx-auto formRandom position-relative">
              <div className="arrow-right"></div>
              <div className="arrow-left"></div>
              <div className='slot'>
                {candidate.map((e) => {
                  return (
                    <div
                      id={`${e.id}`}
                      key={e.id}
                      className={`Number${e.id} itemNumber border border-1 text-center text-white fs-2 fw-bold`}
                    >
                      {e.bil_number}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* <button onClick={Random}>Start</button> */}
          {/* <button onClick={Seed}>Seed</button> */}
          <audio src=""></audio>
          <ModalPopUp prize={1} winnerBil={Winner?.bil_number} winnerName={Winner?.fullName} />
        </div> : <LoadingScreen />}
      </div>
    </ModalContext.Provider>
  )
}

export default SlotMachine