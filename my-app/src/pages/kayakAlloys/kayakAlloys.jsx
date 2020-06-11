import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";

import { Navbar } from '../navbar';
import { Footer } from '../footer';
import { EquipmentBox1 } from '../homepage/equpmentBoxes';


export class KayakAlloys extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta 
                        name="keywords"
                        content="байдарки Полтава, сплавы на байдарках в Полтаве, байдарочные сплавы в Полтаве"
                    />
                    <meta
                      name="description"
                      content="Команда Lucky Travel уже давно организовывает лучшие байдарочные сплавы в Полтаве. Мы предлагаем вам спуститься вниз по самым захватывающим рекам Полтавы: Ворскла, Псёл, Сула, Удай. Сплавы на байдарках – отличный активный отдых для вас и ваших друзей. Байдарки в Полтаве – новый вид активного отдыха, который объединяет и помогает отдохнуть от рутины города! "
                    />
                    <title>Байдарочные сплавы в Полтаве — Lucky Travel</title>

                    
                </Helmet>
                <Navbar kayakalloyscolor="var(--blue)" />
                <div className="GoToMobile"><a href="/kayakalloysmob">Нажмите чтобы перейти в мобильную версию сайта</a></div>
                <Header />
                <div className="Wrapper">
                    <Content />
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
            <div id="Header" style={{height:'575px',}}>
                <div className="Wrapper">
                   <h1 style={{color:'var(--blue)',textTransform:'uppercase',marginBottom:'0px',fontSize:'40px'}} className='Header-headline1'>
                       Сплавы на байдарках в Полтаве
                    </h1>
                   <h2 className='Header-headline2' style={{margin:'65px 0px',fontSize:'30px'}}>
                        Сплавы по реке Ворскла, Псёл, Удай и другие.<br />
                        Корпаративные сплавы на байдарках в Полтаве<br />
                    </h2>
                </div>
            </div>
        )
    }
}

class Content extends React.Component{
    constructor(){
        super()

        this.state = {
            switch: 'WeekendTours'
        }
    }

    onSwitchWeekendTours(){
        this.setState({
            switch: 'WeekendTours'
        })
    }
    onSwitchKayakAlloys(){
        this.setState({
            switch: 'KayakAlloysSide'
        })
    }
    onSwitchAuthorsAlloys(){
        this.setState({
            switch: 'AuthorsAlloysSide'
        })
    }


    render(){
        return(
            <div>
                <div className="Content-buttonscontainer">
                    <div><button style={{backgroundColor:`${this.state.switch === 'WeekendTours' ? 'var(--blue)' : 'var(--ligthgray)'  }`,boxShadow:'0px -1px 1.5px 0.001px rgba(53,53,53,0.2)'}} className="Content-buttonscontainer-button" onClick={this.onSwitchWeekendTours.bind(this)}><a style={{color:`${this.state.switch === 'WeekendTours' ? 'var(--ligthgray)' : 'var(--othertext3)'}`}} href="#">Туры выходного дня</a></button></div>
                    <div><button style={{backgroundColor:`${this.state.switch === 'KayakAlloysSide' ? 'var(--blue)' : 'var(--ligthgray)'  }`,boxShadow:'0px -1px 1.5px 0.001px rgba(53,53,53,0.2)'}} className="Content-buttonscontainer-button" onClick={this.onSwitchKayakAlloys.bind(this)}><a style={{color:`${this.state.switch === 'KayakAlloysSide'? 'var(--ligthgray)' : 'var(--othertext3)'}`}} href="#">Байдарочные сплавы</a></button></div>
                    <div><button style={{backgroundColor:`${this.state.switch === 'AuthorsAlloysSide' ? 'var(--blue)' : 'var(--ligthgray)'  }`,boxShadow:'0px -1px 1.5px 0.001px rgba(53,53,53,0.2)'}} className="Content-buttonscontainer-button" onClick={this.onSwitchAuthorsAlloys.bind(this)}><a style={{color:`${this.state.switch === 'AuthorsAlloysSide'? 'var(--ligthgray)' : 'var(--othertext3)'}`}} href="#">Персональные сплавы</a></button></div>
                </div>
                <div>
                    {   
                        this.state.switch === 'KayakAlloysSide' ? <KayakAlloysSide /> :
                        this.state.switch === 'AuthorsAlloysSide' ? <AuthorsAlloysSide /> :
                        this.state.switch === 'WeekendTours' ? <WeekendTours /> :
                        ''
                    }
                </div>
            </div>
        )
    }
}

