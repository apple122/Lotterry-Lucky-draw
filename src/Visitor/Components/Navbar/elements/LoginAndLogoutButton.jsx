import React from 'react'
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function LoginAndLogoutButton() {
  const token = localStorage.getItem('token')
  const CheckToken = localStorage.getItem('CheckToken')
  const [popup, setPopup] = useState(false)
  function logout() {
    Swal.fire({
      title: 'ທ່ານຈະອອກຈາກລະບົບແທ້ຫລືບໍ່?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ອອກຈາກລະບົບ',
      cancelButtonText: 'ຍົກເລີກ',
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token')
        localStorage.removeItem('prize')
        localStorage.removeItem('CheckToken')
        window.location = "/luckydraw"
      }
    })

  }


  return (
    <div>
      <div>
        {token && token === CheckToken ? <Nav.Link className='logout' onClick={logout}>ອອກຈາກລະບົບ</Nav.Link> : <Nav.Link href="http://www.bestech.la/luckydraw/admin" target="_blank" rel="noopener noreferrer" className='itemLogin bg-white'><a className=''>ຫນ້າ Login ຂອງພະນັກງານ</a></Nav.Link>}
      </div>
    </div>
  )
}

export default LoginAndLogoutButton