import React, { Component } from 'react';
import BlogSection from './BlogSection'
import './Blog.css'
import metadata from './notebooks/metadata.json'

class Blog extends Component {

    render () {
        return (
            <div>
                {metadata['posts'].map((metadata, index) =>
                    {return <BlogSection metadata={metadata} index={index} key={index}/>})}
            </div>

        )
    }
}

export default Blog