import React from 'react';


function Card({githubLink, cardImage})
{
    return (
            <div className = "card">

                <a href={githubLink} target="_blank" rel="noreferrer"> 

                <img src={cardImage} alt="cardImage" className ="img-card">
                </img>

                
                </a>

                

                
               
            </div>
        
    )
}

export default Card