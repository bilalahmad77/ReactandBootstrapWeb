import React from 'react';
import about_image from './images/about.jpeg';
import Common from "./Common"
const About =() => {
    return (
        <>
        <Common 
        name="Welcome to About us Page" 
        imgsrc= {about_image} 
        visit="/contact"
        btname="Contact Now"
        />
        </>
    );
}

export default About;