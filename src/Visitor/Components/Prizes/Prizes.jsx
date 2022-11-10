import React from 'react'
import Prize from '../../Assets/images/Prizes.jpeg'
import '../../Assets/sass/ImageAtRandomPage.scss'

function Prizes() {
  return (
    <div>
      <div className=''>
        <img className='d-block mx-auto my-4 CustomImg' src={Prize} alt="Prize_Image" />
        </div>
    </div>
  )
}

export default Prizes