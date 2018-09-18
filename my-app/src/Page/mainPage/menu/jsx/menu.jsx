import React from 'react';
import '../style/menuStyle.css';
import {Link} from 'react-router-dom';


class Menu extends React.Component {

    state = {
        check: false
    };

    click = () => {
        this.setState({
            check: !this.state.check
        })


    };

    render() {

        return (
            <div className='menu'>
                <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet"/>
                <button onClick={this.click} className=' hamburger'> </button>
                <div className='hiddenMenu' style={{right: this.state.check === true ? '50px' : '500px'}}>
                    <ul className='menuList'>
                        <Link to='/'>
                            <li className='menuElement'>Strona główna
                                <p className='underline'> </p>
                            </li>
                        </Link>
                        <Link to='/about'>
                        <li className='menuElement'>O mnie
                            <p className='underline'> </p>
                        </li>
                        </Link>
                        <Link to='/gallery'>
                        <li className='menuElement'>Galeria
                            <p className='underline'> </p>
                        </li>
                        </Link>
                        <Link to='/contact'>
                        <li className='menuElement'>Kontakt
                            <p className='underline'> </p>
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Menu;