import React from 'react';
import ReactDOM from 'react-dom';

//Navigation 
export class Navbar extends React.Component{
    constructor(){
        super()

    }

    onClick(e){
        console.log('hello')
        e.preventDefault()
        const opa1 = document.getElementById("opa")
        const opa = document.getElementById("opa1")
        const opa2 = document.getElementsByClassName("NavbarMobile-burgermenu-link")

        const className1 = "burgerMenu-button_active"
        const className2 = "NavbarMobile-burgermenu-link_active"
        const className = "NavbarMobile-burgerMenu-block_active"
        
        opa.classList.toggle(className)
        opa1.classList.toggle(className1)
        opa2[0].classList.toggle(className2)
        opa2[1].classList.toggle(className2)
        opa2[2].classList.toggle(className2)
        opa2[3].classList.toggle(className2)
        opa2[4].classList.toggle(className2)


    }

    render(){
        return(
            <div id="Navbar">
                <div className="Navbar-logo">
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                        <a href="/home"><img style={{height:'30px'}} src="vector-logo.svg" alt="logo"></img></a>
                    </div>
                </div>
                <div className="Navbar-pages">
                    <div className="Navbar-pages-box" style={{borderBottom:`8px solid ${this.props.homecolor}`}}><a style={{color:`${this.props.homecolor}`}} href="/home">Главная</a></div>
                    <div className="Navbar-pages-box" style={{borderBottom:`8px solid ${this.props.kayakalloyscolor}`}}><a style={{color:`${this.props.kayakalloyscolor}`}} href="/kayakalloys">Байдарочные сплавы</a></div>
                    <div className="Navbar-pages-box" style={{borderBottom:`8px solid ${this.props.authorstourscolor}`}}><a style={{color:`${this.props.authorstourscolor}`}} href="/authorstours">Авторские туры</a></div>
                    <div className="Navbar-pages-box" style={{borderBottom:`8px solid ${this.props.equipmentcolor}`}}><a style={{color:`${this.props.equipmentcolor}`}} href="/equipment">Аренда туристического снаряжения</a></div>
                    <div className="Navbar-pages-box" style={{borderBottom:`8px solid ${this.props.aboutuscolor}`}}><a style={{color:`${this.props.aboutuscolor}`}} href="/aboutus">О нас</a></div>
                </div>
                <div className="Navbar-socialmedia">
                    <div className="Navbar-socialmedia-box" style={{backgroundColor:"#49c7a5"}}><a target="_blank" href="https://instagram.com/lucky_travel.pl?igshid=11awhmo2tw23f"><img alt="instagram" className="Navbar-socialmedia-img" src='instagram.svg' /></a></div>
                    <div className="Navbar-socialmedia-box" style={{backgroundColor:"#496dc7"}}><a target="_blank" href="https://www.facebook.com/Luckytravel.poltava/"><img alt="facebook" className="Navbar-socialmedia-img" src='facebook.svg' /></a></div>
                    <div className="Navbar-socialmedia-box" style={{backgroundColor:"#aec749"}}><a target="_blank" href="https://t.me/luckytraval"><img alt="telegram" className="Navbar-socialmedia-img" src='telegram.svg' /></a></div>
                </div>
                <div className="Navbar-email">
                    Lucky.travel.pl@gmail.com
                </div>
                <div className="Navbar-contacts">
                    <div>+380 668 298 645</div>
                    <div>+380 686 369 013</div>
                </div>
        

                <div id="opa1" className="NavbarMobile-burgerMenu-block">
                    <div  className="NavbarMobile-burgerMenu">
                        <a id="opa" onClick={this.onClick.bind(this)} href="#" className="burgerMenu-button">
                            <span className="burgerMenu-button-span">
                            </span>
                        </a>
                    </div>
                    <a className="NavbarMobile-burgermenu-link" href="/home">Главная</a>
                    <a className="NavbarMobile-burgermenu-link" href="/aboutus">О нас</a>
                    <a className="NavbarMobile-burgermenu-link" href="/kayakalloysmob">Байдарочные сплавы</a>
                    <a className="NavbarMobile-burgermenu-link" href="/authorstours">Авторские туры</a>
                    <a className="NavbarMobile-burgermenu-link" href="/equipmentmobile">Аренда туристического снаряжения</a>
                </div>
                
            </div>
        )
    }
}