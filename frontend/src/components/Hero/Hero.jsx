import React from 'react';
import './Hero.css';
import punch from '../assets/001-punch.png';
import arrow from '../assets/arrow.png'; 
import superhero from '../assets/superhero.png'; 

const Hero = () => {  // Capitalized Hero
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>new</p>
                        <img src={punch} alt="Hand icon" /> 
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>latest collection</div>
                    <img src={arrow} alt="Arrow icon" /> 
                </div>
            </div>
            <div className='hero-right'>
                <img src={superhero} alt="Superhero" /> 
            </div>
        </div>
    );
};

export default Hero;  // Capitalized Hero
