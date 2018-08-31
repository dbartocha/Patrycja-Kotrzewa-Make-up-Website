import React from 'react';
import '../sass/news.css'
import * as firebase from "firebase";

class News extends React.Component{

    state={
        text:[]
    };

//     firebase.database().ref('users').on('value', snap => {
//     const val = snap.val();
//
//     console.log(val);
//     const usersTable = [];
//
//     for (var key in val) {
//     usersTable.push({
//                         nickname: val[key].nickname,
//     id: key,
//     points: val[key].points
// })
// }

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

console.log(this.state.text);
        return(
         <div className="news">
             <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c" rel="stylesheet"/>
             <h2 className='news2'>Aktualności / Promocje</h2>
                <span>
                    {this.state.text}
                </span>

         </div>
        )
    }


}

export default News;