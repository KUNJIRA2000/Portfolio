import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSmile} from '@fortawesome/free-solid-svg-icons';

function Footer() {

    return (
        <div className = "container-footer">
            
            <p><FontAwesomeIcon icon={faSmile} />  Designed and Builted by Kunjira Pruekthaisong || 2022</p>
        </div>
    )
}

export default Footer