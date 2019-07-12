import React, { Component } from 'react';
import SectionContent from './SectionContent'
import "./Section.css"


class Section extends Component {

    render() {
        let section = this.props.section

        return (
            <div className={(this.props.index % 2 !== 0 ? "Section Section-odd" : "Section")}>
                <div className="Section-col-left">
                    <h1>{section["title"]}</h1>
                    <p>{section["subtitle"]}</p>
                </div>
                <div>
                    {(section["content"].length > 1 
                        ? section["content"].map((content, index) => { return <SectionContent content={content} key={index}/>})
                        : <SectionContent content={section["content"][0]} single={true}/>)}
                </div>
            </div>

        )
    }
}

export default Section