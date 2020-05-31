import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../navbar';
import { Footer } from '../footer';

export class KayakAlloysPers extends React.Component{
    constructor(){
        super()
    }

    render(){
        return( 
            <div>
                <Navbar />
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