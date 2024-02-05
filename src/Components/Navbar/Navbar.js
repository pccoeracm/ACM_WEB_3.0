import React, { useState } from 'react'
import logoacm from '../Assets/acmLogobg.png'
import night from '../Assets/moon-svgrepo-com.svg'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("menu unmenuclicked")
    const [hline, setLines] = useState("hmblines unClicked")
    const [circle, setCircle] = useState("circle unclickedCircle")
    const [link, setLink] = useState("link unclickedLink")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setMenu("menu menuclicked")
            setLines("hmblines clicked")
            setCircle("circle clickedCircle") 
            setLink("link clickedLink")
        }

        else {
            setMenu("menu unmenuclicked")
            setLines("hmblines unclicked") 
            setCircle("circle unclickedCircle")
            setLink("link unclickedLink")
        }
        setIsMenuClicked(!isMenuClicked)
        
    }

  return (
    <>
        <nav className='navbar'>
            <div className="logo left">
                <img src={logoacm} alt="logo" />
            </div>
            <div className="right">
                <a href="#mode" className="modes modes-d">
                    <span data-text="Night">Night</span>
                    <img src={night} alt="" srcset="" />
                </a> 
            </div>
            <div className="menusection">
                <div class={menu}>
                    <div className="c-before"></div>
                    <div class={circle} onClick={updateMenu}>
                        <div class="lines">
                            <div class={hline}></div>
                            <div class={hline}></div>
                        </div>                        
                        
                    </div>
                    <ul class="container">
                        <li className={link}>
                            <a href="#">
                                <h2 data-text="Team">Team</h2>
                                <i className='bx bx-ghost'></i>
                            </a>
                        </li>
                        <li className={link}>
                            <a href="#">
                                <h2 data-text="About">About</h2>
                                <i className='bx bx-ghost'></i>
                            </a>
                        </li>
                        
                        <li className={link}>
                        <Link to={`/`}>
                            <a href="#home">
                                <h2 data-text="Home">Home</h2>
                                <i className='bx bx-home-alt'></i>
                            </a>
                            </Link>
                        </li>
                        
                        <li className={link}>
                            <a href="#">
                                <h2 data-text="Blogs">Blogs</h2>
                                <i className='bx bx-ghost'></i>
                            </a>
                        </li>
                        <Link to ={`/Events`}>  
                        <li className={link}>
                            <a href="#">
                                <h2 data-text="Events">Events</h2>
                                <i className='bx bx-ghost'></i>
                            </a>
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
        
    </>
  )
}

export default Navbar