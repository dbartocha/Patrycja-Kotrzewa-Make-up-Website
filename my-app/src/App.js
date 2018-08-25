import React, {Component} from 'react';
import logo from './photos/1.jpg';
import './App.css';
import Header from './js/header';
import './sass/headerStyle.css';
import './sass/menu.css'
import './sass/firstSection.css'
import Menu from './js/menu'
import FirstSection from './js/firstSection';


class App extends Component {
    render() {
        return (<div>
                <Menu/>
                <Header/>
                <FirstSection/>
            </div>
        );
    }
}

export default App;
