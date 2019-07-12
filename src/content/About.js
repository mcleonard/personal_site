import React, { Component } from 'react';
import Section from '../components/Section'
import './Home.css'
import profile_pic from '../assets/mat_profile_img.png'
import page_content from './about-content.json'


class About extends Component {

    render () {
    
        return (
            <div className="Home">
                <div className="Home-content">
                
                <div className="Home-section">
                    <div className="Home-col-left">
                    <img src={profile_pic} alt="Mat and Chihiro being happy together" 
                        className='Home-image' />
                    </div>
                    <div className='Home-section-content'>
                    <h1>Hi, I’m Mat! This is Chihiro.</h1>
                    <ul>
                        <li>I teach machine learning, deep learning, and data science. I believe education is the best way to improve individual lives and society.</li>
                        {/* <li></li> */}
                        <li>She wants to sniff your face.</li>
                        <li>We live in San Francisco.</li>
                    </ul>
                    </div>
                </div>

                {page_content.map((section, index) => 
                    {return <Section section={section} index={index+1} />})}
                </div>
            </div>
        )
    }
}

export default About