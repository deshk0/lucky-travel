import React, { useDebugValue } from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../navbar';
import { Footer } from '../footer';


export class KayakAlloysMob extends React.Component{
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

class Main extends React.Component{
    constructor(){
        super()


        this.state = {

            main: 'Байдарочные сплавы',
            sides: ['Байдарочные сплавы','Туры выходного дня','Персональные сплавы'],
            second:'Туры выходного дня',
            third:'Персональные сплавы'

        }
    }

    Expand(){
        const button = document.getElementsByClassName('KayakAlloysMob-toggle-button-box')
        button[0].classList.toggle('KayakAlloysMob-toggle-button-box_active')
    }
    changeMain1(){
        this.setState({
            main: 'Байдарочные сплавы'
        })
        const button = document.getElementsByClassName('KayakAlloysMob-toggle-button-box')
        button[0].classList.toggle('KayakAlloysMob-toggle-button-box_active')
    }
    changeMain2(){
        this.setState({
            main: 'Туры выходного дня'
        })
        const button = document.getElementsByClassName('KayakAlloysMob-toggle-button-box')
        button[0].classList.toggle('KayakAlloysMob-toggle-button-box_active')
    }
    changeMain3(){
        this.setState({
            main: 'Персональные сплавы'
        })
        const button = document.getElementsByClassName('KayakAlloysMob-toggle-button-box')
        button[0].classList.toggle('KayakAlloysMob-toggle-button-box_active')
    }


    render(){
        return(
            <div className="Blocks">
                <div style={{display:'flex',flexDirection:'column'}}>
                <div className="KayakAlloysMob-toggle">
                    <div>Выберите раздел</div>
                    <div style={{display:'flex',justifyContent:'center'}}><a onClick={this.Expand.bind(this)} className="KayakAlloysMob-toggle-button1" href="#">{this.state.main}<span></span></a></div>
                    <div className="KayakAlloysMob-toggle-button-box">
                        <a onClick={this.changeMain1.bind(this)} className="KayakAlloysMob-toggle-button" href="#">{this.state.sides[0]}</a>
                        <a onClick={this.changeMain2.bind(this)} className="KayakAlloysMob-toggle-button" href="#">{this.state.sides[1]}</a>
                        <a onClick={this.changeMain3.bind(this)} className="KayakAlloysMob-toggle-button" href="#">{this.state.sides[2]}</a>
                    </div>
                </div>

                <div className="KayakAlloysMob-container">
                    {this.state.main === 'Байдарочные сплавы' ? <KayakAlloys /> :
                     this.state.main === 'Персональные сплавы' ? <PersonalAlloys /> :
                     this.state.main === 'Туры выходного дня' ? <WeekendsTours /> : ''
                    }
                </div>
                </div>
            </div>
        )
    }
}


class KayakAlloys extends React.Component{
    constructor(){
        super()

        this.boxes = [
            <KayakAlloysbox 
        
            name="По реке Псёл" secodname="(весёлое родео) с. Климентово - с. Пылевка                "
            days="02 Дня"   daysI = '2' 
            nights="02 ночи" 
            date="19.06.2020"   dateI = '19' mountsI = "6"
            time="17:30" 
            price="1350 грн"    priceI = '1350'

            human="/чел"
            
            />,
            <KayakAlloysbox 
        
            name="Трёхдневный  по р. Ворскла" secodname="(с.Писаревщина - с.Гавронцы                    )"
            days="03 Дня"   daysI = '3' 
            nights="03 ночи" 
            date="26.06.2020"   dateI = '26' mountsI = "6"
            time="17:30" 
            price="1750 грн"    priceI = '1750'
            
            human="/чел"

            />
            
        ]

        this.state = {
            boxes : [
                <KayakAlloysbox 
            
                name="По реке Псёл" secodname="(весёлое родео) с. Климентово - с. Пылевка                "
                days="02 Дня"   daysI = '2' 
                nights="02 ночи" 
                date="19.06.2020"   dateI = '19' mountsI = "6"
                time="17:30" 
                price="1350 грн"    priceI = '1350'
    
                human="/чел"
                
                />,
                <KayakAlloysbox 
            
                name="Трёхдневный  по р. Ворскла" secodname="(с.Писаревщина - с.Гавронцы                    )"
                days="03 Дня"   daysI = '3' 
                nights="03 ночи" 
                date="26.06.2020"   dateI = '26' mountsI = "6"
                time="17:30" 
                price="1750 грн"    priceI = '1750'
                
                human="/чел"
    
                />
            ],

            FromCheapToExpensive: false,
            dateSorting: false,
            animation: false

        }
    }
    FromCheapToExpensive(){
        const arr = this.boxes
        if(this.state.animation === true){
            const box = document.getElementsByClassName('KayakAlloysMob-KayakAlloysbox')
            const className = 'KayakAlloysMob-KayakAlloysbox_active'
            box[0].classList.toggle(className)
            box[1].classList.toggle(className)
        }

        //box.map( item => item.classList.toggle('KayakAlloysMob-KayakAlloysbox_active'))

        //const newArr = arr.map(item => item.number)
        //console.log(newArr)
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.priceI > b.props.priceI) return 1;
            if (a.props.priceI == b.props.priceI) return 0;
            if (a.props.priceI < b.props.priceI) return -1;
          });
        //const newArr2 = newArr1.map(item => item.box)
          
        //const sortArr = newArr.sort(compareNumeric);
        console.log(newArr1)
        if(newArr1){
            this.setState({
                boxes: <div>{newArr1}</div>,

                FromCheapToExpensive: true,
                dateSorting: false,
                animation: true

            })
        }
    }
    dateSorting(){
        const arr = this.boxes
        if(this.state.animation === true){
            const box = document.getElementsByClassName('KayakAlloysMob-KayakAlloysbox')
            const className = 'KayakAlloysMob-KayakAlloysbox_active'
            box[0].classList.toggle(className)
            box[1].classList.toggle(className)
        }

        //const newArr = arr.map(item => item.number)
        //console.log(newArr)
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.mountsI > b.props.mountsI) return 1;
            if (a.props.mountsI == b.props.mountsI) return 0;
            if (a.props.mountsI < b.props.mountsI) return -1;
        });
        const newArr2 = newArr1.sort(function(a, b) {
            if(a.props.mountsI === b.props.mountsI){
                if (a.props.dateI > b.props.dateI) return 1;
                if (a.props.dateI == b.props.dateI) return 0;
                if (a.props.dateI < b.props.dateI) return -1;
            }
        });
        //const newArr2 = newArr1.map(item => item.box)
          
        //const sortArr = newArr.sort(compareNumeric);
        console.log(newArr2)
        if(newArr2){
            this.setState({
                boxes: <div>{newArr2}</div>,

                FromCheapToExpensive: false,
                dateSorting: true,
                animation: true

            })
        }
    }


    render(){
        return(
            <div>
                <div className="KayakAlloysMob-filter">
                    <div className="KayakAlloysMob-filter-text">Сортировка:</div>
                    <div onClick={this.dateSorting.bind(this)} className="KayakAlloysMob-filter-text" style={{color:`${this.state.dateSorting ? 'var(--blue)': ''}`}} >
                        Ближайшие
                    </div>
                    <div onClick={this.FromCheapToExpensive.bind(this)} className="KayakAlloysMob-filter-text" style={{color:`${this.state.FromCheapToExpensive ? 'var(--blue)': ''}`}}>
                        От дешевых к дорогим
                    </div>
                </div>
                {this.state.boxes}
                <div className="KayakAlloysMob-desc">
                    <div className="KayakAlloysMob-desc-title">Что включено</div>
                    <div className="KayakAlloysMob-desc-minititle">В стоимость байдарочных туров включено:</div>
                    <div className="KayakAlloysMob-desc-desc">
                        Трансфер байдарок и участников тура<br />
                        Место в байдарке/весло/спасжелет/гермомешок<br />
                        Сопровождение инструкторов<br />
                        Питание ( холодное и горячее )<br />
                        2-3 раза в день ( подробно в каждом туре) вода, <br />
                        для приготовления пищи.<br />
                        Палатка на 2-3 места<br />
                        Костровой набор<br />
                        Сувениры на память<br />
                    </div>
                    <div className="KayakAlloysMob-desc-minititle">В стоимость не включено:</div>
                    <div className="KayakAlloysMob-desc-desc">
                        Личные расходы<br />
                        Спальник + Карематы = 60 грн. ночь
                    </div>
                    <div className="KayakAlloysMob-desc-title" style={{marginTop:'50px'}}>Мы перезвоним!</div>
                    <div style={{display:'flex',flexDirection:'column',marginTop:'10px',marginBottom:'100px',alignItems:'center'}}>
                    <div style={{textAlign:'center'}}>
                        Если у Вас остались какие то вопросы,<br />
                        или Вы хотите заказать тур, мы перезвоним!
                    </div>
                    <div className="mobileformbox">
                    <form action="telegram.php" method="POST" className="mobile-form" >
                        <div class="mobile-form-group">
                            <label>
                                <input name="user_name" type="text" className="mobile-form-input" style={{border:'1px solid var(--blue)'}} placeholder="Ваше имя"></input>
                            </label>
                        </div>
                        <div class="mobile-form-group">
                            <label>
                                <input name="user_phone" type="text" className="mobile-form-input" style={{border:'1px solid var(--blue)'}} placeholder="Ваш номер телефона"></input>
                            </label>
                        </div>
                        <div className='mobile-form-buttonBox'>
                            <button type="submit" className="mobile-form-button" style={{backgroundColor:'var(--blue)'}}>Отправить форму!</button>
                        </div>
                    </form>
                </div>
                </div>
                </div>
            </div>
        )
    }

}
class KayakAlloysbox extends React.Component{
    constructor(){
        super()

    }

    render(){
        return(
            <div className="KayakAlloysMob-KayakAlloysbox">
            <div className="KayakAlloysMob-KayakAlloysbox-photo">

            </div>
            <div className="KayakAlloysMob-KayakAlloysbox-container">
                <div className="KayakAlloysMob-KayakAlloysbox-container-name">{this.props.name}</div>
                <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                    <div className="KayakAlloysMob-KayakAlloysbox-days">{this.props.days}</div>
                    <div className="KayakAlloysMob-KayakAlloysbox-date">{this.props.date}</div>
                </div>
                <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between',marginBottom:'5px'}}>
                    <div className="KayakAlloysMob-KayakAlloysbox-nights">{this.props.nights}</div>
                    <div className="KayakAlloysMob-KayakAlloysbox-time">{this.props.time}</div>
                </div>
                <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between',marginTop:'2px'}}>
                    <div className="KayakAlloysMob-KayakAlloysbox-price">{this.props.price}<br />{this.props.human}</div>
                    <div className="KayakAlloysMob-KayakAlloysbox-button">
                        <a href="/formmobile">
                            Подробней
                        </a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

class PersonalAlloys extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="KayakAlloysMob-desc">
                <div className="KayakAlloysMob-desc-desc" style={{margin:'18px 0px'}}>                  
                    Группы от 10-ти человек и более могут самостоятельно
                    выбирать маршрут сплава продолжительностью от 1
                    до 12 дней и удобные сроки проведения похода.
                </div>
                <div className="KayakAlloysMob-desc-desc" style={{margin:'18px 0px'}}>                  
                    Для сформированных групп от 10-ти человек возможна
                    организация доставки к реке из городов: Харьков, 
                    Киев, Днепр, Полтава, Сумы, Кременчуг 
                </div>
                <div className="KayakAlloysMob-desc-desc" style={{margin:'18px 0px'}}>                  
                    Цена байдарочного сплава для Вашей группы будет 
                    составлять
                    450 грн/чел/день
                </div>
                <div className="KayakAlloysMob-desc-desc" style={{margin:'18px 0px'}}>                  
                    Трансфер байдарок и группы вы оплачиваете  
                    отдельно.   
                    Организацию трансфера мы можем взять на себя.
                </div>
                <div className="KayakAlloysMob-desc-minititle">В стоимость байдарочных туров включено:</div>
                <div className="KayakAlloysMob-desc-desc">                  
                    Место в байдарке/весло/спасжелет/гермомешок<br />
                    Сопровождение инструкторов<br />
                    Питание ( холодное и горячее ) 3 раза в день<br />
                    костровой набор<br />
                    сувениры на память
                </div>
                <div className="KayakAlloysMob-desc-minititle">В стоимость не включено:</div>
                <div className="KayakAlloysMob-desc-desc">                  
                    Личные расходы<br />
                    Спальник+ Карематы + место в палатки= 10грн. ночь<br />
                    трансфер байдарок <br />
                    трансфер участников похода
                </div>
                <div className="KayakAlloysMob-desc-title" style={{marginTop:'50px'}}>Мы перезвоним!</div>

                <div style={{display:'flex',flexDirection:'column',marginTop:'10px',marginBottom:'100px',alignItems:'center'}}>
                <div style={{textAlign:'center'}}>
                    Если Вам нужна помощь с выбором тура,<br />
                    или у Вас есть вопросы, мы перезвоним!
                </div>
                <div className="mobileformbox">
                <form action="telegram.php" method="POST" className="mobile-form" >
                    <div class="mobile-form-group">
                        <label>
                            <input name="user_name" type="text" className="mobile-form-input" style={{border:'1px solid var(--blue)'}} placeholder="Ваше имя"></input>
                        </label>
                    </div>
                    <div class="mobile-form-group">
                        <label>
                            <input name="user_phone" type="text" className="mobile-form-input" style={{border:'1px solid var(--blue)'}} placeholder="Ваш номер телефона"></input>
                        </label>
                    </div>
                    <div className='mobile-form-buttonBox'>
                        <button type="submit" className="mobile-form-button" style={{backgroundColor:'var(--blue)'}}>Отправить форму!</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        )
    }

}

