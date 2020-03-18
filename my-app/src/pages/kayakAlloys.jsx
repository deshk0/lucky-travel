import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './navbar';


export class KayakAlloys extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div>
                <Navbar />
                Kayak Alloys
            </div>
        )
    }
}