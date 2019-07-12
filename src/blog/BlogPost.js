import React, { Component } from 'react';
import metadata from './notebooks/metadata.json'
import Notebook from './Notebook'

class BlogPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = { notebook: "{}" }
    }
    
    componentWillMount() {
        let slug = this.props.match.params.slug
        let nb_file = metadata.slugs[slug]
        let notebook = require('./notebooks/' + nb_file)
        fetch(notebook).then((response) => response.text()).then((text) => {
            this.setState({ notebook: text })
        })
    }
    
    render () {
        let notebook = JSON.parse(this.state.notebook)
        return (
            <div>
                <Notebook source={notebook.cells} />
                {/* <ReactMarkdown source={this.state.markdown} /> */}
            </div>
        )
    }
}

export default BlogPost