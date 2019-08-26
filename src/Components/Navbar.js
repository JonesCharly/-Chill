import React, {Component} from 'react';
import './Navbar.css';
import { Route, BrowserRouter , Switch, Link } from 'react-router-dom';

import HomePage from '../Pages/HomePage'
import MySeriesPage from '../Pages/MySeriesPage'
import DiscoverPage from '../Pages/DiscoverPage'
import RandomPage from '../Pages/RandomPage'

class Navbar extends Component {

    render() {
        return (
            <div  className="Navbar">
               
                        <Link style={{textDecoration: 'none'}} to="/decouvrir"><p>decouvrir </p> </Link>
                        <Link style={{textDecoration: 'none'}} to="/messeries"><p>mes series</p>  </Link>
                        <Link style={{textDecoration: 'none'}} to="/random"><p>random</p></Link>
             
            </div>
        )
    }
}

export default Navbar ;
