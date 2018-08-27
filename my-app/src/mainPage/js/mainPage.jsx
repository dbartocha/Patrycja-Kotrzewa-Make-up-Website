import React from 'react';
import Header from "./header";
import FirstSection from "./slider";
import News from "./news"

class MainPage extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <FirstSection/>
                <News/>
            </div>
        )
    }



}

export default MainPage;