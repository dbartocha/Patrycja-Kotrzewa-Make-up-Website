import React from 'react';
import '../style/sliderStyle.css';
import Carousel from 'nuka-carousel'
import * as firebase from "firebase";
import img1 from '../photos/1.png'
import img2 from '../photos/2.jpg'
import img3 from '../photos/3.jpg'
import img4 from '../photos/4.jpg'
import img5 from '../photos/5.jpg'
import img6 from '../photos/6.jpg'
import img7 from '../photos/7.jpg'

class Slider extends React.Component {
    state = {
        list: [],
        check: false
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
                            check: true,
                            list: [...this.state.list, url]
                        }))
                }

            }
        });




    }


    render() {

        if (this.state.check === true) {
            return (
                <div className='center'>
                    <div className='carousele'>
                    <Carousel>
                        {this.state.list.map((el) => {
                            return <img src={el} alt={el} className='sliderElements'/>
                        })}


                    </Carousel>
                </div>
                </div>
            )
        }
        else{
            return(
                <div className='loader'> </div>
            )
        }

    }
}


export default Slider;