class KayakAlloysSide extends React.Component{
    constructor(){
        super()
        this.tours =[                                  
        <TourBoxMini
            photo="kayak.icon.png" width="120px" height="100px"
            name="Трёхдневный  по р. Ворскла Сумская обл." secodname=""
            days="03 Дня"   daysI = '3' 
            nights="03 ночи" 
            date="26.06.2020"   dateI = '26' mountsI = "6"
            time="17:30" 
            price="1750 грн./чел"    priceI = '1750'
            button = "Узнать больше"
            href = "/kayakalloysregister"     
        />,                    
        <TourBoxMini
            photo="kayak.icon.png" width="120px" height="100px"
            name="По реке Псёл" secodname=""
            days="02 Дня"   daysI = '2' 
            nights="02 ночи" 
            date="19.06.2020"   dateI = '19' mountsI = "6"
            time="17:30" 
            price="1350 грн./чел"    priceI = '1350'
            button = "Узнать больше"
            href = "/kayakalloysregister"     
        />,  
        ]
        this.state ={
            tours: [                          
                <TourBoxMini
                    photo="kayak.icon.png" width="120px" height="100px"
                    name="Трёхдневный  по р. Ворскла Сумская обл." secodname=""
                    days="03 Дня"   daysI = '3' 
                    nights="03 ночи" 
                    date="26.06.2020"   dateI = '26' mountsI = "6"
                    time="17:30" 
                    price="1750 грн./чел"    priceI = '1750'
                    button = "Узнать больше"
                    href = "/kayakalloysregister"     
                />,                    
                <TourBoxMini
                    photo="kayak.icon.png" width="120px" height="100px"
                    name="По реке Псёл" secodname=""
                    days="02 Дня"   daysI = '2' 
                    nights="02 ночи" 
                    date="19.06.2020"   dateI = '19' mountsI = "6"
                    time="17:30" 
                    price="1350 грн./чел"    priceI = '1350'
                    button = "Узнать больше"
                    href = "/kayakalloysregister"     
                />,                 
            ],
            FromCheapToExpensive: false,
            FromExpensiveToCheap: false,
            dateSorting: true,
            FromLongToFast: false,
            FromFastToLong: false,

        }

    }
    FromCheapToExpensive(){
        const arr = this.tours
        //const newArr = arr.map(item => item.number)
        //console.log(newArr)
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.priceI > b.props.priceI) return -1;
            if (a.props.priceI == b.props.priceI) return 0;
            if (a.props.priceI < b.props.priceI) return 1;
          });
        //const newArr2 = newArr1.map(item => item.box)
          
        //const sortArr = newArr.sort(compareNumeric);
        console.log(newArr1)
        if(newArr1){
            this.setState({
                tours: <div>{newArr1}</div>,

                FromCheapToExpensive: true,
                FromExpensiveToCheap: false,
                dateSorting: false,
                FromLongToFast: false,
                FromFastToLong: false,
            })
        }
    }
    FromExpensiveToCheap(){
        const arr = this.tours
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
                tours: <div>{newArr1}</div>,

                FromCheapToExpensive: false,
                FromExpensiveToCheap: true,
                dateSorting: false,
                FromLongToFast: false,
                FromFastToLong: false,
            })
        }
    }
    dateSorting(){
        const arr = this.tours
        //const newArr = arr.map(item => item.number)
        //console.log(newArr)
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.mountsI > b.props.mountsI) return 1;
            if (a.props.mountsI == b.props.mountsI) return 0;
            if (a.props.mountsI < b.props.mountsI) return -1;
        });
        const newArr2 = newArr1.sort(function(a, b) {
            if(a.props.mountsI == b.props.mountsI){
            if (a.props.dateI > b.props.dateI) return -1;
            if (a.props.dateI == b.props.dateI) return 0;
            if (a.props.dateI < b.props.dateI) return 1;
            }
        });
        //const newArr2 = newArr1.map(item => item.box)
          
        //const sortArr = newArr.sort(compareNumeric);
        console.log(newArr2)
        if(newArr2){
            this.setState({
                tours: <div>{newArr2}</div>,

                FromCheapToExpensive: false,
                FromExpensiveToCheap: false,
                dateSorting: true,
                FromLongToFast: false,
                FromFastToLong: false,
            })
        }
    }
    FromLongToFast(){
        const arr = this.tours
        //const newArr = arr.map(item => item.number)
        //console.log(newArr)
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.daysI > b.props.daysI) return -1;
            if (a.props.daysI == b.props.daysI) return 0;
            if (a.props.daysI < b.props.daysI) return 1;
          });
        //const newArr2 = newArr1.map(item => item.box)
          
        //const sortArr = newArr.sort(compareNumeric);
        console.log(newArr1)
        if(newArr1){
            this.setState({
                tours: <div>{newArr1}</div>,

                FromCheapToExpensive: false,
                FromExpensiveToCheap: false,
                dateSorting: false,
                FromLongToFast: true,
                FromFastToLong: false,
            })
        }
    }
    FromFastToLong(){
        const arr = this.tours
        //const newArr = arr.map(item => item.number)
        //console.log(newArr)
        const newArr1 = arr.sort(function(a, b) {
            if (a.props.daysI > b.props.daysI) return 1;
            if (a.props.daysI == b.props.daysI) return 0;
            if (a.props.daysI < b.props.daysI) return -1;
          });
        //const newArr2 = newArr1.map(item => item.box)
          
        //const sortArr = newArr.sort(compareNumeric);
        console.log(newArr1)
        if(newArr1){
            this.setState({
                tours: <div>{newArr1}</div>,
                
                FromCheapToExpensive: false,
                FromExpensiveToCheap: false,
                dateSorting: false,
                FromLongToFast: false,
                FromFastToLong: true,
            })
        }
    }

    render(){
        return(
            <div>
                <div className="KayakAlloysSide-filter">
                    <div>Выберите Сортировку:</div>
                    <div onClick={this.dateSorting.bind(this)} className="KayakAlloysSide-filter-button"><a href="#" style={{color:`${this.state.dateSorting ? 'var(--blue)': ''}`}}>Ближайшие туры</a></div>
                    <div onClick={this.FromLongToFast.bind(this)} className="KayakAlloysSide-filter-button"><a href="#" style={{color:`${this.state.FromLongToFast ? 'var(--blue)': ''}`}}>От длительных к быстром</a></div>
                    <div onClick={this.FromFastToLong.bind(this)} className="KayakAlloysSide-filter-button"><a href="#" style={{color:`${this.state.FromFastToLong ? 'var(--blue)': ''}`}}>От быстрых к длительным</a></div>
                    <div onClick={this.FromCheapToExpensive.bind(this)} className="KayakAlloysSide-filter-button"><a href="#" style={{color:`${this.state.FromCheapToExpensive ? 'var(--blue)': ''}`}}>От дорогих к дешевым</a></div>
                    <div onClick={this.FromExpensiveToCheap.bind(this)} className="KayakAlloysSide-filter-button"><a href="#" style={{color:`${this.state.FromExpensiveToCheap ? 'var(--blue)': ''}`}}>От дешевых к дорогим</a></div>
                </div>
                <div className="KayakAlloysSide-headliner">
                    <div className="KayakAlloysSide-headliner-title">График сплавов</div>
                    <div className="KayakAlloysSide-headliner-data">Длительность</div>
                    <div className="KayakAlloysSide-headliner-data">Дата</div>
                    <div className="KayakAlloysSide-headliner-data">Стоимость</div>
                    <div className="KayakAlloysSide-headliner-data">Информация</div>
                </div>
                <div className='KayakAlloysSide-line'></div>
                <div className="KayakAlloysSide-contaner">
                    {this.state.tours}
                </div>
            </div>
        )
    }
}
class WeekendTours extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="WeekendTours">
                <div className="KayakAlloysSide-filter" style={{justifyContent:'Start'}}>
                    <div>Сортировка:</div>
                    <div className="KayakAlloysSide-filter-button" style={{marginLeft:'40px'}}>Туры выходного дня</div>
                </div>
                <div className="WeekendTours-headliner">
                    <div className="WeekendTours-headliner-title">Туры выходного дня</div>
                </div>
                <div className="WeekendTours-container">
                <TourBox 
                    photo="wekeendTour.JPG"
                    name="Двухдневный сплав по реке Ворскла"
                    description="Это сплав для всех желающих приобщится к активному
                    отдыху на байдарках, кому хочется выехать с города и экологично
                    провести выходные на природе, где нет шума авто, спешки и суеты.
                    А так же для тех, у кого нет времени на многодневные походы,
                    но очень хочется активно провести выходной, перезагрузится,
                    возобновить жизненные силы и наполнится энергией природы.
                    Чистая река, сосновые боры, уютные песчаные пляжи, великолепные
                    пейзажи - все это и многое другое, Вы встретите на этом сплаве!"
                    days="02 Дня"   
                    nights="01 ночь" 
                    date="Каждые выходные"   
                    time="09:00" 
                    price="1200 грн./чел"  
                    button = "Подробнее"
                    href = "/kayakalloysreg"  
                />
                </div>
            </div>
        )
    }
}
class TourBox extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="TourBox">
                <div className="TourBox-box">
                <div style={{display:'flex',alignItems:'center'}}>
                    <img style={{width:`${this.props.width}`,height:`${this.props.height}`}} className="TourBox-img" alt="tourphoto" src={this.props.photo} alt="kayaksAlloys"></img>
                </div>
                <div className="TourBox-container">
                    <div className="TourBox-rightside-healiner">
                        {this.props.name}
                    </div>
                    <div className="TourBox-rightside-description">
                        {this.props.description}
                    </div>
                    <div className="TourBox-rightside-data">
                        <div style={{display:'flex',flexDirection:'column',justifyContent:"center"}}>
                            <div style={{fontSize:'18px',color:'var(--blue)',fontFamily:"HELEVETICABOLD"}}>
                                {this.props.days}
                            </div>
                            <div style={{display:'flex',justifyContent:"center",color:'var(--lighttext)'}}>
                                {this.props.nights}
                            </div>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',justifyContent:"center"}}>
                            <div style={{fontSize:'18px',color:'var(--blue)',fontFamily:"HELEVETICABOLD"}}>
                                {this.props.date}
                            </div>
                            <div style={{display:'flex',justifyContent:"center",color:'var(--lighttext)'}}>
                                {this.props.time}
                            </div>
                        </div>
                        <div style={{fontSize:'18px',color:'var(--blue)',fontFamily:"HELEVETICABOLD",display:'flex',flexDirection:'column',justifyContent:"center"}}>
                            {this.props.price}
                        </div>
                        <a className="buttonHover"href={this.props.href}><div><button className="TourBox-button">{this.props.button}</button></div></a>
                    </div>
                </div>
                </div>
                <div className='KayakAlloysSide-line'></div>
            </div>
        )
    }
}
class TourBoxMini extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="TourBox">
                <div className="TourBox-box">
                <div style={{display:'flex',alignItems:'center'}}>
                    <img style={{width:`${this.props.width}`,height:`${this.props.height}`}} className="TourBox-img" alt="tourphoto" src={this.props.photo} alt="kayaksAlloys"></img>
                </div>
                <div className="TourBox-container">
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <div>
                        <div className="TourBox-rightside-healiner" style={{marginBottom:'0px'}}>
                            {this.props.name}
                        </div>
                        <div style={{color:'var(--gray)'}}>
                            {this.props.secodname}
                        </div>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:"center"}}>
                        <div style={{fontSize:'18px',color:'var(--blue)',fontFamily:"HELEVETICABOLD"}}>
                            {this.props.days}
                        </div>
                        <div style={{display:'flex',justifyContent:"center",color:'var(--lighttext)'}}>
                            {this.props.nights}
                        </div>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:"center"}}>
                        <div style={{fontSize:'18px',color:'var(--blue)',fontFamily:"HELEVETICABOLD"}}>
                            {this.props.date}
                        </div>
                        <div style={{display:'flex',justifyContent:"center",color:'var(--lighttext)'}}>
                            {this.props.time}
                        </div>
                    </div>
                    <div style={{fontSize:'18px',color:'var(--blue)',fontFamily:"HELEVETICABOLD",display:'flex',flexDirection:'column',justifyContent:"center"}}>
                        {this.props.price}
                    </div>
                    <a className="buttonHover"href={this.props.href}><div><button className="TourBox-button">{this.props.button}</button></div></a>
                    </div>
                </div>
                </div>
                <div className='KayakAlloysSide-line'></div>
            </div>
        )
    }
}
class AuthorsAlloysSide extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="AuthorsAlloysSide" style={{marginBottom:'60px'}}>
                <div className="KayakAlloysSide-filter" style={{justifyContent:'Start'}}>
                    <div>Сортировка:</div>
                    <div className="KayakAlloysSide-filter-button" style={{marginLeft:'40px'}}>Персональные сплавы</div>
                </div>
                <div className="AuthorsAlloysSide-headliner" style={{justifyContent:"start",textTransform:'uppercase'}}>Персональные сплавы</div>
                
                
                <div className="AuthorsAlloysSide-container" style={{flexDirection:'column'}}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <div style={{fontSize:'18px',fontFamily:'HELEVETICAREGULAR',margin:'0px 0px 30px 20px'}}>
                            Группы от 10-ти человек и более могут самостоятельно выбирать маршрут сплава<br /> 
                            продолжительностью от 1 до 12 дней и удобные сроки проведения похода.
                        </div>
                        <div style={{fontSize:'18px',fontFamily:'HELEVETICAREGULAR',margin:'0px 0px 30px 20px'}}>
                            Для сформированных групп от 10-ти человек возможна организация доставки к реке<br /> 
                            из городов: Харьков, Киев, Днепр, Полтава, Сумы, Кременчуг 
                        </div>
                        <div style={{fontSize:'18px',fontFamily:'HELEVETICAREGULAR',margin:'0px 0px 30px 20px'}}>
                            Цена байдарочного сплава для Вашей группы будет составлять<br />
                            450 грн/чел/день
                        </div>
                        <div style={{fontSize:'18px',fontFamily:'HELEVETICAREGULAR',margin:'0px 0px 30px 20px'}}>
                            Трансфер байдарок и группы вы оплачиваете отдельно.<br />  
                            Организацию трансфера мы можем взять на себя .
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div className="AuthorsAlloysSide-container-description" style={{marginLeft:'0px'}}>
                        <div style={{fontSize:'24px',color:'var(--blue)',marginBottom:'10px'}}>В стоимость байдарочных туров включено:</div>
                        <ul style={{fontSize:'20px',marginLeft:'25px'}}>
                            <li>Трансфер байдарок и участников тура</li>
                            <li>Место в байдарке/весло/спасжелет/гермомешок</li>
                            <li>Сопровождение инструкторов</li>
                            <li>Питание ( холодное и горячее ) 2-3 раза в день <br />
                                (подробно в каждом туре) вода, для приготовления пищи.
                            </li>
                            <li>Палатка на 2-3 места</li>
                            <li>Костровой набор</li>
                            <li>Сувениры на память</li>
                        </ul>
                        <div style={{fontSize:'24px',color:'var(--blue)',marginBottom:'10px',marginTop:'10px'}}>В стоимость не включено:</div>
                        <ul style={{fontSize:'22px',marginLeft:'25px'}}>
                            <li>Личные расходы</li>
                            <li>Спальник + Карематы = 60 грн. ночь</li>
                        </ul>
                    </div>
                        <div className="AuthorsAlloysSide-container-form">
                        <div style={{display:'flex',justifyContent:'center',fontSize:'19px',marginBottom:'13px'}}>
                            Если у вас остались какие-то вопросы,<br />
                            или Вы хотите заказать тур, мы перезвоним!
                        </div>
                        <form action="telegram.php" method="POST" className="AuthorsAlloysSide-form" >
                            <div class="form-group">
                                <label>
                                    <input name="user_name" type="text" className="AuthorsAlloysSide-form-input1" placeholder="Ваше имя"></input>
                                </label>
                            </div>
                            <div class="form-group">
                                <label>
                                    <input name="user_phone" type="text" className="AuthorsAlloysSide-form-input2" placeholder="Ваш номер телефона"></input>
                                </label>
                            </div>
                        <div className="AuthorsAlloysSide-form-button-box"><button type="submit" className="AuthorsAlloysSide-form-button">Отправить форму!</button></div>
                        </form>
                    </div>
                    </div>
                </div>
                

            </div>
        )
    }
}
