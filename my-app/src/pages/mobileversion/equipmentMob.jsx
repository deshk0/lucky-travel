import React, { useDebugValue } from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../navbar';
import { Footer } from '../footer';


export class EquipmentMobile extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div>
                <Navbar aboutuscolor="blue" />
                <div className="Wrapper">
                    <Main />
                </div>
                <Footer />
            </div>
        )
    }
}

class Main extends React.Component {
    constructor(){
        super()

        this.state ={

            main:[
                <EquipmentBoxMobile
                    img="kayak.JPG" name="Байдарка двухместная"
                    price="300 грн"  human="/сутки"
                />,
                <EquipmentBoxMobile
                    img="kayak1.jpg" name="Байдарка Трёхместная"
                    price="450 грн"  human="/сутки"
                />,                
                <EquipmentBoxMobile
                    img="tent.JPG" name="Палатка двухместная"
                    price="50 грн."  human="/Сутки"
                />,
                <EquipmentBoxMobile
                    img="tent1.jpg" name="Палатка трёхместная"
                    price="60 грн."  human="/Сутки"
                />,
                <EquipmentBoxMobile
                    img="backpack1.jpg" name="Рюкзак турист. 45 л"
                    price="35 грн"  human="/Сутки"
                />,                
                <EquipmentBoxMobile
                    img="backpack2.JPG" name="Рюкзак турист. 55 +15 л."
                    price="40 грн"  human="/Сутки"
                />,
                <EquipmentBoxMobile
                    img="sleepingbag.JPG" name="Спальник летний"
                    price="25 грн"  human="/Сутки"
                />,
                <EquipmentBoxMobile
                    img="sleepingbag(cold).JPG" name="Спальник зимний"
                    price="35 грн."  human="/Сутки"
                />,                
                <EquipmentBoxMobile
                    img="sleepingbag(cold).JPG" name="Спальник демисезонный"
                    price="30 грн."  human="/Сутки"
                />,
                <EquipmentBoxMobile
                    img="karemat.JPG" name="Каремат ижевский"
                    price="15 грн."  human="/Сутки"
                />,
                <EquipmentBoxMobile
                    img="hermeticbag.jpg" name="Гермомешок 60 л"
                    price="30 грн."  human="/Сутки"
                />,                
                <EquipmentBoxMobile
                    img="hermeticbag.jpg" name="Гермомешок 80 л"
                    price="40 грн."  human="/Сутки"
                />,
                <EquipmentBoxMobile
                    img="chair.jpg" name="Стулья раскладные"
                    price="15 грн."  human="/Сутки"
                />
            ],
            categories: 'Все товары',
            
            all:[
                <EquipmentBoxMobile
                    img="kayak.JPG" name="Байдарка двухместная"
                    price="300 грн"  human="/сутки"
                />,
                <EquipmentBoxMobile
                    img="kayak1.jpg" name="Байдарка Трёхместная"
                    price="450 грн"  human="/сутки"
                />,                
                <EquipmentBoxMobile
                    img="tent.JPG" name="Палатка двухместная"
                    price="50 грн."  human="/Сутки"
                />,
                <EquipmentBoxMobile
                    img="tent1.jpg" name="Палатка трёхместная"
                    price="60 грн."  human="/Сутки"
                />,
                <EquipmentBoxMobile
                    img="backpack1.jpg" name="Рюкзак турист. 45 л"
                    price="35 грн"  human="/Сутки"
                />,                
                <EquipmentBoxMobile
                    img="backpack2.JPG" name="Рюкзак турист. 55 +15 л."
                    price="40 грн"  human="/Сутки"
                />,
                <EquipmentBoxMobile
                    img="sleepingbag.JPG" name="Спальник летний"
                    price="25 грн"  human="/Сутки"
                />,
                <EquipmentBoxMobile
                    img="sleepingbag(cold).JPG" name="Спальник зимний"
                    price="35 грн."  human="/Сутки"
                />,                
                <EquipmentBoxMobile
                    img="sleepingbag(cold).JPG" name="Спальник демисезонный"
                    price="30 грн."  human="/Сутки"
                />,
                <EquipmentBoxMobile
                    img="karemat.JPG" name="Каремат ижевский"
                    price="15 грн."  human="/Сутки"
                />,
                <EquipmentBoxMobile
                    img="hermeticbag.jpg" name="Гермомешок 60 л"
                    price="30 грн."  human="/Сутки"
                />,                
                <EquipmentBoxMobile
                    img="hermeticbag.jpg" name="Гермомешок 80 л"
                    price="40 грн."  human="/Сутки"
                />,
                <EquipmentBoxMobile
                    img="chair.jpg" name="Стулья раскладные"
                    price="15 грн."  human="/Сутки"
                />
            ],
            tentsBox: [
                <EquipmentBoxMobile
                    img="tent.JPG" name="Палатка двухместная"
                    price="50 грн."  human="/Сутки"
                />,
                <EquipmentBoxMobile
                    img="tent1.jpg" name="Палатка трёхместная"
                    price="60 грн."  human="/Сутки"
                />,
            ],
            backpaksBox: [
                <EquipmentBoxMobile
                    img="backpack1.jpg" name="Рюкзак турист. 45 л"
                    price="35 грн"  human="/Сутки"
                />,                
                <EquipmentBoxMobile
                    img="backpack2.JPG" name="Рюкзак турист. 55 +15 л."
                    price="40 грн"  human="/Сутки"
                />,
            ],
            sleepingBagsBox: [
                <EquipmentBoxMobile
                    img="sleepingbag.JPG" name="Спальник летний"
                    price="25 грн"  human="/Сутки"
                />,
                <EquipmentBoxMobile
                    img="sleepingbag(cold).JPG" name="Спальник зимний"
                    price="35 грн."  human="/Сутки"
                />,                
                <EquipmentBoxMobile
                    img="sleepingbag(cold).JPG" name="Спальник демисезонный"
                    price="30 грн."  human="/Сутки"
                />,
            ],
            karematsBox: [
                <EquipmentBoxMobile
                    img="karemat.JPG" name="Каремат ижевский"
                    price="15 грн."  human="/Сутки"
                />,
            ],
            kayaksBox: [
                <EquipmentBoxMobile
                    img="kayak.JPG" name="Байдарка двухместная"
                    price="300 грн"  human="/сутки"
                />,
                <EquipmentBoxMobile
                    img="kayak1.jpg" name="Байдарка Трёхместная"
                    price="450 грн"  human="/сутки"
                />,         
            ],
            hermeticbagsBox: [
                <EquipmentBoxMobile
                    img="hermeticbag.jpg" name="Гермомешок 60 л"
                    price="30 грн."  human="/Сутки"
                />,                
                <EquipmentBoxMobile
                    img="hermeticbag.jpg" name="Гермомешок 80 л"
                    price="40 грн."  human="/Сутки"
                />,
            ],
            foldchairsBox:[
                <EquipmentBoxMobile
                    img="chair.jpg" name="Стулья раскладные"
                    price="15 грн."  human="/Сутки"
                />
            ]
        }
    }
    Expand(){
        const button = document.getElementsByClassName('KayakAlloysMob-toggle-button-box')
        button[0].classList.toggle('KayakAlloysMob-toggle-button-box_active')
    }
    chooseAll(){
        this.setState({
            main: this.state.all,
            categories: 'Все товары'
        })
        const button = document.getElementsByClassName('KayakAlloysMob-toggle-button-box')
        button[0].classList.toggle('KayakAlloysMob-toggle-button-box_active')
    }
    chooseTent(){
        this.setState({
            main: this.state.tentsBox,
            categories: 'Палатки'
        })
        const button = document.getElementsByClassName('KayakAlloysMob-toggle-button-box')
        button[0].classList.toggle('KayakAlloysMob-toggle-button-box_active')
    }
    chooseBackpaks(){
        this.setState({
            main: this.state.backpaksBox,
            categories: 'Рюкзаки'
        })
        const button = document.getElementsByClassName('KayakAlloysMob-toggle-button-box')
        button[0].classList.toggle('KayakAlloysMob-toggle-button-box_active')
    }
    chooseSleepingBags(){
        this.setState({
            main: this.state.sleepingBagsBox,
            categories: 'Спальники'
        })
        const button = document.getElementsByClassName('KayakAlloysMob-toggle-button-box')
        button[0].classList.toggle('KayakAlloysMob-toggle-button-box_active')
    }
    chooseKarematsBags(){
        this.setState({
            main: this.state.karematsBox,
            categories: 'Карематы'
        })
        const button = document.getElementsByClassName('KayakAlloysMob-toggle-button-box')
        button[0].classList.toggle('KayakAlloysMob-toggle-button-box_active')
    }
    chooseKayaks(){
        this.setState({
            main: this.state.kayaksBox,
            categories: 'Байдарки'
        })
        const button = document.getElementsByClassName('KayakAlloysMob-toggle-button-box')
        button[0].classList.toggle('KayakAlloysMob-toggle-button-box_active')
    }
    chooseHermeticbags(){
        this.setState({
            main: this.state.hermeticbagsBox,
            categories: 'Гермомешки'
        })
        const button = document.getElementsByClassName('KayakAlloysMob-toggle-button-box')
        button[0].classList.toggle('KayakAlloysMob-toggle-button-box_active')
    }
    chooseFoldchairs(){
        this.setState({
            main: this.state.foldchairsBox,
            categories: 'Раскладные стулья'
        })
        const button = document.getElementsByClassName('KayakAlloysMob-toggle-button-box')
        button[0].classList.toggle('KayakAlloysMob-toggle-button-box_active')
    }


