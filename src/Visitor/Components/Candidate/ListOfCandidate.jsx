import React from 'react'

import { Container } from 'react-bootstrap'
import '../../Assets/sass/tableList.scss'
import TableInfo from './elements/TableInfo'

function ListOfCandidate() {

  return (
    <div>

        <Container className="my-5 mx-3 border border-2 d-block mx-auto">

          <h1 className='fs-1 fw-bold text-primary p-4 text-center'>
            ລາຍຊື່ຜູ້ຮ່ວມລຸ້ນໂຊກ
          </h1>

          <TableInfo />

        </Container>

    </div>
  )
}

export default ListOfCandidate