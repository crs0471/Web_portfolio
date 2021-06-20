import React from "react"
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Cherish patel</h1>
                <Typed className="typed-text"
                    strings = {['python devloper','web devloper']}
                    typeSpeed = {30}
                    backSpeed = {60}
                    loop
                />
                <a className="btn-contactus" href="#">Contact us</a>
            </div>
        </div>
    )
}

export default Header
