import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import  AnimatedLetters from "../AnimatedLetters";
import {Loader} from "react-loaders";
import "./index.scss";

const Contact = () =>{
    
    const[letterClass, setLetterClass]= useState('text-animate');

    const refForm = useRef();

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId) 
                }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                "service_f221f0p",
                "template_39mzf7t",
                refForm.current,
                "W6HgfXCBfsVc029Fi"
            )
            .then(
                ()=>{
                    alert("Message Successfully Sent!")
                    window.location.reload(false)
                },
                ()=>{
                    alert("Failed to send message. Try Again!!")
                }
            )
    }
    
    return(
        
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a','c', 't', ' ', 'M', 'e']} 
                        idx={15}
                        />
                    </h1>
                    <p>
                    I am interested in freelance opportunities - especially on ambitious or 
                    large projects. However, if you have any other requests or questions, don't 
                    hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject"required/>
                                </li>    
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="Send"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Promit Dey,
                    <br/>
                    Asansol,
                    <br/>
                    West Bengal
                    <br/>
                    India<br/>
                    <span>promitdey140@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[23.688044,86.969745]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[23.688044,86.969745]}>
                            <Popup>
                                Promit lives here, come over for a cup of tea :)
                            </Popup>

                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact;