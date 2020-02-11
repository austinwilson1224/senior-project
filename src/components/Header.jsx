import React, { Component } from 'react';
import logo from './logo.png'
import{

    Link 
} from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
                <div className ="logo1">
                    <a href='/'>
                        <img src={logo} width="300" height="100" alt='Fire & Risk Alliance' />
                    </a>
                <ul className="menu-ul">
                    <li><Link to="/">Home</Link></li>  
                </ul>
                </div>
            </div>
        )
    }
}

export default Header
