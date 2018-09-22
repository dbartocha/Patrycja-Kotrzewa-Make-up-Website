import React, { Component } from 'react';
import './App.css';
import MainPage from './Page/mainPage/jsx/mainPage'
import AboutMe from './Page/aboutMe/jsx/aboutMe'
import Contact from './Page/contact/jsx/contact'
import {
    Route,
    HashRouter,
    Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <HashRouter>
      <div>
          <Switch>
              <Route exact path="/" component={MainPage}/>
                <Route exact path='/about' component={AboutMe}/>
              <Route exact path='/contact' component={Contact}/>
          </Switch>
      </div>
        </HashRouter>
    );
  }
}

export default App;
