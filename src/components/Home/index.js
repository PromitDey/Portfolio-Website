import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/1_1.png";
import "./index.scss";
import { useDeferredValue, useEffect, useState } from "react";
import{Loader} from 'react-loaders';
import AnimatedLetters from "../AnimatedLetters";
import Logo from "../Logo"; 

const Home = () => {
    const[letterClass, setLetterClass]= useState('text-animate')
    
    const nameArray = ['r', 'o', 'm', 'i', 't']
    const jobArray = ['w','e','b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r','.']


    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId) 
                }
    }, [])


return(
    <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <br/> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer"/>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
            </h1>
            <h2>
                Frontend Developer | Software Engineer
            </h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
            <Link to="https://drive.google.com/file/d/12RWPv_a2UCdurOh22yVdF5XE0o4M13A_/view?usp=sharing" target="_blank" className="flat-button-cv">Download CV</Link>
        </div>
        <Logo />
    </div>
    <Loader type='pacman' />
    </>
)
}
export default Home;