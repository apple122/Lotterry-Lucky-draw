import React from 'react'
import Carousels from '../Components/Banner/Carousel'
import LuckyPeoplePreview from '../Components/LuckyPeoplePreview/LuckyPeoplePreview'
import ActivityPreview from '../Components/ActivityPreview/ActivityPreview'
import Ads from '../Components/Advertisment/Ads'

function HomePage() {
  window.scrollTo(0, 0)
  return (
    <div>
      
        <Carousels/>
        <LuckyPeoplePreview/>
        {/* <Ads/> */}
        <ActivityPreview/>
    </div>
  )
}

export default HomePage