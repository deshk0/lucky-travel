import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './navbar';
import { Footer } from './footer';


export class ThanksPage extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div>
            <Navbar />
            <div className="Wrapper">
                <Main />
            </div>
            <Footer />
            </div>
        )
    }
}

class Main extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="Blocks">
                <div style={{display:'flex', flexDirection:'column',alignItems:'center',width:'100%'}}>
                    <div className="Thankspage-logo">
                        <img src="vector-logo.svg" alt='logo'></img>
                    </div>
                    <div className="Thankspage-headliner">Спасибо, Ваша заявка принята!</div>
                    <div className="Thankspage-button">
                        <a href="/home">
                            Вернуться на сайт
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}