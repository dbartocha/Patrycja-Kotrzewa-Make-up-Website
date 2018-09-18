import React from 'react';
import Header from '../header/jsx/header';
import Menu from '../menu/jsx/menu';
import News from '../news/jsx/news';
import Slider from '../slider/jsx/slider'

class MainPage extends React.Component{

    render(){
        return(
            <div className='background'>
                <Header/>
                <Menu/>
                <Slider/>
                <News/>
            </div>
        )
    }
}
export default MainPage;