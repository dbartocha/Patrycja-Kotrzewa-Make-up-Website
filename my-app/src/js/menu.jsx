import React from 'react';


class Menu extends React.Component {

    render(){
        return(
            <div className='menu'>
                <span className='menu-left-element'><a href='/'>Strona Główna</a></span>
                <span className='menu-right-element'><a href='/contact'> Kontakt</a></span>
                <span className='menu-right-element'><a href='/aboutme'> O mnie</a></span>
                <span className='menu-right-element'><a href='/gallery'> Galeria</a></span>
            </div>
        )
    }


}

export default Menu;