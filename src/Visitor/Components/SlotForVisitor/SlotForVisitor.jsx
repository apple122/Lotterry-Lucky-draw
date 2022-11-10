import React, { useEffect, useState, useContext } from "react";
import "../../Assets/sass/RandomPage.scss";
import "../../Assets/sass/LuckyPeople.scss";
import "../../Assets/sass/LuckyName.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import url from "../../GetAPI/getUrl"
import SlotMachine from "./elements/SlotMachine";
import TitleSelect from "./elements/TitleSelect";
import { createContext } from "react";

export const SelectContext = createContext()
export const WarningContext = createContext()

function SlotForVisitor() {
  AOS.init();
  // window.scrollTo(0, 0)
  return (
    <div>
      <div>
      <div className="text-center fs-1 my-5 p-5 bg-danger text-white">ຫນ້າ Live ການສຸ່ມຢູ່ໃນຊ່ວງການພັດທະນາ</div>
        <TitleSelect />

        {<div className="background">

          <SlotMachine />

        </div>
        }
      </div>
    </div>
  )
}

export default SlotForVisitor