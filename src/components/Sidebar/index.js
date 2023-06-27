import './index.scss';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/Gradient.png';
import LogoSubtitle from '../../assets/images/sub-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faClose, faEnvelope, faHome, faSuitcase, faUser} from '@fortawesome/free-solid-svg-icons';
import{faLinkedin, faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);


    return(
    <div className ='nav-bar'>
        <Link className='logo' to='/'>
            <img className = "own-logo" src ={LogoS} alt="logo"/>
            <img className = 'sub-logo' src ={LogoSubtitle} alt = "myname" />
        </Link>
        <nav className={showNav ? "mobile-show" : ""}>
            <NavLink 
            onClick={()=>setShowNav(false)}
            exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            onClick={()=>setShowNav(false)}
            exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            onClick={()=>setShowNav(false)}
            exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            onClick={()=>setShowNav(false)}
            exact="true" activeclassname="active" className ="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon
            onClick={()=>setShowNav(false)}
            icon={faClose}
            color='#ffd700'
            size='3x'
            className='close-icon'
            />
        </nav>
        <ul>
            <li>
                <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/promitdey097/">
                    <FontAwesomeIcon icon={faLinkedin} alt="Linkedin icon" color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel="noreferrer" href="https://github.com/PromitDey">
                    <FontAwesomeIcon icon={faGithub} alt="Github icon" color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel="noreferrer" href="https://discord.gg/RR6HSY8ucj">
                    <FontAwesomeIcon icon={faDiscord} alt="Discord icon" color='#4d4d4e'/>
                </a>
            </li>
        </ul>
        <FontAwesomeIcon
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ffd700"
            size="3x"
            className='hamburger-icon'
        />
    </div>
    )
}

export default Sidebar;