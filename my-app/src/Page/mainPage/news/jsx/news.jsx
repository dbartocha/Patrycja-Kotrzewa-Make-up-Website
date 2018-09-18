import React from 'react';
import '../style/newsStyle.css';
import * as firebase from "firebase";

class News extends React.Component{

    state={
        check:false,
        text:''
    };


    componentDidMount(){
        firebase.database().ref('text').on("value", snap=> {

            const val=snap.val();



            for(let key in val){
                this.setState({
                    check:true,
                    text:[...this.state.text,val[key]]
                })
            }

        })
    }


    render(){
        if(this.state.check===true){
        return(<div className='center'>
            <div className='news'>
                <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet"/>
                <h1 className='informations'>Aktualności/ Promocje</h1>
                <div className='paragraph'>{this.state.text}</div>
            </div>
            </div>
        )}
        else{
            return <div>coś nie pykło</div>
        }
    }
}

export default News;