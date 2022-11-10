// import axios from "axios";
// import { createContext, useState, useEffect } from "react";
// import url from '../GetAPI/getUrl'

// export const TimesContext = createContext();
// export const TimesProvider = ({ children }) => {
//   const [Times, setTimes] = useState([])
//   const parseTimes = parseInt(Times.week_id).toLocaleString()

 
//   const getTimesAPI = async() => {
//     await axios.get(url.ip + url.getWinner).then((res) => {
//         setTimes(res.data.data)
        
//     })
// };

// useEffect(() => {
//   getTimesAPI()
//    // const isDark = localStorage.getItem("isDark") === "true";
//    // setIsDark(isDark);
//  })

//  function getTimes() {
//   localStorage.setItem("Times", parseTimes)
  
// }
// console.log('Times', parseTimes)
//   return (
//     <TimesContext.Provider value={[parseTimes]}>{children}</TimesContext.Provider>
//   )
// }