    render(){
        return(
            <div className="Blocks" style={{margin:'50px 0'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                <div className="EquipmentMobile-title">Аренда снаряжения</div>
                <div className="EquipmentMobile-title" style={{textAlign:'center',fontSize:'18px'}}>За аренду от 5-и дней СКИДКА</div>

                <div className="KayakAlloysMob-toggle">
                    <div>Выберите раздел</div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <a onClick={this.Expand.bind(this)}style={{color:'var(--orange)'}}  className="KayakAlloysMob-toggle-button1" href="#">
                            {this.state.categories}
                        </a>
                    </div>
                    <div className="KayakAlloysMob-toggle-button-box">
                        <a onClick={this.chooseAll.bind(this)} className="KayakAlloysMob-toggle-button" href="#">Все товары</a>
                        <a onClick={this.chooseTent.bind(this)} className="KayakAlloysMob-toggle-button" href="#">Палатки</a>
                        <a onClick={this.chooseBackpaks.bind(this)} className="KayakAlloysMob-toggle-button" href="#">Рюкзаки</a>
                        <a onClick={this.chooseSleepingBags.bind(this)} className="KayakAlloysMob-toggle-button" href="#">Спальники</a>
                        <a onClick={this.chooseKarematsBags.bind(this)} className="KayakAlloysMob-toggle-button" href="#">Карематы</a>
                        <a onClick={this.chooseKayaks.bind(this)} className="KayakAlloysMob-toggle-button" href="#">Байдарки</a>
                        <a onClick={this.chooseHermeticbags.bind(this)} className="KayakAlloysMob-toggle-button" href="#">Гермомешки</a>
                        <a onClick={this.chooseFoldchairs.bind(this)} className="KayakAlloysMob-toggle-button" href="#">Раскладные стулья</a>
                    </div>
                </div>
                <div className="EquipmentMobile">
                    {this.state.main}
                </div>


                <div style={{display:'flex',flexDirection:'column',marginBottom:'100px'}}>
                <div className="KayakAlloysMob-desc-title" style={{marginTop:'50px',color:'var(--blackOrange'}}>Мы перезвоним!</div>

                <div style={{textAlign:'center'}}>Заполните форму и мы свяжемся с вами!</div>
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

class EquipmentBoxMobile extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="EquipmentMobileBox">
                <div className="EquipmentMobileBox-picture"><img alt="mobilephoto" src={this.props.img}></img></div>
                <div style={{display:"flex",flexDirection:'column',justifyContent:'space-evenly'}}>
                    <div className="EquipmentMobileBox-name">{this.props.name}</div>
                    <div style={{display:'flex',justifyContent:'space-between', width:'172px'}}>
                        <div className="EquipmentMobileBox-price">{this.props.price}<br />{this.props.human}</div>
                        <a  style={{display:'flex',flexDirection:'column',justifyContent:"center",borderRadius:'25px'}} className="EquipmentMobileBox-button" href="/formmobile">
                            Арендовать
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}