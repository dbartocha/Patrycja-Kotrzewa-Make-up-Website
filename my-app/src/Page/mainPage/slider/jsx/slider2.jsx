import React from 'react';
import '../style/sliderStyle.css';
import * as firebase from "firebase";
import Slider from "./slider";




class Slider2 extends React.Component{

    state={
        list:[]
    };


    componentDidMount(){


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


    render(){
        let key=0;
        return(
            <div>
                <ul className='slider'>
                    {this.state.list.map((el)=>{
                                     key++;
                        return <li style={{display:'inline-block'}} key={key}><img  className='sliderElement' src={el} alt={key}/></li>
                    })}
                </ul>

            </div>
        )
    }

}

export default Slider2;