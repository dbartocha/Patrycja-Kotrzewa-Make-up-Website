import React from 'react';
import Header from "./header";
import FirstSection from "./slider";
import News from "./news"
import Footer from "../../footer/jsx/footer"
import '../sass/mainPage.css'
class MainPage extends React.Component{
    render(){
        return(<div className="mainPage">
                <Header/>
                <div className="overCenter">
            <div className="center">

                <News/>


                <FirstSection/>


            </div>
                </div>
                <Footer/>
            </div>
        )
    }



}

export default MainPage;