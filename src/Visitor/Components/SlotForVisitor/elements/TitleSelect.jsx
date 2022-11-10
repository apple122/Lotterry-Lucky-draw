import React from 'react'

function TitleSelect() {
    const token = localStorage.getItem('token')
    const CheckToken = localStorage.getItem('CheckToken')
  return (
    <div>{token && token === CheckToken ? <p className="text-center fs-1 mt-5">ເລືອກລາງວັນ</p> : ""}</div>
  )
}

export default TitleSelect