import React, {Component} from 'react';
import './Navbar.css';
import { Route, BrowserRouter, Switch, Link  } from 'react-router-dom';

import HomePage from '../Pages/HomePage'
import MySeriesPage from '../Pages/MySeriesPage'
import DiscoverPage from '../Pages/DiscoverPage'

class Navbar extends Component {

    render() {
        return (
            <div className="Navbar">
                <BrowserRouter>
                    <li><Link exact to="/messeries"> mes series </Link></li>
                    <li><Link exact to="/decouvrir"> decouvrir </Link></li>
                </BrowserRouter>
            </div>
        )
    }
}

export default Navbar ;



{/* <ul>
    <li>découvrir</li>
    <li>mes séries</li>
    <li>random</li>
</ul> */}