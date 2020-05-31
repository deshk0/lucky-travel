import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../navbar';
import {
    EquipmentBox1a, EquipmentBox2a, EquipmentBox3a, EquipmentBox4a, EquipmentBox5a, EquipmentBox6a,
    EquipmentBox7a, EquipmentBox8a, EquipmentBox9a, EquipmentBox10a, EquipmentBox11a, EquipmentBox12a, EquipmentBox13a   
} from './equpmentBoxes';
import { Footer } from '../footer';




export class HomePage extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div>
                <Navbar homecolor="var(--orange)" />
                <div>
                   <Header />
                </div>
                <div className="Wrapper"> 
                    <AboutUs />
                    <OurTours />
                    <ChooseYourTour />
                    <OurPros />
                    <Equipment />
                    <EquipmentMobile />
                    <LastForm />
                </div>
                <Footer />
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
                   <div className='Header-headlinebox'><h1 className='Header-headline1'>LUCKY TRAVEL</h1></div>
                   <h2 className='Header-headline2'>
                        Лучшие<br />
                        предложения<br />
                        для вашего активного<br />
                        отдыха
                    </h2>
                    
                    <div style={{display:'flex',justifyContent:'center'}}><h2 className='Header-headline3'>Байдарочные сплавы и походы</h2></div>
                     
                    <div className='Header-line'></div>
                    <div className="Header-form-ourUs"><a href="/aboutUs">УЗНАТЬ БОЛЬШЕ</a></div>
                    <div className="Header-form-ourUs1">Оставтьте заявку для подробной информации</div>
                    <div>
                        <form action="telegram.php" method="POST" className="Header-form" >
                            <div class="form-group">
                                <label>
                                    <input name="user_name" type="text" className="Header-form-input1" placeholder="Ваше имя"></input>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input name="user_phone" type="text" className="Header-form-input2" placeholder="Ваш номер телефона"></input>
                                </label>
                            </div>
                        <button type="submit" className="Header-form-button">Отправить форму!</button>
                        </form>
                    </div>

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
                <div id='AboutUs'>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div>
                        <div className="AboutUs-headliner">О нас</div>
                        <div className="AboutUs-smallheadliner">Качество туров проверенное временем</div>
                        <div className="AboutUs-line"></div>
                        <div className="AboutUs-info1">
                            Наша команда профессионалов месяцами изучает маршруты,<br />
                            историю и тропы, что бы сделать для вас самые захватывающие<br />
                            и запоминающиеся авторские туры.
                        </div>
                        <div className="AboutUs-info2">
                            Приглашаем Вас посетить самые захватывающие места<br />
                            Полтавы, сплавится вниз по крутым течениям Ворсклы,<br />
                            а так же побывать в десятках мест по всему миру!
                        </div>
                        <div className="AboutUs-info3">
                            Наша команда профессионалов месяцами<br />
                            изучает маршруты,историю и тропы,<br />
                            что бы сделать для вас<br /> самые захватывающие и запоминающиеся<br />
                            авторские туры.
                        </div>
                        <div className="AboutUs-info4">
                            Приглашаем Вас посетить самые<br /> захватывающие места
                            Полтавы, сплавится вниз по крутым течениям Ворсклы,
                            а так же побывать в десятках мест по всему миру!
                        </div>
                        <div className="AboutUs-more"><a href="/aboutUs">УЗНАТЬ БОЛЬШЕ</a></div>
                    </div>
                    <div>
                        <iframe className="AboutUs-video" src="https://www.youtube.com/embed/WQ91Mql2X-k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center'}}>
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
                    </div>
                </div>
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
                <div id="OurTours">
                    <div>
                        <div className="OurTours-headliner">Мы предлагаем</div>
                        <div className="OurTours-description">
                            Уже более 5-и лет, мы помогаем любителям путешествовать планировать их отдых<br />
                            и в полной мере наслаждаться им.
                        </div>
                    </div>
                    <div className="OurTours-tours">
                        <div className="OurTours-tours1">
                        <a className="OurTours-tours-a1" href="/kayakalloysmob">
                            <div className="OurTours-kayaksalloys">
                                <div className="OurTours-tourname">Байдарочные<br /> сплавы</div>
                                <div className="OurTours-more">Подробней</div> 
                            </div>
                        </a>
                        </div>
                        <div className="OurTours-tours2">
                        <a className="OurTours-tours-a2" href="/authorsToursmob">
                            <div className="OurTours-authorstours">
                                <div className="OurTours-tourname">Авторские<br /> туры</div>
                                <div className="OurTours-more">Подробней</div>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="OurTours-tours-mob">
                        <div className="OurTours-tours1-mob">
                        <a className="OurTours-tours-a1-mob" href="/kayakAlloys">
                            <div className="OurTours-kayaksalloys-mob">
                                <div className="OurTours-tourname-mob">Байдарочные<br /> сплавы</div>
                                <div className="OurTours-more-mob">Подробней</div> 
                            </div>
                        </a>
                        </div>
                        <div className="OurTours-tours2-mob">
                        <a className="OurTours-tours-a2-mob" href="/authorsTours">
                            <div className="OurTours-authorstours-mob">
                                <div className="OurTours-tourname-mob">Авторские<br /> туры</div>
                                <div className="OurTours-more-mob">Подробней</div>
                            </div>
                        </a>
                        </div>
                    </div>
                </div>
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
                <div id="ChooseYourTour">
                    <div>
                        <form action="telegram.php" method="POST" className="ChooseYourTour-form" >
                            <div class="form-group">
                                <label>
                                    <input name="user_name" type="text" className="ChooseYourTour-input" placeholder="Ваше имя"></input>
                                </label>
                            </div>
                            <div class="form-group">
                                <label>
                                    <input name="user_phone" type="text" className="ChooseYourTour-input" placeholder="Ваш номер телефона"></input>
                                </label>
                            </div>
                            <div className='ChooseYourTour-buttonBox'>
                                <button type="submit" className="ChooseYourTour-button">Отправить форму!</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="ChooseYourTour-headliner">Выбери свой<br /> lucky тур</div>
                        <div className="ChooseYourTour-smallheadliner">Лучшие эмоции</div>
                        <div className="ChooseYourTour-line"></div>
                        <div className="ChooseYourTour-description">
                            Если Вы еще не определились, как именно хотите провести<br />
                            свой отдых, то мы можем Вам в это помочь! Заполните<br />
                            форму и мы перезвоним Вам в ближайшее время!
                        </div>
                        <div className="ChooseYourTour-more"><a href="/aboutus">Узнать больше</a></div>
                        <div className="ChooseYourTour-description">
                            Также, если Вы ищите отдых со своими коллегами<br />
                            или же у Вас просто большая компания друзей, мы<br />
                            можем организовать отдельный отдых для Вас!
                        </div>
                        <div className="ChooseYourTour-more"><a href="/kayakalloyspers">Узнать больше</a></div>
                    </div>
                </div>
            </div>
        )
    }
}
//Our pros block
export class OurPros extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="Blocks">
                <div id="OurPros">
                    <div className="OurPros-headliner">Наши преимущества</div>
                    <div className="OurPros-container">
                        <div className="OurPros-prosbox">
                            <div className="OurPros-prosbox-imgbox"><img className="OurPros-prosbox-img" src='cup.svg' alt="Professionalism" /></div>
                            <div className="OurPros-prosbox-headliner">Профессионализм</div>
                            <div className="OurPros-prosbox-description">
                                Каждый байдарочный сплав<br />
                                или авторский тур, тчательно<br />
                                планируется специалистами,<br />
                                которые знают буквально все<br />
                                о тех местах куда идут!
                            </div>
                        </div>
                        <div className="OurPros-prosbox">
                            <div className="OurPros-prosbox-imgbox"><img className="OurPros-prosbox-img" src='tourist.svg' alt="Uniqueness" /></div>
                            <div className="OurPros-prosbox-headliner">Уникальность</div>
                            <div className="OurPros-prosbox-description">
                                Любое путешествие с нами<br />
                                абсолютно уникально, поэтому<br />
                                незабываемые впечатления и<br />
                                приятные воспоминамия<br /> 
                                Вам гарантированы!
                            </div>
                        </div>
                        <div className="OurPros-prosbox">
                            <div className="OurPros-prosbox-imgbox"><img className="OurPros-prosbox-img" src='shield.svg' alt="Reliability" /></div>
                            <div className="OurPros-prosbox-headliner">Надёжность</div>
                            <div className="OurPros-prosbox-description">
                                Мы уже много лет на рынке,<br />
                                поэтому способны организовать<br />
                                и провести самые сложные<br /> 
                                и при этом уникальные и<br /> 
                                незабываемые путешествия!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
