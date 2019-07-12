
import React, { Component } from 'react';
import Section from '../components/Section'
import './Home.css'
import page_content from './projects-content.json'


class Projects extends Component {

    render () {
    
        return (
            <div className="Home">
                <div className="Home-content">

                {page_content.map((section, index) => 
                    {return <Section section={section} index={index} />})}
                </div>
            </div>
        )
    }
}

export default Projects