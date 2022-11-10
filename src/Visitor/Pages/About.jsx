import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import ContainerInfo from '../Components/ContainerInfo/ContainerInfo'

function About() {
  AOS.init();
  window.scrollTo(0, 0)

  return (
    <div>
      <ContainerInfo/>
     </div>
  )
}

export default About