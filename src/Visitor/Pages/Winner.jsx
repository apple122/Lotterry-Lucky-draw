import React from 'react'
import 'react-bootstrap'
import '../Assets/sass/renderPageNumbers.scss'
import ListOfWinner from '../Components/ListOfWinner/ListOfWinner'

function LuckyListName() {
  window.scrollTo(0, 0)
  return (
    <div>
        <ListOfWinner/>
    </div>
  )
}

export default LuckyListName