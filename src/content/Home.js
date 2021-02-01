import React, { Component } from 'react';
import Header from '../components/Header'
import Section from '../components/Section'
import './Home.css'
import profile_pic from '../assets/mat_profile_img.png'
import page_content from './home-content.json'


class Home extends Component {

    render () {
    
        return (
            <div className="Home">
                <Header />
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

                <div className="Home-section Home-odd-section">
                    <div className="Home-col-left">
                        <h1>Work</h1>
                        <p>My professional life</p>
                    </div>
                    <div className='Home-section-content'>
                    <ul> 
                        <li><strong>Currently:</strong> Education Program Lead at <a href="https://www.openmined.org/" target="_blank" rel="noopener noreferrer">OpenMined</a></li>
                        <li><strong>Previously:</strong> Senior AI Engineer at <a href="https://www.augustusai.com/" target="_blank" rel="noopener noreferrer">Augustus Intelligence</a></li>
                        <li><strong>Before that:</strong> Instructional Designer at <a href="https://www.kaggle.com" target="_blank" rel="noopener noreferrer">Kaggle</a></li>
                        <li><strong>And before that:</strong> Product Lead and Content Developer at <a href="https://www.udacity.com" target="_blank" rel="noopener noreferrer">Udacity</a></li>
                        <li><strong>A long time ago:</strong> PhD in Physics at UC Berkeley</li>
                    </ul>
                    </div>
                </div>

                {page_content.map((section, index) => 
                    {return <Section section={section} index={index} key={index} />})}
                </div>
            </div>
        )
    }
}

export default Home
