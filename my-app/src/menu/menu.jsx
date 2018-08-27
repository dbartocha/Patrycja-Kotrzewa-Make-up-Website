import React from 'react';
import {Link} from 'react-router-dom';
import './menu.css'

class Menu extends React.Component {

    render() {
        return (
            <div className='menu'>
                <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"/>
                <span className='menu-left-element'><Link to='/'>Strona Główna</Link></span>
                <span className='menu-right-element'><Link to='/contact'> Kontakt</Link></span>
                <span className='menu-right-element'><Link to='/aboutme'> O mnie</Link></span>
                <span className='menu-right-element'><Link to='/gallery'> Galeria</Link></span>
            </div>
        )
    }


}

export default Menu;