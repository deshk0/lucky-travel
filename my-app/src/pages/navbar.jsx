import React from 'react';
import ReactDOM from 'react-dom';

//Navigation 
export class Navbar extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div id="Navbar">
                <div className="Navbar-logo">
                    <div>LOGO</div>
                </div>
                <div className="Navbar-pages">
                    <a href="/">Главная</a>
                    <a href="/kayakalloys">Байдарочные сплавы</a>
                    <a href="/authorstours">Авторские туры</a>
                    <a href="/equipment">Аренда туристического снаряжения</a>
                </div>
                <div className="Navbar-socialmedia">
                    <a href="#">Insta</a>
                    <a href="#">Facebook</a>
                    <a href="#">Telegramm</a>
                </div>
                <div className="Navbar-email">
                    Lucky.travel.pl@gmail.com
                </div>
                <div className="Navbar-contacts">
                    <div>+380 668 298 645</div>
                    <div>+380 668 298 645</div>
                </div>
            </div>
        )
    }
}