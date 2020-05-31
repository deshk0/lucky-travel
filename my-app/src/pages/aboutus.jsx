import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { OurPros } from './homepage/homePage';



export class AboutUs extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div>
                <Navbar aboutuscolor="blue" />
                <Header />
                <div className="Wrapper">
                    <Main />
                </div>
                <Footer />
            </div>
        )
    }
}
class Header extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div id="Header">
                <div className="Wrapper">
                   <h1 className='Aboutus-Header-headline1'>
                       LUCKY TRAVEL
                    </h1>
                   <h2 className='Aboutus-Header-headline2'>
                        Уникальное туристическое агенство
                    </h2>
                    <h2 className='Aboutus-Header-headline3'>
                        Клуб активного отдыха
                    </h2>
                </div>
            </div>
        )
    }
}

class Main extends React.Component {
    constructor(){
        super()

        this.state ={

        }
    }

    render(){
        return(
            <div>
                <MainWhyUs />
                <OurPros />
                <Reviews />
                <ReviewsMobile />
                <OurSocialMedia />
            </div>
        )
    }
}

class MainWhyUs extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="MainWhyUs">
                <div className="MainWhyUs-desc">
                    <div className="MainWhyUs-desc-title">Почему Lucky Travel?</div>
                    <div className="MainWhyUs-desc-desc">
                        <div className="MainWhyUs-desc-desc-block">
                            Мы уже не первый год организовываем, сплавы, походы и авторские туры,<br />
                            поэтому мы знаем, как сделать ваш отдых по настоящему <b style={{color:'var(--blackOrange)'}}>LUCKY</b>
                        </div>
                        <div className="MainWhyUs-desc-desc-block">
                            Наша команда профессионалов месяцами изучает маршруты,<br />
                            историю и тропы, что бы сделать для вас самые захватывающие<br />
                            и запоминающиеся авторские туры.
                        </div>
                        <div className="MainWhyUs-desc-desc-block">
                            Приглашаем Вас посетить самые захватывающие места<br />
                            Полтавы, сплавится вниз по крутым течениям Ворсклы,<br />
                            а так же побывать в десятках мест по всему миру!
                        </div>
                    </div>
                </div>
                <div className="MainWhyUs-photo">
                </div>
            </div>
        )
    }
}

