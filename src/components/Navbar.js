import React from 'react'
import {Link} from 'react-scroll'
import {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'

function Navbar(){

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () =>{
        if(window.scrollY >= 100) {
            setNavbar(true);
        }
        else
        {
            setNavbar(false);
        }

        
    };

    window.addEventListener('scroll', changeBackground);

    return(
        <nav className ={navbar ? 'navbar active' : 'navbar'}>

            <input type = "checkbox" id="check"></input>
            <label for = "check" className ="checkbtn">
                <FontAwesomeIcon icon={faBars} />
            </label>
            <ul >
                <li className="nav-link"><Link className ="home-scroll" to="ss-home" smooth={true} duration={1000}>Home</Link>
                </li>

                <li className="nav-link"><Link className ="about-scroll" to="ss-about" smooth={true} duration={1000}>About Me</Link></li>

                <li className="nav-link"><Link className ="home-scroll" to="ss-tools" smooth={true} duration={1000}>Skills/Tools</Link>
                </li>

                <li className="nav-link"><Link className ="project-scroll" to="ss-project" smooth={true} duration={1000}>Projects</Link></li>

                <li className="nav-link"><Link className ="contact-scroll" to="ss-contact" smooth={true} duration={1000}>Contact</Link></li>
            </ul>
            
        </nav>


    )
}

export default Navbar
