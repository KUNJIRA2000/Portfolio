import React from 'react';
import {useState} from 'react';
import Navbar from './Navbar'
import SideEmail from './SideEmail'
import Socials from './Socials';
 
function Home() {


    return (
        
        <section className ="home" id="ss-home">
            <Socials/>
        

            <div className ="wrapper">


            <div className="intro-hi">
                <p>Hi, I'm</p>
            </div>

            <div className ="fName">
                <p1>Kunjira</p1>
            </div>
            <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            <div className ="lName">
                <p1>Pruekthaisong</p1>
            </div>

            <div className="home-desc">
                <p>Software engineering / Information system student at Swinburne University of technology</p>
                <br/>
            </div>


          
            </div>

    

        </section>
    )
}

export default Home


