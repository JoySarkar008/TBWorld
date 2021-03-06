import React from 'react';
import { Button } from './Button';

import '../App.css'
import './HeroSection.css'

const HeroSection = () => {
    return(
        <div className='hero-container'>
            <video src="/videos/video-3.mp4" autoPlay loop muted />
            <h1>Adventure Awaits</h1>
            <p> What are you waiting for</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Get Started
                </Button>

                <Button className='btns' buttonStyle='btn--Primary'
                buttonSize='btn--large'>
                    Watch Trailer <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;