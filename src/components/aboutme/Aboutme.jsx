import React from "react"
import './Aboutme.css'
import avtar from './avtar.png'

const Aboutme = () => {
    return (
        <div className='aboutme ' id='aboutme'>
            <div className="container aboutmewrapper">
                <div className="avtar">
                    <img src={avtar} alt="avtar" />
                </div>
                <div className="details">
                    <p className="text1">About me</p>
                    <p className="text2">
                        Belongs form BTech.IT background. <br></br>
                        A dedicated and passionate web devloper and python devloper. <br/>
                        Currently working alone but looking for people who can collaborate. <br/>  
                        Love to code, Love to collaborate.                  </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutme

