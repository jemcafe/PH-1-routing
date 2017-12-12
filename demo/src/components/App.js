import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Company from './About/Company/Company';
import FAQ from './About/FAQ/FAQ';
import People from './People/People';
import Character from './Character/Character';


class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/people">People</Link>
        </div>
        <Route exact path="/" component={ Home } />
        <Route path="/about" render={ () => (
          <About>
            <Route path="/about/company" component={ Company }/>
            <Route path="/about/faq" component={ FAQ }/>
          </About>
         ) } />
        <Switch>
          <Route path="/people/:id" component={ Character } />
          <Route path="/people" component={ People } />
        </Switch>
      </div>
    );
  }
}

export default App;
