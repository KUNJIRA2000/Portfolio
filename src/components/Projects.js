import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from './Card'
import {BrowserRouter as Router} from 'react-router-dom';
import Wiki from '../assets/Wiki.png'
import AccessControl_1 from '../assets/AccessControl_1.png'
import Pharmacy from '../assets/Pharmacy.png'
import FYRP from '../assets/FYRP.png'
function Projects() {

    const breakPoints = [
        {width: 500, itemsToShow: 1},
        {width: 700, itemsToShow: 2},
        {width: 1200, itemsToShow: 3},
        {width: 1500, itemsToShow: 4},
    ];

    return (
        <section className ="projects" id="ss-project">

            <div className ="wrapper">

            <h2>Projects</h2>
            <h1>Projects I've worked on</h1>

        <div className = "Project-list">
                
                        <Router className = "project-completed">
                        <Carousel breakPoints = {breakPoints}>

                            <div className = "project-desc">
                                    <h3>01. Access control System with GLCD using WOKWI simulation- Embedded microcontrollers (Team Project)</h3>
                                    <br/>
                                    <p>An access control system using Arduino Mega, SSD1306 OLED display, NTC temperature sensor, DS1307 RTC Module. System password was stored using EEPROM and it is needed to access the system to continue with further actions which includes updating user's password and determining the current time and temperature using the embedded microcontrollers. 
                                        <br/>
                                    Further information can be found on GitHub!
                                    </p>

                            </div>


                            <Card githubLink = "https://github.com/KUNJIRA2000/Access-control-System-with-GLCD" cardImage = {AccessControl_1}></Card>

                            <div className = "project-desc">
                                        <h3>02. Wiki quiz website</h3>
                                        <br/>
                                        <p>WIKI QUIZ web applications providing users with information on wiki websites and it's advantages and disadvantages features. User's are able to test their knowledge on wiki websites through a quiz that was made using HTML form and a php back-end database to calculate the user's score and number of trials.
                                            <br/>
                                            Further information can be found on GitHub!
                                             </p>
    
                             </div>

                            <Card githubLink = "https://github.com/KUNJIRA2000/Wiki-Quiz-Website" cardImage = {Wiki}></Card>

                            <div className = "project-desc">
                                        <h3>03. People Pharmacy Health System (Team Project)</h3>
                                        <br/>
                                        <p>A sales system was developed for a pharmacy case-study. The proposed sales system is a web application with a login system that can only be access by user's with passwords. The system allows users to add, view and update sales record. To assist with sales management the application provides predictions of future sales and allows user's to download sales record in CSV file.

                                            <br/>
                                            Further information can be found on GitHub!
                                        </p>
    
                             </div>

                            <Card githubLink = "https://github.com/KUNJIRA2000/MSP-Group4" cardImage = {Pharmacy}></Card>

                        
                        </Carousel>
                        
                         </Router>

                       <br/><br/>
                    
                         
                 <h1>Current Work</h1>
                    
                 <Router className = "project-current">
                        <Carousel breakPoints = {breakPoints}>

                            <div className = "project-desc">
                                    <h3>Final Year Project - Aurora Kinetic Sculpture (Team Project)</h3>
                                    <br/>
                                    <p>An interactive kinetic scuplture inspired by the Singapore Changi Airport 'Rain Drop' scuplture. The piece of kinetic art will be sensitive to sound and gesture which will promotes interactivity between sculpture and its audience. CMU pocketsphinx will use to achieve speech recogntion and Deep Learning will help to achieve gesture recogntion. Arduino and several motor will be used to enable the movements of the sculpture.
                                        <br/>
                                        Further information can be found on GitHub!
                                    </p>

                            </div>

                            <Card githubLink = "https://github.com/KUNJIRA2000/Final-Year-Project---Kinetic-art-scuplture" cardImage = {FYRP}></Card>

            
                        </Carousel>
                        
                         </Router>
                
                <br/>

                </div>
      

            </div> 

        </section>
    )

}

export default Projects






            