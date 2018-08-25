import React from 'react';
import img1 from '../photos/sider/1.jpg'
import img2 from '../photos/sider/2.jpg'
import img3 from '../photos/sider/3.jpg'
import img4 from '../photos/sider/4.jpg'
import img5 from '../photos/sider/5.jpg'
import img6 from '../photos/sider/6.jpg'
import img7 from '../photos/sider/7.jpg'
import img8 from '../photos/sider/8.jpg'


class FirstSection extends React.Component {
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

            display: this.state.index === 1 ? 'block' : 'none'
        };
        const style2 = {

            display: this.state.index === 2 ? 'block' : 'none'
        };
        const style3 = {

            display: this.state.index === 3 ? 'block' : 'none'
        };
        const style4 = {

            display: this.state.index === 4 ? 'block' : 'none'
        };
        const style5 = {

            display: this.state.index === 5 ? 'block' : 'none'
        };
        const style6 = {

            display: this.state.index === 6 ? 'block' : 'none'
        };
        const style7 = {

            display: this.state.index === 7 ? 'block' : 'none'
        };
        const style8 = {

            display: this.state.index === 8 ? 'block' : 'none'
        };
        return (
            <div className='centerSlider'>
                <div>
                    <link href="https://fonts.googleapis.com/css?family=Diplomata+SC" rel="stylesheet"/>
                    <h2>Moje przykładowe makijaże </h2>
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
                    <button className='prevPicture' onClick={this.handleClickPrev}>PREV</button>
                    <button onClick={this.handleClickNext} className='nextPicture'>NEXT</button>
                </div>
            </div>
        )
    }

}

export default FirstSection;