//Equipment block
class Equipment extends React.Component{
    constructor(){
        super()
        this.state = {
            boxes: [
            <EquipmentBox photo="kayak.JPG" name="Байдарка двухместная" desc="Укомплектованная" price="300 грн/ сутки" />,
            <EquipmentBox photo="kayak1.jpg" name="Байдарка трёхместная" desc="Укомплектованная" price="450 грн/ сутки" />,
            <EquipmentBox photo="tent.JPG" name="Палатка двухместная" desc="(двухслойная)" price="50 грн./Сутки От 5 дней 40грн." />,
            <EquipmentBox photo="tent1.jpg" name="Палатка трёхместная"  desc="(двухслойная)" price="60 грн./Сутки От 5 дней 50грн." />,
            <EquipmentBox photo="backpack1.jpg" name="Рюкзак туристический" desc="45 л" price="35 грн/ сутки , от 5 дней 30 грн." />,
            <EquipmentBox photo="backpack2.JPG" name="Рюкзак туристический"  desc="55 +15 л." price="40 грн/сутки от 5 суток 35 грн." />,
            <EquipmentBox photo="sleepingbag.JPG" name="Спальник"  desc="летний" price="25 грн/ сутки (от 5 суток 20 грн)" />,
            <EquipmentBox photo="sleepingbag(cold).JPG" name="Спальник"  desc="зимний" price="35 грн/ сутки(от 5 дней 30 грн)" />,
            <EquipmentBox photo="sleepingbag(cold).JPG" name="Спальник"  desc="демисезонный (зима-осень)" price="30 грн/ сутки (от 5 дней по 25)" />,
            <EquipmentBox photo="karemat.JPG" name="Каремат ижевский"  desc="Удобный и лёгкий" price="15 грн/ сутки (от 5 суток 12 грн)" />,
            <EquipmentBox photo="hermeticbag.jpg" name="Гермомешок"  desc="60 л" price="30 грн/ сутки" />,
            <EquipmentBox photo="hermeticbag.jpg" name="Гермомешок"  desc="80 л" price="40 грн/ сутки" />,
            <EquipmentBox photo="chair.jpg" name="Стулья раскладные"  desc="" price="15 грн сутки (от 5 дней 12 грн)" />
            ],
            boxesAnimated: [
            <EquipmentBox1a/>,
            <EquipmentBox2a/>,
            <EquipmentBox3a/>,
            <EquipmentBox4a/>,
            <EquipmentBox5a/>,
            <EquipmentBox6a/>,
            <EquipmentBox7a/>,
            <EquipmentBox8a/>,
            <EquipmentBox9a/>,
            <EquipmentBox10a />,
            <EquipmentBox11a />,
            <EquipmentBox12a />,
            <EquipmentBox13a />
            ],
            index: 0,
            index1: 1,
            index2: 2,
            index3: 3,

            animation: false,
        }
    }