class Reviews extends React.Component{
    constructor(){
        super()

        this.state = {
            rewiews: [
                <RewiewsBox name="ELENA LO" desc="Спасибо огромное за чудесные впечатления!!! Каждый сплав вдохновляет очень сильно!! Это не просто активный отдых, это не просто каждый раз новые знакомства... Это действительно Крэйзи впечатления!!! Спасибо Артёму, как организатору! Всегда вкусная еда, всегда веселые песни под гитару, новые и комфортабельные байдарки, природа -сума сойти и куча фотографий! Советую вам! Не пожалеете! Все мои друзья уже плавали с Lucky Travel, а теперь и ваша очередь!" />,
                <RewiewsBox name="Анна Шилюк" desc="Сначала было знакомство с Артемом, потом - открыла для себя сплавы на байдарках)Это было круто - спокойствие и тишина, возможность насладиться красотой природы, активный отдых, знакомство с новыми людьми, позитивная атмосфера, невероятно (!) вкусное меню от Lucky Travel, палатки - понравилось все)Полная перезагрузка после сложных рабочих дней.Спасибочки за заботу. Готова к новым путешествиям!" />,
                <RewiewsBox name="Irina Dorogan" desc="Отдых с Lucky Travel - это всегда активный и весёлый досуг. Здесь много друзей и знакомых собираются вместе, чтобы провести время со вкусом! Мы отдыхали с Lucky Travel в разную погоду и сезоны, но каждый раз, пересматривая фото, становится тепло в душе. Спасибо организаторам за профессионализм и заботу. Все продумано до мелочей! Байдарки, походы, путешествия, хорошая компания и воспоминания- все это Lucky Travel!! Сделано с душой)))))" />,
                <RewiewsBox name="Alyona Berezhnaya" desc="Уже много раз отдыхала с Lucky Travel - всегда шикарный отдых, душевная атмосфера и вкуснейшие кушанья на костре!А теперь еще и комфортнейшие и яркие байдарки.Я ваша поклонница :)Всем рекомендую!" />,
                <RewiewsBox name="Marina Kubrushko" desc="Два года назад открыла для себя такой  вид отдыха как байдарочные сплавы. Спасибо Lucky Travel  за организацию  отличного отдыха, открытие новых красот. С нетерпением  жду  весны с новых походами и интересными  маршрутами! Рекомендую." />,
                <RewiewsBox name="Татьяна Сергеевна" desc="Сплавы на байдарках с Lucky Travel- это всегда приключение. Душевная компания, красивая природа, вкуснейший шашлык и каша на костре, песни под гитару, купания. Активный отдых после которого остаётся много приятных впечатлений. И в каждом сплаве что-то новое, каждый маршрут интересный." />,
                <RewiewsBox name="Тимур Мхитарян" desc="Вместе с Lucky Travel путешествуем всей Семьей ( у нас 2 Дочки, 8 и 5 лет) уже более 3 лет, по 2-3 раза в  год. Всегда спокойно, надёжно и приятно - полезно! Благодарю)" />,
                <RewiewsBox name="Игорь Ничипоренко" desc="Для нашей семьи уже стало традицией минимум раз в году сплавляться на байдарках. Всегда подбирается компания очень душевная. Кухня на высоте. Теплые воспоминания гарантированы." />,
            ],

            index: 0,
            index1: 1,
        }
    }
    prev(){
        if(this.state.index1 > 1){
            this.setState({
                index: this.state.index - 1,
                index1: this.state.index1 - 1,
            })
        }    
    }
    next(){
        if(this.state.index1 < 7){
            this.setState({
                index: this.state.index + 1,
                index1: this.state.index1 + 1,
            })
        }
    }

