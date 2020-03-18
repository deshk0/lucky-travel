import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './navbar';


export class Equipment extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div>
                <Navbar />
                Equipment
            </div>
        )
    }
}