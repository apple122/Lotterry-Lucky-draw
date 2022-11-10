import React, { useState } from 'react'
import url from "../../../GetAPI/getUrl"
import axios from "axios";
import Warning from "../elements/Warning";
import { useEffect, createContext } from 'react';
import ModalPopUp from './../../Modal/ModalPopUp';
import { useContext } from 'react';
import { SelectContext, WarningContext, WarningTimesContext } from '../Slot';
import Toastify from '../../Toastify/Toastify';
import WarningTimes from './WarningTimes';

export const ModalContext = createContext()
export const LuckyNumberContext = createContext()

function SlotMachine(props) {
  const [candidate, setCandidate] = useState([])
  const token = localStorage.getItem('token')
  const CheckToken = localStorage.getItem('CheckToken')
  const Times = localStorage.getItem('Times')
  const { showWarningPrize, setShowWarningPrize } = useContext(WarningContext)
  const { showWarningTimes, setShowWarningTimes } = useContext(WarningTimesContext)
  const [modalShow, setModalShow] = useState(false);
  const [Prizes, getPrizes] = useState([])
  const [showToastify, setShowToastify] = useState(false)
  const [winnerID, setWinnerID] = useState()
  const prizeID = useContext(SelectContext)
  // let Times = useContext(TimesContext)
  let randNumber = Math.floor(Math.random() * candidate.length);
  var Winner = candidate[randNumber];
  const [winnerBil, setWinnerBil] = useState()
  const [winnerName, setWinnerName] = useState()

  useEffect(() => {
    const getCandidateAPI = async () => {
      await axios.get(url.ip + url.getRandom)
        .then((response) => {
          setCandidate(response.data)
        }).catch((error) => {
          console.log(error.response)
        })
    }
    getCandidateAPI()

    const getSinglePrizeAPI = async () => {
      await axios.get(url.ip + url.getPrizeID + prizeID)
        .then((response) => {
          getPrizes(response.data)
        }).catch((error) => {
          console.log(error.response)
        })
    }
    getSinglePrizeAPI()
  }, [])

  function Random() {
    let slot = document.querySelector(".spin");
    let item = document.querySelectorAll(".itemNumber");
    let text = document.querySelectorAll(".TextNumber")
    let luckyElement = document.querySelector(`.Number${Winner?.id}`)
    const spin = document.querySelector(".circle");
    var speed = 0;
    var time = 16;
    let slot2;
    var amountOfLooping = 0;
    var transition = 'ease'
    if (prizeID === null || prizeID === "" || prizeID === undefined || Times === null || Times === "" || Times === undefined) {
      // alert('ກະລຸນາເລືອກລາງວັນກ່ອນ')
      setShowWarningPrize(true)
      setShowWarningTimes(true)
      window.scrollTo({ top: 100, left: 0, behavior: 'smooth' })
    }
    else {
      axios.post(url.ip + url.postWinner, {
        bil_number: Winner?.bil_number,
        bil_pic: Winner?.bil_pic,
        fullName: Winner?.candidate.fullName,
        village: Winner?.candidate.village,
        district: Winner?.candidate.district.name,
        province: Winner?.candidate.province.name,
        phone: Winner?.candidate.phone,
        prize_id: prizeID,
        week_id: Times
      }).then((response) => {
        setWinnerBil(Winner?.bil_number)
        setWinnerName(Winner?.candidate.fullName)
        setWinnerID(Winner?.id)
        setShowWarningPrize(false)
        if (candidate.length > 10 && candidate.length < 100) {
          speed = 25
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
          alert("ບໍ່ມີລາຍຊື່ຜູ້ສຸ່ມ ບໍ່ສາມາດສຸ່ມໃດ້")
          // reload()
        } else if (candidate.length >= 500 && candidate.length < 1000) {
          speed = 6
          amountOfLooping = 2
          for (let i = 0; i < item.length; i++) {
            item[i].setAttribute("style", "justify-content: center; align-item: center; line-height: 68px");
          }
        } else if (candidate.length >= 100 && candidate.length < 500) {
          speed = 6
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
        spin.style.visibility = "hidden";
        const height = slot.offsetHeight;
        for (let i = 0; i <= amountOfLooping; i++) {
          slot2 = slot.cloneNode(true);
          slot.appendChild(slot2);
          slot2.style.top = `${height}px`;
        }

        //ຫາຕຳແຫນ່ງຂອງ Element ຜູ້ໂຊກດີ
        let target = document.getElementById(`${Winner.id}`);
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
            spin.style.visibility = "visible";

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

            // axios.get(url.ip + url.getRandom)
            //   .then((response) => {
            //     setCandidate(response.data)
            //   }).catch((error) => {
            //     console.log(error.response)
            //   })
          }, 4000); //ເວລາໃນການສະແດງຟອມ Pop up
        });
      })
        .catch((error) => {
          console.log('Error', error);
          if (error.response?.data?.message === "this bil has got a prize") {
            alert(`ບິນນີ້ຖືກລາງວັນແລ້ວ`)
          } else if (error.response?.data?.message === "This prizes got winners") {
            alert(`ລາງວັນທີ ${prizeID} ຫມົດແລ້ວ`)
          }
        });
    }

  }
  return (
    <ModalContext.Provider value={modalShow}>
      <LuckyNumberContext.Provider>
        <div>
          {showToastify === true ? <Toastify PrizeID={prizeID} /> : ""}
          {showWarningPrize && showWarningTimes ? <Warning /> : ""}

          <div style={{ height: 600 }} data-aos="fade-up">
            <div className="border border-5 d-block mx-auto formRandom position-relative">
              {token && token === CheckToken ? <div
                onClick={() => Random()}
                className="circle shadow border border-1 text-black">Spin</div> : ""}
              <div className="arrow-right"></div>
              <div className="arrow-left"></div>
              <div className="spin">
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
          <audio src=""></audio>
          <ModalPopUp prize={prizeID} winnerBil={winnerBil} winnerName={winnerName} />
        </div>
      </LuckyNumberContext.Provider>
    </ModalContext.Provider>
  )
}

export default SlotMachine