class WeekendsTours extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <div className="KayakAlloysMob-desc">
                <div className="KayakAlloysMob-desc-title" style={{marginTop:'0px'}}>Тур выходного дня</div>
                <div className="KayakAlloysMob-desc-minititle" style={{color:'var(--maintext)',marginBottom:'10px',fontSize:'20px'}}>На байдарках по Ворскле</div>
                <div className="KayakAlloysMob-desc-desc" style={{margin:'18px 0px'}}>                  
                    Это сплав для всех желающих приобщится 
                    к активному отдыху на байдарках, кому хочется 
                    выехать с города и экологично провести выходные
                    на природе, где нет шума авто, спешки и суеты. 
                    А так же для тех, у кого нет времени на многодневные 
                    походы, но очень хочется активно провести выходной, 
                    перезагрузится, возобновить жизненные силы
                    и наполнится энергией природы. Чистая река, 
                    сосновые боры, уютные песчаные пляжи, 
                    великолепные пейзажи - все это и многое другое, 
                    Вы встретите на этом сплаве!
                </div>
                <div className="KayakAlloysMob-desc-title" style={{marginBottom:'10px'}}>Преимущества тура:</div>
                <div className="KayakAlloysMob-desc-desc">                  
                    Сплав проходит в 30-40 км от города Полтава, 
                    что позволяет не тратить много времени на переезд, 
                    но при этом достаточно далеко, что бы почувствовать 
                    уединение с природой. Вам не нужно заботится 
                    о туристическом снаряжении, мы все продумали за Вас. 
                    Опытные инструкторы заранее планируют место 
                    для ночевки, разбивают палатки, и подготавливают 
                    лагерь. Вы, просто наслаждаетесь природой, общением 
                    и проводите личное время на Ваше усмотрение.
                </div>
                <div className="KayakAlloysMob-desc-photo"></div>

                <div className="KayakAlloysMob-desc-title" style={{marginBottom:'10px'}}>Описание тура:</div>
                <div className="KayakAlloysMob-desc-desc">                  
                    В этом туре мы учитываем все нюансы и мелочи, 
                    с которыми вы могли бы столкнуться в поездке 
                    и берем их на себя. Отправляясь в путешествие 
                    с Lucky Travel, вам не придется беспокоиться о том, 
                    как добраться до места проживания, где позавтракать 
                    и поужинать или о других организационных вопросах. 
                    Кроме того, на протяжении всей поездки рядом 
                    с вами будет находиться сопровождающий от нашей 
                    компании, чья задача – сделать ваш отдых 
                    действительно незабываемым. Интересный досуг в 
                    лагере. Мы позаботились о том, что бы Вам было 
                    интересно и не скучно. Потому мы часто проводим 
                    разные игры для компаний ( Мафия, крокодил, пойми 
                    меня и прочее), а так же берём бадминтон 
                    и волейбольный мяч. Вечер -это посиделки 
                    у костра с ароматным чаем и веселыми 
                    байками опытных туристов или песни под гитару.
                </div>
                
                <div className="KayakAlloysMob-desc-title" style={{marginBottom:'20px',marginTop:'20px'}}>Регламент тура:</div>
                <div className="KayakAlloysMob-desc-desc">                  
                    Сплав проходит по реке Ворскла от 
                    с.Писаревщина -  до с. Гавронци
                    Сбор группы 9:00 Полтава автовокзал Киевский
                </div>
                <div className="KayakAlloysMob-desc-title" style={{marginBottom:'20px',marginTop:'20px'}}>Участника:</div>
                <div className="KayakAlloysMob-desc-desc">                  
                    Уровень сложности - простой. опыт участия 
                    в байдарочных походах не обязательно.
                </div>
                <div className="KayakAlloysMob-desc-minititle" style={{color:'var(--maintext)',marginBottom:'10px',fontSize:'20px'}}>
                    Бюджет: 1200 грн
                </div>
                <div className="KayakAlloysMob-desc-minititle">В стоимость байдарочных туров включено:</div>
                <div className="KayakAlloysMob-desc-desc">                  
                    Трансфер байдарок и участников тура<br />
                    Место в байдарке/весло/спасжелет/гермомешок<br />
                    Сопровождение инструкторов<br />
                    Питание ( холодное и горячее )<br />
                    2-3 раза в день ( подробно в каждом туре) вода, для приготовления пищи.<br />
                    Палатка на 2-3 места<br />
                    Костровой набор<br />
                    Сувениры на память
                </div>
                <div className="KayakAlloysMob-desc-minititle">В стоимость не включено:</div>
                <div className="KayakAlloysMob-desc-desc">                  
                    Личные расходы
                </div>
                <div className="KayakAlloysMob-desc-minititle" style={{color:'var(--maintext)',marginBottom:'10px',fontSize:'18px'}}>
                    Если Вы хотите отдохнуть с групой друзей от 10-и
                    человек, мы можем организовать
                    для Вас Персональный тур
                </div>

                <div className="KayakAlloysMob-desc-title" style={{marginTop:'50px'}}>Мы перезвоним!</div>

                <div style={{display:'flex',flexDirection:'column',marginTop:'10px',marginBottom:'100px',alignItems:'center'}}>
                <div style={{textAlign:'center'}}>
                    Если у Вас остались какие то вопросы,<br />
                    или Вы хотите заказать тур, мы перезвоним!
                </div>
                <div className="mobileformbox">
                <form action="telegram.php" method="POST" className="mobile-form" >
                    <div class="mobile-form-group">
                        <label>
                            <input name="user_name" type="text" className="mobile-form-input" style={{border:'1px solid var(--blue)'}} placeholder="Ваше имя"></input>
                        </label>
                    </div>
                    <div class="mobile-form-group">
                        <label>
                            <input name="user_phone" type="text" className="mobile-form-input" style={{border:'1px solid var(--blue)'}} placeholder="Ваш номер телефона"></input>
                        </label>
                    </div>
                    <div className='mobile-form-buttonBox'>
                        <button type="submit" className="mobile-form-button" style={{backgroundColor:'var(--blue)'}}>Отправить форму!</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
            </div>
        )
    }

}


