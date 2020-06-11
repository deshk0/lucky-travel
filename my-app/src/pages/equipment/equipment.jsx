import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";


import { Navbar } from '../navbar';
import { Footer } from '../footer';


export class Equipment extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div>
                <Helmet>
                    <title>Аренда байдарок в Полтаве — Lucky Travel</title>
                    <meta charSet="utf-8" />
                    <meta 
                        name="keywords"
                        content="байдарки Полтава, прокат байдарок в Полтаве, аренда байдарок в Полтаве"
                    />
                    <meta
                        name="description"
                        content="Аренда самого удобного и надежного туристического снаряжения в полтаве! При аренде от 5-и дней – Скидка!"
                    />
                </Helmet>
                <Navbar equipmentcolor="var(--blackOrange)" />
                <div className="GoToMobile"><a href="equipmentmobile">Нажмите чтобы перейти в мобильную версию сайта</a></div>

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
                    <h1 style={{color:'var(--blackOrange)',marginBottom:'0px',fontSize:'50px',textTransform:'uppercase'}} className='Header-headline1'>
                       Прокат байдарок в Полтаве
                    </h1>
                   <h2 className='Header-headline2' style={{margin:'65px 0px',fontSize:'36px'}}>
                        Аренда байдарок и туристического<br />
                        снаряжения в Полтаве<br />
                    </h2>
                    <div style={{color:"white",fontFamily:'HELEVETICAREGULAR',fontSize:'24px'}}>Оставтьте заявку для подробной информации</div>
                    <div>
                        <form action="telegram.php" method="POST" className="Header-form" >
                            <div class="form-group">
                                <input name="user_name" type="text" className="Header-form-input1" placeholder="Ваше имя"></input>
                            </div>
                            <div>
                                <input name="user_phone" type="text" className="Header-form-input2" placeholder="Ваш номер телефона"></input>
                            </div>
                        <button style={{backgroundColor:'var(--blackOrange)'}} type="submit" className="Header-form-button">Отправить форму!</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
