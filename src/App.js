import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar';
import MySeriesPage from './Pages/MySeriesPage'
import DiscoverPage from './Pages/DiscoverPage'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 id="logo">&<br/>CHILL</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/messeries" component={MySeriesPage} />
          <Route path="/decouvrir" component={DiscoverPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
