import React from 'react'
import * as ReactBoostrap from 'react-bootstrap'
import '../../Assets/sass/loading.scss'

function LoadingScreen() {
  return (
    <div className='loading'>
        <ReactBoostrap.Spinner className='loader' animation='border'/>
    </div>
  )
}

export default LoadingScreen