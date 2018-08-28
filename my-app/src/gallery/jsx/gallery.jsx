import React from 'react';
import img1 from '../photos/1.jpg'
import img2 from '../photos/2.jpg'
import img3 from '../photos/3.jpg'
import img4 from '../photos/4.jpg'
import img5 from '../photos/5.jpg'
import img6 from '../photos/6.jpg'
import img7 from '../photos/7.jpg'
import img8 from '../photos/8.jpg'
import img9 from '../photos/9.jpg'
import img10 from '../photos/10.jpg'
import img11 from '../photos/11.jpg'
import img12 from '../photos/12.jpg'
import img13 from '../photos/13.jpg'
import img14 from '../photos/14.jpg'
import img15 from '../photos/15.jpg'
import img16 from '../photos/16.jpg'
import img17 from '../photos/17.jpg'
import img18 from '../photos/18.jpg'
import img19 from '../photos/19.jpg'
import img20 from '../photos/20.jpg'
import img21 from '../photos/21.jpg'
import img22 from '../photos/22.jpg'
import img23 from '../photos/23.jpg'
import img24 from '../photos/24.jpg'
import img25 from '../photos/25.jpg'
import img26 from '../photos/26.jpg'
import img27 from '../photos/27.jpg'
import img28 from '../photos/28.jpg'
import img29 from '../photos/29.jpg'
import img30 from '../photos/30.jpg'
import img31 from '../photos/31.jpg'
import img32 from '../photos/32.jpg'
import img33 from '../photos/33.jpg'
import img34 from '../photos/34.jpg'
import img35 from '../photos/35.jpg'
import img36 from '../photos/36.jpg'
import img37 from '../photos/37.jpg'
import img38 from '../photos/38.jpg'
import img39 from '../photos/39.jpg'
import img40 from '../photos/40.jpg'
import '../sass/gallery.css'
class Gallery extends React.Component {

    state = {
        check: false
    };



    render() {
        const style = {
            paddingTop:'10px',
            width: this.state.checked === true ? '400px' : '300px',
            height: this.state.checked === true ? '400px' : '200px'
        };
        return (
            <div className="galleryPage">
                <div className="centerGallery">
                <div className="gallery">
                    <img src={img1} style={style}/>
                    <img src={img2} style={style}/>
                    <img src={img3} style={style}/>
                    <img src={img4} style={style}/>
                    <img src={img5} style={style}/>
                    <img src={img6} style={style}/>
                    <img src={img7} style={style}/>
                    <img src={img8} style={style}/>
                    <img src={img9} style={style}/>
                    <img src={img10} style={style}/>
                    <img src={img11} style={style}/>
                    <img src={img12} style={style}/>
                    <img src={img13} style={style}/>
                    <img src={img14} style={style}/>
                    <img src={img15} style={style}/>
                    <img src={img16} style={style}/>
                    <img src={img17} style={style}/>
                    <img src={img18} style={style}/>
                    <img src={img19} style={style}/>
                    <img src={img20} style={style}/>
                    <img src={img21} style={style}/>
                    <img src={img22} style={style}/>
                    <img src={img23} style={style}/>
                    <img src={img24} style={style}/>
                    <img src={img25} style={style}/>
                    <img src={img26} style={style}/>
                    <img src={img27} style={style}/>
                    <img src={img28} style={style}/>
                    <img src={img29} style={style}/>
                    <img src={img30} style={style}/>
                    <img src={img31} style={style}/>
                    <img src={img32} style={style}/>
                    <img src={img33} style={style}/>
                    <img src={img34} style={style}/>
                    <img src={img35} style={style}/>
                    <img src={img36} style={style}/>
                    <img src={img37} style={style}/>
                    <img src={img38} style={style}/>
                    <img src={img39} style={style}/>
                    <img src={img40} style={style}/>
                    <button>Zobacz Więcej...</button>
                </div>
                </div>
            </div>
        )
    }


}

export default Gallery;