import React, {useState}from 'react';
import gif from '../Assets/giphy.gif';
import './Home.css';
const Home = ()=>{
    const [mode, setmode] = useState({
        color : "#001A2B",
        backgroundColor : "white"
    })

    const Changemode = () =>{
        if(mode.color === "rgb(199, 199, 199)"){
            setmode({
                color: "#001A2B",
                backgroundColor: "white"
            })
        }
        else{
            setmode({
                color: "rgb(199, 199, 199)",
                backgroundColor : "#001A2B"
            })      
        }
    }
    return(     
        <>
            <div className='Home'style={mode}>
                <button onClick={Changemode}>Mode</button>
                <span className='header'>
                    <h1 style={mode}>Advancing Computing as </h1>
                </span>
                
                <div className='Gif-text' style={mode}>
                    <span className="gif">
                        <img src = {gif} className = "gif-img"alt = "Gif" />
                    </span>  
                    <span className="Lines" style={{paddingLeft: "4vw", fontSize: "4vw", fontWeight: "bold"}}>
                        as Science and Profession
                    </span>
                </div>
            </div>   

        </>
    )
}

export default Home;
