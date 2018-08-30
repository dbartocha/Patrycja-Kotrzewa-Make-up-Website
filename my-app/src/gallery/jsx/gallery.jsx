import React from 'react';
import * as firebase from "firebase";
import w8 from '../w8.gif'
import '../sass/gallery.css'
class Gallery extends React.Component {

    state = {
        check: false,
        list:[]
    };

    componentDidMount() {

        firebase.database().ref('/images').on('value', snap => {
            let value = snap.val();
            for (let key in value) {
                if (value[key].category === 'gallery') {
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

handleClick=(event,sth, num)=>{
    console.log(this.state.list.slice()[0]);
    // firebase.database().ref('/images/').delete(this.state.list.slice()[0]);
  let now=this.state.list.slice();
    now.splice(num,1);
    console.log(now);
    this.setState({
        list:now
    });





};
    render() {

        const style={

            width:'100px',
            height:'100px',
            top:'-50%',
            left:'0',



        };

        if(this.state.check===true) {
            return (
                <div className="galleryPage">
                    <div className="centerGallery">
                        <div className="gallery">
                            <div>
                            <ul style={{listStyle: 'none', display: 'flex'}}>
                                {this.state.list.map((el) => {
                                    return (<li key={el}><img className="galleryImages" src={el} alt={el} />
                                    <button onClick={this.handleClick}>Usuń</button></li>)
                                })}

                            </ul>
                            </div>
                            <div>
                            <button>Zobacz Więcej...</button>
                            </div>
                        </div>

                    </div>
                </div>
            )
        }
        else{
            return(
                <div style={{display:'flex',justifyContent:'center',marginTop:'15%'}}>
                    <img style={style} alt='w8' src={w8}/>
                </div>
            )
        }

    }


}

export default Gallery;