import React from 'react';
import '../style/newsStyle.css';
import * as firebase from "firebase";

class News extends React.Component{

    state={
        text:''
    };


    componentDidMount(){
        firebase.database().ref('text').on("value", snap=> {

            const val=snap.val();



            for(let key in val){
                this.setState({
                    text:[...this.state.text,val[key]]
                })
            }

        })
    }


    render(){
        return(<div className='center'>
            <div className='news'>
                <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"/>
                <h1 className='informations'>Aktualności/ Promocje</h1>
                <div className='paragraph'>{this.state.text}</div>
            </div>
            </div>
        )
    }
}

export default News;