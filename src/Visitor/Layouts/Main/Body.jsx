import React from 'react'
import Router from '../../Routes/route';
import ButtonScrollToTop from '../../Components/ButtonScrollToTop/ButtonScrollToTop'

function Body() {
  return (
    <div>
        <body className='d-flex flex-column min-vh-100'>
        <Router/>
      <ButtonScrollToTop/>
        </body>
    </div>
  )
}

export default Body