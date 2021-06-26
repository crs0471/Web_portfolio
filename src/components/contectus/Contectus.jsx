import React from 'react'
import './Contectus.css'
import insta from "./insta.png"
import linkedin from "./linkedin.jpeg"
import mail from "./mail.png"
import contect from "./contect.png"
import address from "./address.png"
import wapp from "./wapp.png"
import swal from '@sweetalert/with-react'




function call(){
    swal(
        <div>
          <h1>Call us </h1>
          <h2>82003 14290</h2>
        </div>
      )
}
function add(){
    swal(
        <div>
          <h1>Address</h1>
          <h3>A-104, New green city, Kharwarnagar<br/>Udhna, Surat - 394210</h3>
        </div>
      )
}
function wp(){
    swal(
        <div>
          <h1>Whatsapp us </h1>
          <h3>82003 14290</h3>
        </div>
      )
}

const Contectus = () => {
    return (
        <div class='contectus' id='contectus'>
            <div className="container">
                <div class="irow">
                    <div class="icolumn">
                        <a href="https://www.instagram.com/crs0471/" target="_blank"><img src={insta} alt="insta" /></a>
                        <a href="https://www.linkedin.com/in/crs-patel-3497521aa/" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                    </div>
                    <div class="icolumn">
                        <img onClick={call} src={contect} alt="contect"/>
                        <a href="mailto:cherishpatel2001@gmail.com" ><img src={mail} alt="mail" /></a>
                    </div>
                    <div class="icolumn">
                    <img onClick={wp} src={wapp} alt="whatsapp" />
                    <img onClick={add} src={address} alt="address" />
                    </div> 
                </div>
            </div>    
        </div>
    )
}

export default Contectus