    render(){
        return(
            <div id="Reviews">
                <div className="Reviews-upside">
                    <div className="Reviews-upside-title">Отзывы наших клиентов</div>
                    <div className="Reviews-upside-desc">В потверждение словам — отзывы наших любимых клиентов</div>
                </div>
                <div className="Reviews-main">
                    <div className="Reviews-main-prev"><a onClick={this.prev.bind(this)} href="#Reviews">
                        <img alt="prev" src="arrowBlack.svg"></img></a>
                    </div>
                    <div className="Reviews-main-rewiew">{this.state.rewiews[this.state.index]}</div>
                    <div className="Reviews-main-rewiew">{this.state.rewiews[this.state.index1]}</div>
                    <div className="Reviews-main-next"><a onClick={this.next.bind(this)} href="#Reviews">
                        <img alt="next" src="arrowBlack.svg"></img></a>
                    </div>
                </div>
                <div className="Reviews-more">
                    <a target="_blank" href="https://www.google.com/maps/place/Lucky+Travel%2F+%D0%91%D0%B0%D0%B9%D0%B4%D0%B0%D1%80%D0%BA%D0%B8+%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0.+%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82+%D0%B1%D0%B0%D0%B9%D0%B4%D0%B0%D1%80%D0%BE%D0%BA+%D0%B2+%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B5.+%D0%9F%D0%BE%D1%85%D0%BE%D0%B4%D1%8B/@49.5851034,34.563278,15z/data=!4m5!3m4!1s0x0:0x175648eb190d7353!8m2!3d49.5851034!4d34.563278">
                        Больше отзывов!
                    </a>
                </div>
            </div>
        )
    }
}
class ReviewsMobile extends React.Component{
    constructor(){
        super()

        this.state = {
            rewiews: [
                <RewiewsBoxMobile name="ELENA LO" desc="Спасибо огромное за чудесные впечатления!!! Каждый сплав вдохновляет очень сильно!! Это не просто активный отдых, это не просто каждый раз новые знакомства... Это действительно Крэйзи впечатления!!! Спасибо Артёму, как организатору! Всегда вкусная еда, всегда веселые песни под гитару, новые и комфортабельные байдарки, природа -сума сойти и куча фотографий! Советую вам! Не пожалеете! Все мои друзья уже плавали с Lucky Travel, а теперь и ваша очередь!" />,
                <RewiewsBoxMobile name="Анна Шилюк" desc="Сначала было знакомство с Артемом, потом - открыла для себя сплавы на байдарках)Это было круто - спокойствие и тишина, возможность насладиться красотой природы, активный отдых, знакомство с новыми людьми, позитивная атмосфера, невероятно (!) вкусное меню от Lucky Travel, палатки - понравилось все)Полная перезагрузка после сложных рабочих дней.Спасибочки за заботу. Готова к новым путешествиям!" />,
                <RewiewsBoxMobile name="Irina Dorogan" desc="Отдых с Lucky Travel - это всегда активный и весёлый досуг. Здесь много друзей и знакомых собираются вместе, чтобы провести время со вкусом! Мы отдыхали с Lucky Travel в разную погоду и сезоны, но каждый раз, пересматривая фото, становится тепло в душе. Спасибо организаторам за профессионализм и заботу. Все продумано до мелочей! Байдарки, походы, путешествия, хорошая компания и воспоминания- все это Lucky Travel!! Сделано с душой)))))" />,
                <RewiewsBoxMobile name="Alyona Berezhnaya" desc="Уже много раз отдыхала с Lucky Travel - всегда шикарный отдых, душевная атмосфера и вкуснейшие кушанья на костре!А теперь еще и комфортнейшие и яркие байдарки.Я ваша поклонница :)Всем рекомендую!" />,
                <RewiewsBoxMobile name="Marina Kubrushko" desc="Два года назад открыла для себя такой  вид отдыха как байдарочные сплавы. Спасибо Lucky Travel  за организацию  отличного отдыха, открытие новых красот. С нетерпением  жду  весны с новых походами и интересными  маршрутами! Рекомендую." />,
                <RewiewsBoxMobile name="Татьяна Сергеевна" desc="Сплавы на байдарках с Lucky Travel- это всегда приключение. Душевная компания, красивая природа, вкуснейший шашлык и каша на костре, песни под гитару, купания. Активный отдых после которого остаётся много приятных впечатлений. И в каждом сплаве что-то новое, каждый маршрут интересный." />,
                <RewiewsBoxMobile name="Тимур Мхитарян" desc="Вместе с Lucky Travel путешествуем всей Семьей ( у нас 2 Дочки, 8 и 5 лет) уже более 3 лет, по 2-3 раза в  год. Всегда спокойно, надёжно и приятно - полезно! Благодарю)" />,
                <RewiewsBoxMobile name="Игорь Ничипоренко" desc="Для нашей семьи уже стало традицией минимум раз в году сплавляться на байдарках. Всегда подбирается компания очень душевная. Кухня на высоте. Теплые воспоминания гарантированы." />,
            ],

            index: 0,
        }
    }
    prev(){
        if(this.state.index >= 1){
            this.setState({
                index: this.state.index - 1
            })
        }    
    }
    next(){
        if(this.state.index < 7){
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    render(){
        return(
            <div id="ReviewsMobile">
                <div className="ReviewsMobile-upside">
                    <div className="ReviewsMobile-upside-title">Отзывы наших клиентов</div>
                    <div className="ReviewsMobile-upside-desc">В потверждение словам — отзывы наших любимых клиентов</div>
                </div>
                <div className="ReviewsMobile-main">
                    <div className="ReviewsMobile-main-rewiew">
                        {this.state.rewiews[this.state.index]}
                    </div>

                </div>
                <div className="EquipmentMobile-buttons">
                    <div className="EquipmentMobile-buttons-prev"><button onClick={this.prev.bind(this)}></button></div>
                    <div className="EquipmentMobile-buttons-next"><button onClick={this.next.bind(this)}></button></div>
                </div>
                <div className="ReviewsMobile-more">
                    <a target="_blank" href="https://www.google.com/maps/place/Lucky+Travel%2F+%D0%91%D0%B0%D0%B9%D0%B4%D0%B0%D1%80%D0%BA%D0%B8+%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0.+%D0%9F%D1%80%D0%BE%D0%BA%D0%B0%D1%82+%D0%B1%D0%B0%D0%B9%D0%B4%D0%B0%D1%80%D0%BE%D0%BA+%D0%B2+%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B5.+%D0%9F%D0%BE%D1%85%D0%BE%D0%B4%D1%8B/@49.5851034,34.563278,15z/data=!4m5!3m4!1s0x0:0x175648eb190d7353!8m2!3d49.5851034!4d34.563278">
                        Больше отзывов!
                    </a>
                </div>
            </div>
        )
    }
}
class RewiewsBox extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="RewiewsBox">
                <div className="RewiewsBox-stars"></div>
                <div className="RewiewsBox-name">{this.props.name}</div>
                <div className="RewiewsBox-desc">{this.props.desc}</div>
            </div>
        )
    }
}
class RewiewsBoxMobile extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="RewiewsBoxMobile">
                <div className="RewiewsBoxMobile-stars"></div>
                <div className="RewiewsBoxMobile-name">{this.props.name}</div>
                <div className="RewiewsBoxMobile-desc">{this.props.desc}</div>
            </div>
        )
    }
}