class Main extends React.Component {
    constructor(){
        super()
        this.equipmentsTents = [
            <EquipmentBox
                img = "tent.JPG"
                name = "Палатка двухместная (двухслойная) "
                price = "50 грн./Сутки От 5 дней 40грн."
                class = 'tent'
            />,
            <EquipmentBox
                img = "tent1.jpg"
                name = "Палатка трёхместная (двухслойная)"
                price = "60 грн./Сутки От 5 дней 50грн."
                class = 'tent'
            />,
            
        ]
        this.equipmentsBackpacks = [
            <EquipmentBox
                img = "backpack1.jpg"
                name = "Рюкзак туристический 45 л"
                price = "35 грн/ сутки , от 5 дней 30 грн."
                class = 'Backpack'
            />,
            <EquipmentBox
                img = "backpack2.JPG"
                name = "Рюкзак туристический 55 +15 л."
                price = "40 грн/сутки от 5 суток 35 грн."
                class = 'Backpack'
            />,
        ]
        this.equipmentsSleepingbags = [
            <EquipmentBox
                img = "sleepingbag.JPG"
                name = "Спальник летний"
                price = "25 грн/ сутки (от 5 суток 20 грн)"
                class = 'Sleeping bag'
            />,
            <EquipmentBox
                img = "sleepingbag(cold).JPG"
                name = "Спальник зимний"
                price = "35 грн/ сутки(от 5 дней 30 грн)"
                class = 'Sleeping bag'
            />,
            <EquipmentBox
                img = "sleepingbag(cold).JPG"
                name = "Спальник демисезонный (зима-осень) "
                price = " 30 грн/ сутки (от 5 дней по 25)"
                class = 'Sleeping bag'
            />
        ]
        this.equipmentsKaremats = [
            <EquipmentBox
                img = "karemat.JPG"
                name = "Каремат ижевский"
                price = "15 грн/ сутки (от 5 суток 12 грн)"
                class = 'Karemat'
            />,
        ]
        this.equipmentsHermeticbags = [
            <EquipmentBox
                img = "hermeticbag.jpg"
                name = "Гермомешок 60 л"
                price = "30 грн/ сутки"
                class = 'Hermetic bag'
            />,
            <EquipmentBox
                img = "hermeticbag.jpg"
                name = "Гермомешок 80 л"
                price = "40 грн/ сутки"
                class = 'Hermetic bag'
            />,
        ]
        this.equipmentsFoldingchairs = [
            <EquipmentBox
                img = "chair.jpg"
                name = "Стулья раскладные"
                price = "15 грн сутки (от 5 дней 12 грн)"
                class = 'Folding chair'
            />,
        ]
        this.equipmentsKayaks = [
            <EquipmentBox
                img = "kayak.JPG"
                name = "Байдарка двухместная в комплекте"
                price = "300 грн/ сутки"
                class = 'Kayak'
            />,
            <EquipmentBox
                img = "kayak1.jpg"
                name = "Байдарка трёхместная в комплекте"
                price = "450 грн/ сутки"
                class = 'Kayak'
            />,
        ]
        
        this.state = {
            equipments:[
                <EquipmentBox
                    img = "kayak.JPG"
                    name = "Байдарка двухместная в комплекте"
                    price = "300 грн/сутки"
                    class = 'Kayak'
                />,
                <EquipmentBox
                    img = "kayak1.jpg"
                    name = "Байдарка трёхместная в комплекте"
                    price = "450 грн/ сутки"
                    class = 'Kayak'
                />,
                <EquipmentBox
                    img = "tent.JPG"
                    name = "Палатка двухместная (двухслойная) "
                    price = "50 грн./Сутки От 5 дней 40грн."
                    class = 'tent'
                />,
                <EquipmentBox
                    img = "tent1.jpg"
                    name = "Палатка трёхместная (двухслойная)"
                    price = "60 грн./Сутки От 5 дней 50грн."
                    class = 'tent'
                />,
                <EquipmentBox
                    img = "backpack1.jpg"
                    name = "Рюкзак туристический 45 л"
                    price = "35 грн/ сутки , от 5 дней 30 грн."
                    class = 'Backpack'
                />,
                <EquipmentBox
                    img = "backpack2.JPG"
                    name = "Рюкзак туристический 55 +15 л."
                    price = "40 грн/сутки от 5 суток 35 грн."
                    class = 'Backpack'
                />,
                <EquipmentBox
                    img = "sleepingbag.JPG"
                    name = "Спальник летний"
                    price = "25 грн/ сутки (от 5 суток 20 грн)"
                    class = 'Sleeping bag'
                />,
                <EquipmentBox
                    img = "sleepingbag(cold).JPG"
                    name = "Спальник зимний"
                    price = "35 грн/ сутки(от 5 дней 30 грн)"
                    class = 'Sleeping bag'
                />,
                <EquipmentBox
                    img = "sleepingbag(cold).JPG"
                    name = "Спальник демисезонный (зима-осень) "
                    price = " 30 грн/ сутки (от 5 дней по 25)"
                    class = 'Sleeping bag'
                />,
                <EquipmentBox
                    img = "karemat.JPG"
                    name = "Каремат ижевский"
                    price = "15 грн/ сутки (от 5 суток 12 грн)"
                    class = 'Karemat'
                />,
                <EquipmentBox
                    img = "hermeticbag.jpg"
                    name = "Гермомешок 60 л"
                    price = "30 грн/ сутки"
                    class = 'Hermetic bag'
                />,
                <EquipmentBox
                    img = "hermeticbag.jpg"
                    name = "Гермомешок 80 л"
                    price = "40 грн/ сутки"
                    class = 'Hermetic bag'
                />,
                <EquipmentBox
                    img = "chair.jpg"
                    name = "Стулья раскладные"
                    price = "15 грн сутки (от 5 дней 12 грн)"
                    class = 'Folding chair'
                />,
            
            ],
            tent: false,
            Backpack: false,
            Sleepingbag: false,
            Karemat: false,
            Hermeticbag: false,
            Foldingchair: false,
            Kayak: false,
        }
    }
    TentFilter(e){
        e.preventDefault()
        const arr = this.equipmentsTents
        this.setState({
            equipments: arr,
            tent: true,
            Backpack: false,
            Sleepingbag: false,
            Karemat: false,
            Hermeticbag: false,
            Foldingchair: false,
            Kayak: false,
        })
        console.log(arr)
    }
    BackpackFilter(e){
        e.preventDefault()
        const arr = this.equipmentsBackpacks
        this.setState({
            equipments: arr,
            tent: false,
            Backpack: true,
            Sleepingbag: false,
            Karemat: false,
            Hermeticbag: false,
            Foldingchair: false,
            Kayak: false,
        })
        console.log(arr)
    }
    SleepingbagFilter(e){
        e.preventDefault()
        const arr = this.equipmentsSleepingbags
        this.setState({
            equipments: arr,
            tent: false,
            Backpack: false,
            Sleepingbag: true,
            Karemat: false,
            Hermeticbag: false,
            Foldingchair: false,
            Kayak: false,
        })
        console.log(arr)
    }
    KarematFilter(e){
        e.preventDefault()
        const arr = this.equipmentsKaremats
        this.setState({
            equipments: arr,
            tent: false,
            Backpack: false,
            Sleepingbag: false,
            Karemat: true,
            Hermeticbag: false,
            Foldingchair: false,
            Kayak: false,
        })
        console.log(arr)
    }
    HermeticbagFilter(e){
        e.preventDefault()
        const arr = this.equipmentsHermeticbags
        this.setState({
            equipments: arr,
            tent: false,
            Backpack: false,
            Sleepingbag: false,
            Karemat: false,
            Hermeticbag: true,
            Foldingchair: false,
            Kayak: false,
        })
        console.log(arr)
    }
    FoldingchairFilter(e){
        e.preventDefault()
        const arr = this.equipmentsFoldingchairs
        this.setState({
            equipments: arr,
            tent: false,
            Backpack: false,
            Sleepingbag: false,
            Karemat: false,
            Hermeticbag: false,
            Foldingchair: true,
            Kayak: false,
        })
        console.log(arr)
    }
    KayakFilter(e){
        e.preventDefault()
        const arr = this.equipmentsKayaks
        this.setState({
            equipments: arr,
            tent: false,
            Backpack: false,
            Sleepingbag: false,
            Karemat: false,
            Hermeticbag: false,
            Foldingchair: false,
            Kayak: true,
        })
        console.log(arr)
    }

