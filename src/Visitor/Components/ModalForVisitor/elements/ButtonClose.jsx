import React from 'react'
import Button from "react-bootstrap/Button";

function ButtonClose() {

  function reload() {
    window.location = "/Random";
  }
  
  return (
    <div>
      <Button className="w-25 d-block mx-auto my-3 fs-3" onClick={reload}>
        ປິດ
      </Button>
    </div>
  )
}

export default ButtonClose