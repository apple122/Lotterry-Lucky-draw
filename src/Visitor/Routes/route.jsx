import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import PageNotFound from './PageNotFound'
import Winner from '../Pages/Winner'
import About from '../Pages/About'
import Event from '../Pages/Event'
import RandomPage from '../Pages/RandomPage'
import TableWinnerDetail from '../Pages/TableWinnerDetail'
import LoginPage from '../Pages/LoginPage'
import Candidate from '../Pages/Candidate'

function route() {
  return (
    <div>
    <Routes>
    <Route path='/luckydraw' element={<HomePage/>}/>
    <Route path='/luckydraw/Winner' element={<Winner/>}/>
    <Route path='/luckydraw/About' element={<About/>}/>
    <Route path='/luckydraw/DetailEvent/:id' element={<Event/>}/>
    <Route path='/luckydraw/Random' element={<RandomPage/>}/>
    <Route path='/luckydraw/TableWinnerDetail' element={<TableWinnerDetail/>}/>
    <Route path='/luckydraw/Login' element={<LoginPage/>}/>
    <Route path='/luckydraw/Candidate' element={<Candidate/>}/>
    <Route path='/luckydraw/*' element={<PageNotFound/>}/>
    </Routes>
    </div>
  )
}

export default route