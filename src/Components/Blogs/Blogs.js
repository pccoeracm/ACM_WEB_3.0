import React, { useEffect } from 'react';
import { useState } from 'react';


import './Blog.css';
 
const images = [
  '/blogs/android-vs-web.png',
  './blogs/augmenting-the-virtual.png',
  './blogs/casting-intelligence.png',
  './blogs/crypto.png',
  './blogs/the.png',
 ];
const descriptions = [
  { title: 'Android development vs web development | Reality', author: '-OMKAR GHOTEKAR' },
  { title: 'Augmenting the virtual', author: '-AMAN HANSPAL' },
  { title: 'Casting Intelligence', author: '-CHAITANYA KAMBLE' },
  { title: 'Cryptocurrency- Are they great or threat', author: '-PRANAV YEDE' },
  { title: 'The Premice of Cryptocurrency', author: '-SHIVAM BARKE' },
  
 
];

function Blog() {
  
  const [showMore, setShowMore] = useState(false);
  const maxCardsToShow = showMore ? images.length : 3;
  const [theme, setTheme] = useState("light-theme")
  const toggleTheme = ()=>{
    theme==="dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };
  return (
    <>
    <div className="main">
    
    < button href="#" className="btn" onClick={ ()=> toggleTheme()}> Toggle Mode</button>
    <h1>Blogs</h1>
   
    <div className="card-container" >
       
      {images.slice(0, maxCardsToShow).map((image, index) => (
        <div key={index} className="card" >
          <img src={image} alt={`Blog ${index + 1}`} /> 
          <div className="card-content">
          <h2>{descriptions[index].title}</h2>
           <p className="author">{descriptions[index].author}</p>
           </div>
        </div>
      ))}
      </div>
      
      
      {images.length > 3 && (
        <button className="show-more-button" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show less' : 'Show More'}
        </button>
      )}
    
    
    </div>
    </>
  );
}

export default Blog;