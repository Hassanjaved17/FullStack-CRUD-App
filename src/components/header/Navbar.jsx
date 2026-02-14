import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">MERN CRUD</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Users </Link></li>
            <li><Link to="/adduser">Add User </Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-error">Logout</a>
        </div>
      </div>
    </>
  )
}

export default Navbar