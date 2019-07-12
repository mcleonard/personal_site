import React, { Component } from 'react';
import "./BlogSection.css"
import Button from '../components/Button'

const m_names = ["January", "February", "March", "April", "May",
                 "June", "July", "August", "September", "October",
                 "November", "December"];

function format_date(date) {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    
    return m_names[month] + " " + day + ", " + year
}

class BlogSection extends Component {

    constructor(props) {
        super(props)
    
        this.state = { metadata: "" }
    }

    componentWillMount() {
        let metadata = require("./notebooks/" + this.props.metadata)
        fetch(metadata).then((response) => response.text()).then((text) => {
            this.setState({ metadata: JSON.parse(text) })
        })
    }

    render() {
        console.log(this.state)
        let metadata = this.state.metadata
        let published = new Date(metadata["publish_date"])

        return (
            <div className="BlogSection">
                <h1 className="BlogSection-title">
                    <a href={"blog/" + metadata["slug"]}>{metadata["title"]}</a>
                </h1>
                <p className="BlogSection-date">
                    {`Published on ${format_date(published)}`}
                </p>
                
                <p className="BlogSection-text">{metadata["summary"]}</p>

                <Button text="Read more" 
                        link={"blog/" + metadata["slug"]}
                        new_tab={false}/>
                
            </div>
        )
    }
}

export default BlogSection