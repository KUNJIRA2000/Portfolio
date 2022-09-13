import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';



function Socials() {


    return (

        <section className = "socials">

            <div className ="wrapper">
                <a href = "https://www.facebook.com/kunjira.fincher.1/">Facebook <FontAwesomeIcon icon={faFacebook} /></a>
                <a href = "https://www.instagram.com/kunjiraaaa/">Instagram <FontAwesomeIcon icon={faInstagram} /></a>
                <a href = "https://github.com/KUNJIRA2000">Github <FontAwesomeIcon icon={faGithub} /></a>
                <a href = "https://www.linkedin.com/in/kunjira-pruekthaisong-960ba1176/">LinkedIn <FontAwesomeIcon icon={faLinkedin} /></a>

            </div>


        </section>

    )
}


export default Socials