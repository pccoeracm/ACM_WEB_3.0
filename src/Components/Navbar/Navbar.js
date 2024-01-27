import React from 'react'
import logoacm from '../Assets/acmLogobg.png'
import night from '../Assets/moon-svgrepo-com.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <div className="logo left">
                <img src={logoacm} alt="logo" />
            </div>
            <div className="right">
                <a href="www.google.com" className="modes modes-d">
                    <span data-text="Night">Night</span>
                    <img src={night} alt="" srcset="" />
                </a> 
            </div>
            <div className="menusection">
                <div class="menu">
                    <div class="circle">
                        <div class="lines">
                            <div class="l1"></div>
                            <div class="l2"></div>
                        </div>
                    </div>
                    <ul class="container">
                        <li class="link1">
                            <a href="#">
                                <h2>Team</h2>
                                <i class='bx bx-ghost'></i>
                            </a>
                        </li>
                        <li class="link2">
                            <a href="#">
                                <h2>About</h2>
                                <i class='bx bx-ghost'></i>
                            </a>
                        </li>
                        <li class="link3">
                            <a href="#">
                                <h2>Home</h2>
                                <i class='bx bx-home-alt'></i>
                            </a>
                        </li>
                        <li class="link4">
                            <a href="#">
                                <h2>Blogs</h2>
                                <i class='bx bx-ghost'></i>
                            </a>
                        </li>
                        <li class="link5">
                            <a href="#">
                                <h2>Events</h2>
                                <i class='bx bx-ghost'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        
    </>
  )
}

export default Navbar