    prev(){
        if(this.state.index3 > 3){
            this.setState({
                index: this.state.index - 1,
                index1: this.state.index1 - 1,
                index2: this.state.index2 - 1,
                index3: this.state.index3 - 1,
            })
        }    
    }
    next(){
        if(this.state.index3 < 12){
            this.setState({
                index: this.state.index + 1,
                index1: this.state.index1 + 1,
                index2: this.state.index2 + 1,
                index3: this.state.index3 + 1,
                animation: !this.state.animation,
            })
        }
    }

    render(){
        return(

            <div className="Blocks">
                <div id="Equipment">
                    <div className="Equipment-up">
                        <div className="Equipment-up-headliner">Аренда туристического снаряжения</div>
                        <div className="Equipment-up-headlinermobile">Аренда снаряжения</div>
                        <div className="Equipment-up-container">
                            <div className="Equipment-up-description">Самые выгодные предложения Полтавы!</div>
                            <div className="Equipment-up-button"><a href="/equipment">Посмотреть все</a></div>
                        </div>
                    </div>
                    <div className="Equipment-menu">
                            {this.state.boxes[this.state.index]}
                            {this.state.boxes[this.state.index1]}
                            {this.state.boxes[this.state.index2]}
                            {this.state.boxesAnimated[this.state.index3]}
                    </div>
                    <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
                        <div className="Equipment-menu-buttonbox1"><button id="Equipment-menu-prev" onClick={this.prev.bind(this)}><img src="arrowBlack.svg" alt="prev"></img></button></div>
                        <div className="Equipment-menu-buttonbox2"><button id="Equipment-menu-next" onClick={this.next.bind(this)}><img src="arrowBlack.svg" alt="next"></img></button></div>
                    </div>
                </div>
            </div>
            
        )
    }
}
class EquipmentBox extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <a href="/equipment" id="EquipmentBox-href">
            <div className="Equipment-menu-box">
                <div className="Equipment-menu-box-photo"><img alt="photo" src={this.props.photo}></img></div>
                <div className="Equipment-menu-box-name">{this.props.name}<br />{this.props.model}</div>
                <div className="Equipment-menu-box-description">{this.props.desc}</div>
                <div className="Equipment-menu-box-price">{this.props.price}</div>

            </div>
            </a>
        )
    }
}



