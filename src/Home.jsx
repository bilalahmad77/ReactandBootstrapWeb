import React from 'react';
import home_image from './images/home.png';
import Common from './Common';
const Home =() => {
    return (
        <>
      <Common
      name="Grow your Business" 
      imgsrc= {home_image} 
      visit="/service"
      btname="Get Started"
      />
        </>
    );
}

export default Home;