import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import MySeriesPage from './Pages/MySeriesPage';
import DiscoverPage from './Pages/DiscoverPage';
import RandomPage from './Pages/RandomPage';
import Footer from './Components/Footer';
import Callpi from './Callpi'

function App() {
  return (
    <div className="App">
      <Link to="/acceuil" ><h1 id="logo">&<br/>CHILL</h1></Link>
      <Link className="link">mon profil</Link>
      <div className="header">
        <Navbar/>
      </div>
      <Callpi/>

      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/acceuil" component={HomePage}></Route>
          <Route path="/messeries" component={MySeriesPage} />
          <Route path="/decouvrir" component={DiscoverPage}/>
          <Route path="/random" component={RandomPage}/>
      </Switch>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