class OurSocialMedia extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="OurSocialMedia">
                <div className="OurSocialMedia-leftside">
                    <div className="OurSocialMedia-leftside-title">Наши соц. сети<img alt="socialmedias" src="clicker.svg" alt="pam"></img></div>
                    <div className="OurSocialMedia-leftside-desc">
                        У нас так же есть инстаграм, фейсбук и телеграм канал!<br /> 
                        Там вы сможете найти больше отзывов, фото и видео со сплавов,<br /> 
                        а так же анонсыновых байдарочныйх сплавов и авторских туров!
                    </div>
                    <div className='OurSocialMedia-leftside-container'>
                        <a target="_blank" href="https://instagram.com/lucky_travel.pl?igshid=11awhmo2tw23f"><div className='OurSocialMedia-leftside-container-box'><img alt="instagram" src="instagram.svg"></img></div></a>
                        <a target="_blank" href="https://www.facebook.com/Luckytravel.poltava/"><div className='OurSocialMedia-leftside-container-box'><img alt="facebook" src="facebook.svg"></img></div></a>
                        <a target="_blank" href="https://t.me/luckytraval"><div className='OurSocialMedia-leftside-container-box'><img alt="telegram" src="telegram.svg"></img></div></a>
                    </div>
                </div>
                <div className="OurSocialMedia-righside">
                    <div className="Smartphone-Area1">
                        <div className="Smartphone-Area2">
                            <div className="Smartphone-camera-box" >
                                <div className="Smartphone-camera"></div>
                            </div>
                            <div className="Smartphone-speaker-box">
                                <div className="Smartphone-speaker"></div>
                            </div>
                            <div className="Smartphone-lines1-box" >
                                <div className="Smartphone-lines1"></div>
                            </div>
                            <div className="Smartphone-videoBox">
                                <iframe className="Smartphone-video" width="268px" height="470px" src="https://www.youtube.com/embed/KkHJ3tqj7U8"  frameborder="0" autoplay="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>
                            <div className="Smartphone-lines2-box" >
                                <div className="Smartphone-lines2"></div>
                            </div>
                            <div className="Smartphone-button-box" >
                                <div className="Smartphone-button"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}