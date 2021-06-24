import React from 'react'
import "./Services.css"
import webdevimg from "./webdev.jpg"
import pydevimg from "./pydev.jpg"

const Services = () => {
    return (
        <div className='services' id='services'>
            <div className="container">
                <a href="https://en.wikipedia.org/wiki/Web_development">
                <div className="webdev-card">
                    <div className="head"></div>
                    <div className="image"><img src={webdevimg} alt="webdevimg" /></div>
                    <div className="detail"></div>
                </div>
                </a>
                <a className='pydevlink' href="https://en.wikipedia.org/wiki/Python_(programming_language)">
                <div className="pydev-card">
                    <div className="head"></div>
                    <div className="image"><img src={pydevimg} alt="pydevimg" /></div>
                    <div className="detail"></div>
                </div>
                </a>

            </div>
        </div>
    )
}

export default Services 
