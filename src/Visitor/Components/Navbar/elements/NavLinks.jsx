import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function NavLinks() {
  return (
    <div>
      <Nav className='Nav' style={{ height: "auto" }}>
        <CustomLink to='/luckydraw'>ຫນ້າຫລັກ</CustomLink>
        <CustomLink to='/luckydraw/Random'>ຫນ້າສຸ່ມ</CustomLink>
        <CustomLink to='/luckydraw/Candidate'>ລາຍຊື່ຜູ້ມີສິດສຸ່ມ</CustomLink>
        <CustomLink to='/luckydraw/Winner'>ຜູ້ໂຊກດີ</CustomLink>
        <CustomLink to='/luckydraw/About'>ກ່ຽວກັບ</CustomLink>
      </Nav>
    </div>
  )
}

export default NavLinks

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <Nav>
      <Link className={`item ${isActive ? "active" : ""}`} to={to} {...props}>
        {children}
      </Link>
    </Nav>
  )
}