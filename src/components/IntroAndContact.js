import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const IntroAndContact = () => {
    const iconStyle = {
        marginRight: '10px',
    }

  return (
    <div>
        <h1>Hi, I'm Yihao</h1>
        <h3 style={{fontFamily: 'Playfair Display'}}>CS @ Georgia Tech / Full-Stack Developer / Travel Enthusiast</h3>
        <a href="https://github.com/Ma1h01" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" color='white' style={iconStyle}/>
        </a>
        <a href="mailto:yihaomai@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" color='white'style={iconStyle}/>
        </a>
        <a href="https://www.linkedin.com/in/yihaomai/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" color='white'style={iconStyle}/>
        </a>
    </div>
  )
}

export default IntroAndContact