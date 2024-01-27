import { useRef, useState } from "react";
import "./Navbar.css";
//import logo from "../../../public/acmLogo-PhotoRoom.png-PhotoRoom.png";
function  Navbar ()
{   
    const navRef = useRef();
    //responsive menu
    const displaynav = ()=>{
        navRef.current.classList.toggle("responsiveNav");
    }

    //Change mode

    //Mode text State
    const [modeText, setmodeText] = useState("Night")

    //Color scheme
    const [mode, setmode] = useState({
        color : "white",
        backgroundColor : "rgb(23, 23, 75)"
    })
    //Mode Icon
    const [modeIcon, setmodeIcon] = useState(false);
    const Changemode = () =>{
        if(mode.color === "white"){
            setmode({
                color: "rgb(23, 23, 75)",
                backgroundColor: "white"
            })
            setmodeText("Night")
            setmodeIcon(!modeIcon)
        }
        else{
            setmode({
                color: "white",
                backgroundColor : "rgb(23, 23, 75)"
            })
            setmodeText("Light")
            setmodeIcon(!modeIcon)
        }
    }
    return(
        <header style = {mode}>
            <img src = "../acmLogo-PhotoRoom.png-PhotoRoom.png" alt="ACMxPCCOER logo" width="170" height = "150"/>
        <div className="menu" style = {mode}>    
            <nav ref={navRef} style = {mode}>
                <a href="/#" style = {mode}>Home</a>
                <a href="/#" style = {mode}>About Us</a>
                <a href="/#" style = {mode}>Scores</a>
                <a href="/#" style = {mode}>Events</a>
                <a href="/#" style = {mode}>Team</a>
                <button className="nav-btn nav-close" style = {mode} onClick = {displaynav}>
                    <i className = "fa-solid fa-xmark"></i>
                </button> 
            </nav>
        </div> 
            <button className="dark" style = {mode} onClick={Changemode}>{modeText}
                {modeIcon ? <i className="fa-regular fa-moon"></i> :  <i className="fa-regular fa-sun"></i>}
            </button>
            <button className="nav-btn" style = {mode} onClick = {displaynav}>
                <i className="fa-solid fa-bars"></i>
            </button>
        </header>
    );
    
}



export default Navbar;