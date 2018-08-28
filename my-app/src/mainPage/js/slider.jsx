import React from 'react';
import img1 from '../photos/slider/1.jpeg'
import img2 from '../photos/slider/2.jpeg'
import img3 from '../photos/slider/3.jpeg'
import img4 from '../photos/slider/4.jpeg'
import img5 from '../photos/slider/5.jpeg'
import img6 from '../photos/slider/6.jpeg'
import img7 from '../photos/slider/7.jpeg'
import img8 from '../photos/slider/8.jpeg'
import '../sass/slider.css'
import prev from '../photos/slider/prev.png'
import next from '../photos/slider/next.png'


class Slider extends React.Component {
    state = {
        index: 1,
    };


    handleClickNext = () => {
        if (this.state.index < 8) {
            this.setState({
                index: this.state.index + 1
            })
        }
        else {
            this.setState({
                index: 1
            })
        }
    };

    handleClickPrev = () => {
        if (this.state.index > 1) {
            this.setState({
                index: this.state.index - 1
            })
        }
        else {
            this.setState({
                index: 8
            })
        }
    };

    render() {


        const style1 = {

            display: this.state.index === 1 ? 'inline-block' : 'none'
        };
        const style2 = {

            display: this.state.index === 2 ? 'inline-block' : 'none'
        };
        const style3 = {

            display: this.state.index === 3 ? 'inline-block' : 'none'
        };
        const style4 = {

            display: this.state.index === 4 ? 'inline-block' : 'none'
        };
        const style5 = {

            display: this.state.index === 5 ? 'inline-block' : 'none'
        };
        const style6 = {

            display: this.state.index === 6 ? 'inline-block' : 'none'
        };
        const style7 = {

            display: this.state.index === 7 ? 'inline-block' : 'none'
        };
        const style8 = {

            display: this.state.index === 8 ? 'inline-block' : 'none'
        };
        return (
            <div className='centerSlider'>
                <div>
                    <link href="https://fonts.googleapis.com/css?family=Diplomata+SC" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet"/>
                    <h2>Moje przykładowe makijaże </h2>
                   <div className="sliderPictures">
                       <button  className='prevPicture' onClick={this.handleClickPrev}><img src={prev} style={{width:'100px',height:'100px'}}/> </button>
                    <ul className='slider'>
                        <li><img style={style1} src={img1}/></li>
                        <li><img style={style2} src={img2}/></li>
                        <li><img style={style3} src={img3}/></li>
                        <li><img style={style4} src={img4}/></li>
                        <li><img style={style5} src={img5}/></li>
                        <li><img style={style6} src={img6}/></li>
                        <li><img style={style7} src={img7}/></li>
                        <li><img style={style8} src={img8}/></li>

                    </ul>

                    <button onClick={this.handleClickNext} className='nextPicture'> <img style={{width:'100px',height:'100px'}} src={next}/> </button>
                   </div>
                   </div>
            </div>
        )
    }

}

export default Slider;