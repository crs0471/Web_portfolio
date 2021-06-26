import React from 'react'
import './Portfolio.css'
import coursera from "./coursera.png"
import cognative from "./cognative.jpg"
import codecamp from "./codecamp.png"
import cisco from "./cisco.jpg"
import windowSize from "react-window-size"
import { readyException } from 'jquery'

function width() {
    if(window.innerWidth>900){
        return(<div className="crousal-container">
        <div id="carouselExampleIndicators" class="carousel slide" data-interval="3000" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="card">
                    <img class="card-img-top" src={coursera} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5>Python 3 Programming</h5>
                        <p class="card-text">This specialization teaches the fundamentals of programming in
                        Python 3.</p>
                    </div>
                    </div>
                    <div class="card">
                    <img class="card-img-top" src={cisco} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5>the NDG Linux Unhatched</h5>
                        <p class="card-text">have obtained the Linux knowledge covered by the CompTIA A+ Certification</p>
                    </div>
                    </div>
                    <div class="card">
                    <img class="card-img-top" src={coursera} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5>The Bits and Bytes of Computer Networking</h5>
                        <p class="card-text">an online non-credit course authorized by Google and offered through Coursera</p>
                    </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <div class="card">
                    <img class="card-img-top" src={coursera} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5>Technical Support Fundamentals</h5>
                        <p class="card-text">an online non-credit course authorized by Google and offered through Coursera</p>
                    </div>
                    </div>
                    <div class="card">
                    <img class="card-img-top" src={codecamp} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5>Responsive Web Design</h5>
                        <p class="card-text">Completed approximately 300 hours of coursework</p>
                    </div>
                    </div>
                    <div class="card">
                    <img class="card-img-top" src={cognative} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5>Python 101 for Data Science</h5>
                        <p class="card-text">Fundamentals of data science with python</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
    }
    else{
        return(
    <div className="crousal-container">
        <div id="carouselExampleIndicators" class="carousel slide" data-interval="3000" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="card">
                    <img class="card-img-top" src={coursera} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5>Python 3 Programming</h5>
                        <p class="card-text">This specialization teaches the fundamentals of programming in
                        Python 3.</p>
                    </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <div class="card">
                    <img class="card-img-top" src={cisco} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5>the NDG Linux Unhatched</h5>
                        <p class="card-text">have obtained the Linux knowledge covered by the CompTIA A+ Certification</p>
                    </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <div class="card">
                    <img class="card-img-top" src={coursera} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5>The Bits and Bytes of Computer Networking</h5>
                        <p class="card-text">an online non-credit course authorized by Google and offered through Coursera</p>
                    </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <div class="card">
                    <img class="card-img-top" src={coursera} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5>Technical Support Fundamentals</h5>
                        <p class="card-text">an online non-credit course authorized by Google and offered through Coursera</p>
                    </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <div class="card">
                    <img class="card-img-top" src={codecamp} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5>Responsive Web Design</h5>
                        <p class="card-text">Completed approximately 300 hours of coursework</p>
                    </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <div class="card">
                    <img class="card-img-top" src={cognative} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5>Python 101 for Data Science</h5>
                        <p class="card-text">Fundamentals of data science with python</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
    }
    
}

const Portfolio = () => {
    
    return (
        <div className='portfolio' id='portfolio'>
            <div className="container">
                <div className="row">
                   <h1>portfolio</h1>
                </div>
                <div className="row">
                    {width()}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