    render(){
        return(
            <div id='Main'>
                <div>
                <div className="Equipment-filter">
                    <div>Фильтры:</div>
                    <div onClick={this.TentFilter.bind(this)} className="Equipment-filter-button"><a href="#EquipmentBox" style={{color:`${this.state.tent ? 'var(--blackOrange)': ''}`}}>Палатки</a></div>
                    <div onClick={this.BackpackFilter.bind(this)} className="Equipment-filter-button"><a href="#EquipmentBox" style={{color:`${this.state.Backpack ? 'var(--blackOrange)': ''}`}}>Рюкзаки</a></div>
                    <div onClick={this.SleepingbagFilter.bind(this)} className="Equipment-filter-button"><a href="#EquipmentBox" style={{color:`${this.state.Sleepingbag ? 'var(--blackOrange)': ''}`}}>Спальники</a></div>
                    <div onClick={this.KarematFilter.bind(this)} className="Equipment-filter-button"><a href="#EquipmentBox" style={{color:`${this.state.Karemat ? 'var(--blackOrange)': ''}`}}>Керематы</a></div>
                    <div onClick={this.KayakFilter.bind(this)} className="Equipment-filter-button"><a href="#EquipmentBox" style={{color:`${this.state.Kayak ? 'var(--blackOrange)': ''}`}}>Байдарки</a></div>
                    <div onClick={this.HermeticbagFilter.bind(this)} className="Equipment-filter-button"><a href="#EquipmentBox" style={{color:`${this.state.Hermeticbag ? 'var(--blackOrange)': ''}`}}>Гермомешки</a></div>
                    <div onClick={this.FoldingchairFilter.bind(this)} className="Equipment-filter-button"><a href="#EquipmentBox" style={{color:`${this.state.Foldingchair ? 'var(--blackOrange)': ''}`}}>Расклыдные стулья</a></div>
                </div>
                <div className="KayakAlloysSide-contaner">
                    {!this.state.proverka}
                    {this.state.equipments}
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
            <div id="EquipmentBox">
                <div className="EquipmentBox-picture"><img src={this.props.img}></img></div>
                <div style={{display:"flex",justifyContent:'space-between',width:'100%'}}>
                    <div className="EquipmentBox-name">{this.props.name}</div>
                    <div className="EquipmentBox-price">{this.props.price}</div>
                    <a  style={{display:'flex',flexDirection:'column',justifyContent:"center",borderRadius:'25px'}} className="buttonHover" href="equipmentReg">
                        <button className="EquipmentBox-button">Арендовать</button>
                    </a>
                </div>
            </div>
        )
    }
}