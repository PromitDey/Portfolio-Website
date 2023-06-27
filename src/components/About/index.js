import { useEffect, useState } from 'react';
import {Loader} from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faBootstrap} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';




const About = () => {


    const[letterClass, setLetterClass]= useState('text-animate')

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId) 
                }
    }, [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.
                </p>
                <p> 
                    I'm confident, curious, and perpetually working on improving my chops one design problem at a time.
                </p>
                <p>
                    I'm tech obsessed with new gadgets and new techs. By profession I'm a Software Developer and by passion a Video Game Enthusiast.
                </p>
                <p>
                    <h2>Education-</h2>
                    <h3>Undergrad</h3>
                    
                        Asansol Engineering College, Asansol<br />
                        (2020-24)<br/>
                        B.Tech Computer Science and Engineering<br/>

                    <h3>High School</h3>
                    
                    D.A.V Public School,Kanyapur, Asansol<br />
                    (2018-20)<br/>
                    PCM with Computer Science<br/>
                    
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faBootstrap} color='#7609F6'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#f06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28a4d9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ed4f4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#efd81d'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#ec4d28'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About;