import React from 'react';
import '../style/contactStyle.css'
import Menu from '../../mainPage/menu/jsx/menu'
import Header from '../../mainPage/header/jsx/header'
import img from '../style/1.jpg'
import fb from "../../aboutMe/photo/facebookpng.png";
import ig from "../../aboutMe/photo/instagram.png";
class Contact extends React.Component{

    render(){
        return(
            <div >

                <Header/>
                <Menu/>
<div style={{display:'flex', justifyContent:'center'}}>
                <div className='center_contact'>
                    <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet"/>
                    <div>
                        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2068.84384353042!2d19.54321269567818!3d51.602835807629226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a2fd935d3bf35%3A0xe2d3ddc390f7b68a!2splac+Reymonta+4%2C+95-080+Tuszyn!5e0!3m2!1spl!2spl!4v1535401349128"  allowFullScreen title="googleMap"/>
                    </div>
                    <div>
                    <div>
                        <img src={img} className='contactImg'/>
                    </div>
                        <div className='contacts'>
                            <span>Email: kostrzewa.make.up@gmail.com</span>
                            <span style={{marginTop:'10px'}}>Nr tel.: 601-751-516</span>
                        </div>
                    </div>
                    <div className="contactLogos">
                        <a href="https://www.facebook.com/Patrycja.Kostrzewa.Make.Up/?fref=mentions&__tn__=K-RH-R"
                           target="_blank"><img className="contactLogoFb" src={fb} alt="FBLogo"/></a>
                        <a href="https://www.instagram.com/kostrzewka_makeup/"
                           target="_blank"><img alt="IGLogo" className="contactLogoIg" src={ig}/></a>
                    </div>
                </div>
</div>
            </div>

        )
    }
}
export default Contact;