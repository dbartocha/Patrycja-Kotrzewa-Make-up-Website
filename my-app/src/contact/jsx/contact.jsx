import React from 'react';
import Header from '../../mainPage/js/header'
import '../sass/contact.css'
import img from '../photos/1.jpg'
import fblogo from "../../aboutMe/photo/facebookpng.png";
import iglogo from "../../aboutMe/photo/instagram.png";
import Footer from "../../footer/jsx/footer"

class Contact extends React.Component{

    render(){

        const style={
            width:"500px",
            height:"400px",
            frameBorder:"0",
            border:"0"

        };

        const style1={
            paddingLeft:'15px',
            width: '250px',
            height: '250px',
            borderRadius: '50%'


        };

        return(
            <div className='contactPage'>
                <Header/>
                <div className="center">
                <div className="contact ">
                <div>
                    <iframe style={style} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2068.84384353042!2d19.54321269567818!3d51.602835807629226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a2fd935d3bf35%3A0xe2d3ddc390f7b68a!2splac+Reymonta+4%2C+95-080+Tuszyn!5e0!3m2!1spl!2spl!4v1535401349128"  allowFullScreen title="googleMap"> </iframe>
                </div>
                    <div>
                        <img src={img} style={style1} alt="photo1"/>
                        <div>
                            <div style={{fontSize:'2rem', paddingTop:'10px'}}> Numer telefonu : 601 751 516</div>
                            <div style={{fontSize:'2rem', paddingTop:'10px'}}> Adres e-mail: kostrzewa.make.up@gmail.com</div>

                        </div>
                        <div className="aboutMeLogos">
                            <a href="https://www.facebook.com/Patrycja.Kostrzewa.Make.Up/?fref=mentions&__tn__=K-RH-R" target="_blank"><img alt="FBLogo" className="aboutMeLogoFb" src={fblogo}/></a>
                            <a href="https://www.instagram.com/kostrzewka_makeup/"
                               target="_blank"><img alt="IGLogo" className="aboutMeLogoIg" src={iglogo}/></a>
                        </div>

                    </div>
                </div>
                </div>
                <Footer/>
            </div>
        )
    }

}


export default Contact;