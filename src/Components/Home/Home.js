import React from 'react';
import gif from '../Assets/giphy.gif';
import './Home.css';
const Home = ()=>
{
    return(     
        <>
            <div className='Home'>
                <div className='header' >
                    <span className='h1'>Advancing </span>
                    <span className='h2'>Computing </span>
                    <span className='h3'>as</span>  
                </div>
                
                <div className='Gif-text'>
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
