import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <ul>
                    <li>déconnexion</li>
                    <li>à propos de nous</li>
                    <li>contact</li>
                </ul>
            </div>
        )
    }
}

export default Footer;