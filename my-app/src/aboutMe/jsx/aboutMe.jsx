import React from 'react';
import img1 from '../photo/2.jpeg'
import Header from '../../mainPage/js/header'
import '../sass/aboutMe.css'
import fblogo from '../photo/facebookpng.png'
import iglogo from '../photo/instagram.png'


class AboutMe extends React.Component {


    render() {
        return (
            <div className="aboutMePage">
                <Header/>
                <div className="center">
                <div className="aboutMe">
                    <div className='aboutMeImgDiv'>
                        <img className="aboutMeImg" alt="Me" src={img1}/>
                        <div className="aboutMeLogos">
                            <a href="https://www.facebook.com/Patrycja.Kostrzewa.Make.Up/?fref=mentions&__tn__=K-RH-R"
                               target="_blank"><img className="aboutMeLogoFb" src={fblogo} alt="FBLogo"/></a>
                            <a href="https://www.instagram.com/kostrzewka_makeup/"
                               target="_blank"><img alt="IGLogo" className="aboutMeLogoIg" src={iglogo}/></a>
                        </div>
                    </div>
                    <div className='aboutMeTxtDiv'>
                        <span className="aboutMeTxt">Kilka słów o mnie - wizaż jest moja pasja od wielu lat, jednak od jakiegoś czasu jest również moja praca, która uwielbiam i wkładam w nią całe serce i starania. Wykonuje makijaże okazjonalne, bardzo chętnie zrobię Was na bóstwo w ważnym dla Was dniu, kiedy chcecie wyglądać wyjątkowo. Lubię  podkreślać najpiękniejsze elementy twarzy, ukrywać to co niepotrzebne, pamiętając przy tym o naturalności. Zawsze robię początkowy wywiad, by odpowiednio dobrać kosmetyki pod rodzaj cery i preferencje. Pracuje na kosmetykach z wyższej półki, najlepszej jakości! Każdy makijaż utrwalam najlepszymi produktami, dzięki czemu będzie on z Wami przez całą noc. Przykładowe marki to - Urban Decay, Toofaced, Estee Lauder, Kat Von D, Anastasia Beverly Hills, Huda Beauty, Makeup Atelier Paris, NABLA, Becca, Inglot, MAC, Smashbox, TheBalm, Laura Marcier, Morphe i wiele innych. Zapraszam do kontaktu poprzez moje media społecznościowe. </span>

                    </div>
                </div>
                </div>
            </div>
        )
    }


}

export default AboutMe;