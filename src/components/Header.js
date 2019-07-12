import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


class Header extends Component {
    static defaultProps = {active: "Name"}
    
    render () {

        return (
        <div className='Header'>
            <nav>
            <Link to='/' className={this.props.active === "Name" ? "Header-name Header-active" : "Header-name"}>
                Mat Leonard</Link>
            <div className="Header-links">
                <Link to='/blog' className={this.props.active === "Blog" ? "Header-active" : ""}>Blog</Link>
                <Link to='/projects' className={this.props.active === "Projects" ? "Header-active" : ""}>Projects</Link>
                <Link to='/about' className={this.props.active === "About" ? "Header-active" : ""}>About</Link>
            </div>

            </nav>
        </div>)
    }
}

export default Header