import React, {Component} from 'react';
import './App.css';
import AboutMe from './aboutMe/jsx/aboutMe'
import Menu from './menu/menu'
import MainPage from './mainPage/js/mainPage'
import Gallery from './gallery/jsx/gallery'
import Contact from './contact/jsx/contact'
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
                <Menu/>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/gallery" component={Gallery}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/aboutme" component={AboutMe}/>
                </Switch>
            </div>
            </HashRouter>
        );
    }
}

export default App;
