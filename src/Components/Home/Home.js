import React, {useState}from 'react';
import gif from '../Assets/giphy.gif';
import './Home.css';
const Home = ()=>
{
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
                <div className='header' style={mode} >
                    <span className='h1'>Advancing </span>
                    <span className='h2'>Computing </span>
                    <span className='h3'>as</span>  
                </div>
                
                <div className='Gif-text' style={mode}>
                    <span className="gif" >
                        <img src = {gif} className = "gif-img"alt = "Gif" preload= "auto"/>
                    </span>  
                    <div className="Lines">
                         <span className='l1'>as </span>
                         <span className='l2'>Science </span>
                         <span className='l3'>and </span>
                         <span className='l4'>Profession </span>  
                    </div>
                </div>
            </div>   

        </>
    )
}

export default Home;
