import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ fontFamily: 'sans-serif', textTransform: 'uppercase' }} className="navbar navbar-expand-lg navbar-secondary fs-5  bg-none ">
      <div className="container-fluid ms-4 me-4">
        <a className="navbar-brand" href="#">
          <img src="https://dummyimage.com/100x50/000/fff" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item">
              <Link className="nav-link btn  m-3 " to='/home' >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn  m-3" to='/about'>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn  m-3" to='/dashboard'>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn  m-3" to='/premierleaguedata'>
                Premier League Data
              </Link>
            </li>

          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link btn  m-3" to='/login'>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link underline btn  m-3" to='/signup'>
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar