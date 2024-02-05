import React from 'react'
import Image from './assets/Image1.svg'
import Image2 from './assets/image2.svg'
import './Events.css'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Navbar from '../Navbar/Navbar';
const Events = () => {
  return (
    <>
    <Navbar />
    <div className='events'>
    <h1>Upcoming Events</h1>
    <img  className='image1' src= {Image} alt='image' /> 
    <div className='text-box1'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>
   
    <img className='image2' src= {Image2} alt='image' /> 
    <div className='text-box2'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>
   </div>
   <button>more  <TrendingFlatIcon /> </button>
x
    </>
  )
}

export default Events