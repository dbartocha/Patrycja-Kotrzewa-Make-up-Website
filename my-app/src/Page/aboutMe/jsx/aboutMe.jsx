import React from 'react';
import '../style/aboutMeStyle.css'
import Header from '../../mainPage/header/jsx/header'
import Menu from '../../mainPage/menu/jsx/menu'
import img1 from '../photo/2.jpeg'
import fb from '../photo/facebookpng.png'
import ig from '../photo/instagram.png'
class AboutMe extends React.Component{


    render(){
        return(
            <div className='background'>
                <Header/>
                <Menu/>
                <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"/>
                <div style={{display:'flex',
                justifyContent:'center'}}>
                <div className='aboutMe'>
                    <div>
                        <img className='image' src={img1}/>
                    </div>
                    <div className='text'>
                        <span>
                            Kilka słów o mnie - wizaż jest moja pasja od wielu lat, jednak od jakiegoś czasu jest również moja praca, która uwielbiam i wkładam w nią całe serce i starania. Wykonuje makijaże okazjonalne, bardzo chętnie zrobię Was na bóstwo w ważnym dla Was dniu, kiedy chcecie wyglądać wyjątkowo. Lubię  podkreślać najpiękniejsze elementy twarzy, ukrywać to co niepotrzebne, pamiętając przy tym o naturalności. Zawsze robię początkowy wywiad, by odpowiednio dobrać kosmetyki pod rodzaj cery i preferencje. Pracuje na kosmetykach z wyższej półki, najlepszej jakości! Każdy makijaż utrwalam najlepszymi produktami, dzięki czemu będzie on z Wami przez całą noc. Przykładowe marki to - Urban Decay, Toofaced, Estee Lauder, Kat Von D, Anastasia Beverly Hills, Huda Beauty, Makeup Atelier Paris, NABLA, Becca, Inglot, MAC, Smashbox, TheBalm, Laura Marcier, Morphe i wiele innych. Zapraszam do kontaktu poprzez moje media społecznościowe.
                        </span>
                    </div>
                </div>
            </div>
            </div>

        )
    }
}

export default AboutMe;