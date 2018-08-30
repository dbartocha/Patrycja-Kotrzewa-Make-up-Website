import React from 'react';
import * as firebase from "firebase";
import '../sass/slider.css'
import prev from '../photos/slider/prev.png'
import next from '../photos/slider/next.png'


class Slider extends React.Component {
    state = {
        list:[],
        index: 0,
        style:0
    };

    componentDidMount() {

        firebase.database().ref('/images').on('value', snap => {
            let value = snap.val();

            for (let key in value) {
                if (value[key].category === 'slider') {
                    firebase
                        .storage()
                        .ref(value[key].path)
                        .getDownloadURL()
                        .then(url => this.setState({
                            check:true,
                            list: [...this.state.list, url]
                        }))
                }

            }
        });
    }

    handleClickNext = () => {
        if (this.state.index < this.state.list.length-1) {
            this.setState({
                index: this.state.index + 1,

            })
        }
        else {
            this.setState({
                index: 0,

            })
        }
    };

    handleClickPrev = () => {
        if (this.state.index > 0) {
            this.setState({
                index: this.state.index - 1,

            })
        }
        else {
            this.setState({
                index: this.state.index.length-1,

            })
        }
    };

    render() {

        let style=-1;
        return (
            <div className='centerSlider'>
                <div>
                    <link href="https://fonts.googleapis.com/css?family=Diplomata+SC" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet"/>
                    <h2>Moje przykładowe makijaże </h2>
                   <div className="sliderPictures">
                       <button  className='prevPicture' onClick={this.handleClickPrev}><img src={prev} style={{width:'100px',height:'100px'}} alt="prevArrow"/> </button>
                    <ul className='slider'>
                        {this.state.list.map((el)=>{
                            style++;
                         return   <li style={{display: this.state.index === style ? 'inline-block' : 'none'}} key={this.state.list[style]} ><img src={el} alt={el} /> </li>
                        })}
                    </ul>

                    <button onClick={this.handleClickNext} className='nextPicture'> <img style={{width:'100px',height:'100px'}} src={next} alt="nextArrow"/> </button>
                   </div>
                   </div>
            </div>
        )
    }

}

export default Slider;