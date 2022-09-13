import React, { useRef } from 'react';
import {useState} from 'react';
import emailjs from 'emailjs-com'
import Socials from './Socials'
import SideEmail from './SideEmail'


function Contact() {

    const[result, showMsg] = useState(false);
    const form = useRef();

    const Result = () =>{
        return(
            <p>The message has been successfully submitted</p>
        )
    }

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_4bwanss', 'template_424tgue', form.current, '4OC7eWxCKZ4e8vfvC').then((result) => 
            {
                console.log(result.text);
            },(error) => {
            console.log(error.text);
            });

            form.current.reset();
            showMsg(true);
    }
    
    return (

        <section className ="contact" id ="ss-contact">

        <div className ="wrapper" >
            <h1>Contact</h1>
            <br/>
            <div className ="contact-info">
                <h2>Get In Touch</h2>
                <br/>
                <p>
                I am currently looking for new opportunities in web and software development. Feel free to contact me anytime as my email are open and I will try to reply ASAP. 
             </p>
             <SideEmail/>
            </div>

            

             <br/>

             <form className = "contactForm" ref={form} onSubmit={sendEmail}>
                <br/>
                <input className ="Fname" type="text" name="name" placeholder ="Full Name" required></input>
                <br/>
                <input className ="eMail" type="email" name="user_email" placeholder="Email" pattern = "\A[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+\Z" required></input>
                <br/>
                 <input type ="number" name ="phone" placeholder ="Phone Number"></input>
                 <br/>
                 <br/>
                
                <textarea name = "message" id = "msg" rows="7" cols="50" placeholder="Write message here ..."></textarea>
                <br/>
                <button>Submit</button>
                <br/>

                <div className ="formMsg">{result ? <Result/> : null}</div>

           
             </form>

             

            {/* <Socials/>              */}



        </div>

        </section>

        
    )
}

export default Contact