class EquipmentMobile extends React.Component{
    constructor(){
        super()

        this.state ={
            boxes: [
            <EquipmentBoxMobile name="Байдарка двухместная в комплекте" photo="kayak.JPG" price="300 грн" days="/ сутки" />,
            <EquipmentBoxMobile name="Байдарка двухместная в комплекте" photo="kayak1.jpg" price="450 грн" days="/ сутки" />,
            <EquipmentBoxMobile name="Палатка двухместная (двухслойная)" photo="tent.JPG" price="50 грн./Сутки" days="От 5 дней 40грн." />,
            <EquipmentBoxMobile name="Палатка двухместная (двухслойная)" photo="tent1.jpg" price="60 грн./Сутки" days="От 5 дней 50грн." />,
            <EquipmentBoxMobile name="Рюкзак туристический 45 л" photo="backpack1.jpg" price="35 грн/сутки" days="от 5 дней 30 грн." />,
            <EquipmentBoxMobile name="Рюкзак туристический 55 +15 л." photo="backpack2.JPG" price="40 грн/сутки" days="от 5 суток 35 грн." />,
            <EquipmentBoxMobile name="Спальник летний" photo="sleepingbag.JPG" price="25 грн/сутки" days="от 5 суток 20 грн" />,
            <EquipmentBoxMobile name="Спальник зимний" photo="sleepingbag(cold).JPG" price="35 грн/сутки" days="от 5 суток 30 грн" />,
            <EquipmentBoxMobile name="Спальник демисезонный" photo="sleepingbag(cold).JPG" price="30 грн/сутки" days="от 5 суток 25 грн" />,
            <EquipmentBoxMobile name="Каремат ижевский" photo="karemat.JPG" price="15 грн/сутки" days="от 5 дней 12 грн" />,
            <EquipmentBoxMobile name="Гермомешок 60 л" photo="hermeticbag.jpg" price="30 грн/" days="сутки" />,
            <EquipmentBoxMobile name="Гермомешок 80 л" photo="hermeticbag.jpg" price="40 грн/" days="сутки" />,
            <EquipmentBoxMobile name="Стулья раскладные" photo="chair.jpg" price="15 грн/сутки" days="от 5 дней 12 грн" />
            ],
            index1: 0,
            index2: 1
    
        }
    }
    prev(){
        if(this.state.index1 >= 2){
            this.setState({
                index1: this.state.index1 - 2,
                index2: this.state.index2 - 2,
            })
        }    
    }
    next(){
        if(this.state.index2 <= 11){
            this.setState({
                index1: this.state.index1 + 2,
                index2: this.state.index2 + 2,
            })
        }
    }

    render(){
        return(
            <div class="Blocks">
            <div id='EquipmentMobile'>
                {this.state.boxes[this.state.index1]}
                {this.state.boxes[this.state.index2]}
                <div className="EquipmentMobile-buttons">
                    <div className="EquipmentMobile-buttons-prev"><button onClick={this.prev.bind(this)}></button></div>
                    <div className="EquipmentMobile-buttons-next"><button onClick={this.next.bind(this)}></button></div>
                </div>
            </div>
            </div>
        )
    }
}


class EquipmentBoxMobile extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div style={{display:'flex',flexDirection:'column',marginBottom:'18px'}}>
                <div className="Equipment-menu-box-name-mobile">{this.props.name}</div>
                <div className="Equipment-menu-box-mobile">
                    <div className="Equipment-menu-box-photo-mobile"><img alt="mobilephoto" src={this.props.photo}></img></div>
                    <div className="Equipment-menu-box-conrainer">
                        <div className="Equipment-menu-box-price-mobile">{this.props.price}<br />{this.props.days}</div>
                        <div className="Equipment-menu-box-button-mobile"><a href="/equipmentmobile">Арендовать</a></div>
                    </div>
                </div>
            </div>
        )
    }
}

// Last form block  "kayaksAlloys.png Mobile"
class LastForm extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="Blocks">
                <div id="LastForm">
                    <div className="LastForm-up">
                        <div className="LastForm-up-headliner">Вы уже почти там!</div>
                        <div className="LastForm-up-description">Просто заполните форму, и Вы уже на пол пути к туру вашей мечты!</div>
                    </div>
                    <div className="LastForm-down">
                    <form action="telegram.php" method="POST" className="Header-form" >
                            <div class="form-group">
                                <label>
                                    <input name="user_name" type="text" className="Header-form-input1" style={{boxShadow:'5px 10px 80px 0px rgba(0,0,0,0.3)'}} placeholder="Ваше имя"></input>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input name="user_phone" type="text" className="Header-form-input2" style={{boxShadow:'5px 10px 80px 0px rgba(0,0,0,0.3)'}} placeholder="Ваш номер телефона"></input>
                                </label>
                            </div>
                        <button type="submit" className="Header-form-button">Отправить форму!</button>
                        </form>
                    </div>
                    <div style={{display:'flex',justifyContent:'center'}}>
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
                    </div>
                </div>
            </div>
        )
    }
}