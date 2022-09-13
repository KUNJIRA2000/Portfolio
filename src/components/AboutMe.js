import React from 'react';
import MyImage from '../assets/IMG_8782.png'
import {Link} from 'react-scroll'


function AboutMe() {
    return (

        <section className = "AboutMe" id="ss-about">
        <div className = "wrapper">
            <h2>About Me</h2>
            <h1>Who is Kunjira ?</h1>

            <div id="ImageContainer">
            <img className ="myPicture" src ={MyImage} ></img>
            </div>
            

            <div className = "myInfo">

                <p className ="op-sentence">An aspiring Software Engineer/ Web developer.</p>

                <p className ="abtMe-p">
                    Growing up from a small child to a teenager, for hours I would watch Carl Sagon and Neil deGrasse Tyson documentaries on planets and stars. This further develops into a deep interest in <span>Artficial Intelligence</span> and <span>Machine Learning</span>. It was not until my teenage years where (my parents would often praised my computers skills from fixing their computers by just simply turning it on and off) I took interest in programming and perhaps one day I will work for NASA. However, during my tertiary studies I was captivated by web development.
                    
                    <br/>
                    <br/>
                   I am currently studying a double degree BA in <span>Software Engineering</span> and a BA in <span>Business Information System</span>.

                </p>

                <br/>
                <br/>

                <Link className ="AboutMe-scroll" to="ss-contact" smooth={true} duration={1000}>GET IN TOUCH !</Link>

                
                

                
            </div>


        </div>
        </section>
    )
}

export default AboutMe


{/* <br/>
                <br/>
                Programming languages and technologies that I have worked with are:

                <ul>
                    <li>C++</li>
                    <li>C#</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>PHP</li>
                    <li>Object-Oriented Programming (OOP)</li>
                </ul> */}