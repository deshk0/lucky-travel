import React from 'react';
import ReactDOM from 'react-dom';

import { Navbar } from './navbar';
import { Footer } from './footer';



export class AuthorsTours extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div>
                <Navbar />
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:"60vh",textAlign:'center',fontSize:'26px',fontFamily:'HELEVETICAHEAVY',color:'var(--orange)'}}>
                    Извините, на данный момент авторские туры отсутствуют  😢
                </div>
                <Footer />
            </div>
        )
    }
}