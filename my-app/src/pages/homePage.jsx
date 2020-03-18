import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './navbar';


export class HomePage extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div>
                <div>
                   <Navbar />
                   <Header />
                </div>
                <div className="Wrapper">
                    
                    <AboutUs />
                    <OurTours />
                    <ChooseYourTour />
                    <OurPros />
                    <Equipment />
                    <LastForm />
                </div>
            </div>
        )
    }
}

//Header block
class Header extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div id="Header">
                <div className="Wrapper">
                   <h1>LUCKY TRAVEL</h1>
                   <h2>
                        Лучшие<br />
                        предложения<br />
                        для вашего активного<br />
                        отдыха
                       
                    </h2>
                </div>
            </div>
            
        )
    }
}
//About us block
class AboutUs extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="Blocks">
                I am About us
            </div>
        )
    }
}
//Our tours block
class OurTours extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="Blocks">
                I am Our tours
            </div>
        )
    }
}
//Choose your tour block
class ChooseYourTour extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="Blocks">
                I am Choose your tour
            </div>
        )
    }
}
//Our pros block
class OurPros extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="Blocks">
                I am Our pros
            </div>
        )
    }
}
//Equipment block
class Equipment extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="Blocks">
                I am Equipment
            </div>
        )
    }
}
// Last form block 
class LastForm extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="Blocks">
                I am Last form
            </div>
        )
    }
}