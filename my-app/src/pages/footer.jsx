import React from 'react';
import ReactDOM from 'react-dom';


export class Footer extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div id="Footer">
                <div style={{display:'flex',justifyContent:'space-around'}}> 
                <div className="Footer-firstcolumn">
                    <div className="Footer-firstcolumn-logo">
                        <a href="/home"><img src="vector-logo.svg" alt="logo"></img></a>
                    </div>
                    <div className="Footer-firstcolumn-text">Звоните нам сейчас<br />+380 66 829 86 45<br />+380 68 636 90 13</div>
                    <div className="Footer-firstcolumn-social">
                        <div className="Navbar-socialmedia-box" style={{backgroundColor:"#496dc7"}}><a target="_blank" href="https://instagram.com/lucky_travel.pl?igshid=11awhmo2tw23f"><img alt="instagram" className="Navbar-socialmedia-img" src='instagram.svg' /></a></div>
                        <div className="Navbar-socialmedia-box" style={{backgroundColor:"#496dc7"}}><a target="_blank" href="https://www.facebook.com/Luckytravel.poltava/"><img alt="facebook" className="Navbar-socialmedia-img" src='facebook.svg' /></a></div>
                        <div className="Navbar-socialmedia-box" style={{backgroundColor:"#aec749"}}><a target="_blank" href="https://t.me/luckytraval"><img alt="telegram" className="Navbar-socialmedia-img" src='telegram.svg' /></a></div>
                    </div>

                </div>
                <div className="Footer-secondcolumn-1">
                    <div className="Footer-secondcolumn-1-headliner">Байдарочные сплавы</div>
                    <div className="Footer-secondcolumn-1-paragraph"><a href="/kayakAlloys">Ближайшие сплавы</a></div>
                    <div className="Footer-secondcolumn-1-paragraph"><a href="/kayakAlloys">Корпаративные сплавы</a></div>
                    <div className="Footer-secondcolumn-1-paragraph"><a href="/kayakAlloys">Персональные сплавы</a></div>
                    <div className="Footer-secondcolumn-1-paragraph"><a href="/kayakAlloys">Групповые сплавы</a></div>
                </div>
                <div className="Footer-secondcolumn-2">
                    <div className="Footer-secondcolumn-1-headliner">Авторские туры</div>
                    <div className="Footer-secondcolumn-1-paragraph"><a href="/authorsTours">Все туры</a></div>
                    <div className="Footer-secondcolumn-1-paragraph"><a href="/authorsTours">Турция</a></div>
                    <div className="Footer-secondcolumn-1-paragraph"><a href="/authorsTours">Тенерифа</a></div>
                    <div className="Footer-secondcolumn-1-paragraph"><a href="/authorsTours">Описание</a></div>
                </div>
                <div className="Footer-secondcolumn-3">
                    <div className="Footer-secondcolumn-1-headliner">Аренда снаряжения</div>
                    <div className="Footer-secondcolumn-1-paragraph"><a href="/equipment">Байдарочное</a></div>
                    <div className="Footer-secondcolumn-1-paragraph"><a href="/equipment">Весь список</a></div>
                    <div className="Footer-secondcolumn-1-paragraph"><a href="/equipment">Альпинистическое<br />и Горнолыжное</a></div>
                    <div className="Footer-secondcolumn-1-paragraph"><a href="/equipment">Походное</a></div>
                    
                </div>
                <div>
                <iframe id="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10346.682141797743!2d34.563278!3d49.5851034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x175648eb190d7353!2zTHVja3kgVHJhdmVsLyDQkdCw0LnQtNCw0YDQutC4INCf0L7Qu9GC0LDQstCwLiDQn9GA0L7QutCw0YIg0LHQsNC50LTQsNGA0L7QuiDQsiDQn9C-0LvRgtCw0LLQtS4g0J_QvtGF0L7QtNGL!5e0!3m2!1sru!2sua!4v1586373012763!5m2!1sru!2sua" style={{ frameborder:"0px", style:"border:0;"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                </div>
                
                <div id="Footer-mobile">
                    <div className="Footer-mobile-firstblock">
                        <div className="Footer-mobile-firstblock-logo"><img alt="logo" src="vector-logo.svg"></img></div>
                        <div className="Footer-mobile-firstblock-numbers">
                            <div>+380 668 298 645</div>
                            <div>+380 668 298 645</div>
                        </div>
                    </div>
                    <div className="Footer-mobile-secondblock">Lucky.travel.pl@gmail.com</div>
                    <div className="Footer-mobile-thirdblock">
                        <div className="Footer-mobile-thirdblock-insta"><a target="_blank" alt="instgram" href="https://instagram.com/lucky_travel.pl?igshid=11awhmo2tw23f"><img src="instagram.svg"></img></a></div>
                        <div className="Footer-mobile-thirdblock-facebook"><a target="_blank" alt="facebook" href="https://www.facebook.com/Luckytravel.poltava/"><img src="facebook.svg"></img></a></div>
                        <div className="Footer-mobile-thirdblock-telegram"><a target="_blank" alt="telegram" href="https://t.me/luckytraval"><img src="telegram.svg"></img></a></div>
                    </div>
                    <div className="Footer-mobile-fourthblock">
                        <div className="Footer-mobile-fourthblock-href"><a href="/home">Главная</a></div>
                        <div className="Footer-mobile-fourthblock-href"><a href="/aboutus">О нас</a></div>
                        <div className="Footer-mobile-fourthblock-href"><a href="/kayakalloysmob">Байдарочные сплавы</a></div>
                        <div className="Footer-mobile-fourthblock-href"><a href="/authorstours">Авторские туры</a></div>
                        <div className="Footer-mobile-fourthblock-href"><a href="/equipmentmobile">Аренда туристического снаряжения</a></div>
                    </div>
                </div>
                <div id="CoolRaccoons">
                    2020 © Lucky Travel<br />
                    Designed and Developed by <b>«Cool Raccoon`s»</b>
                </div>
            </div>
        )
    }
}


/*
                    <div className="mobileformbox">
                        <form action="telegram.php" method="POST" className="mobile-form" >
                            <div class="mobile-form-group">
                                <label>
                                    <input name="user_name" type="text" className="mobile-form-input" placeholder="Ваше имя"></input>
                                </label>
                            </div>
                            <div class="mobile-form-group">
                                <label>
                                    <input name="user_phone" type="text" className="mobile-form-input" placeholder="Ваш номер телефона"></input>
                                </label>
                            </div>
                            <div className='mobile-form-buttonBox'>
                                <button type="submit" className="mobile-form-button">Отправить форму!</button>
                            </div>
                        </form>
                    </div>
*/