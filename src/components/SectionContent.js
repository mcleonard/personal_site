import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import Button from './Button'
import './SectionContent.css'

class SectionContent extends Component {

    render () {

        let content = this.props.content
        
        // If there is only one content part in a section, remove bottom margin
        let section_class = "SectionContent"
        if (this.props.single) {
            section_class += " zero-bottom-margin"
        }
        
        // If 
        let image = null
        let text_class = "SectionContent-text"
        if (content['image-file'] !== ""){
            image = require("../assets/" + content['image-file'])
        } else {
            text_class = "SectionContent-text zero-left-pad"
        }

        return (
            <div className={section_class}>
                {(image !== null && <img src={image} alt="" className="SectionContent-image"/> )}
                
                <div className={text_class}>
                    <ReactMarkdown source={content['markdown']}/>
                    {(content["button-text"] !== "" && 
                        <Button text={content["button-text"]}
                                link={content["button-link"]} />)}
                    
                </div>
            </div>
        )
    }
}

export default SectionContent
