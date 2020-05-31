import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../navbar';
import { Footer } from '../footer';



export class KayakAlloysReg extends React.Component{
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
            <div id="kayakAlloysReg">
                <div className='kayakAlloysReg-title'>
                    <div className='kayakAlloysReg-title-title'>Тур выходного дня</div>
                    <div className='kayakAlloysReg-title-desc'>На байдарках по Ворскле</div>
                </div>
                <div className='kayakAlloysReg-container'>
                    <div className="kayakAlloysReg-container-leftcolumn">
                        <div className="kayakAlloysReg-leftcolumn-textbox1">
                            Это сплав для всех желающих приобщится к активному<br /> 
                            отдыху на байдарках, кому хочется выехать с города и экологично<br />
                            провести выходные на природе, где нет шума авто, спешки и суеты.<br />
                            А так же для тех, у кого нет времени на многодневные походы,<br />
                            но очень хочется активно провести выходной, перезагрузится,<br />
                            возобновить жизненные силы и наполнится энергией природы.<br />
                            Чистая река, сосновые боры, уютные песчаные пляжи, великолепные<br />
                            пейзажи - все это и многое другое, Вы встретите на этом сплаве!
                        </div>
                        <div className="kayakAlloysReg-leftcolumn-textbox">
                            <div className="kayakAlloysReg-leftcolumn-textbox-title">Преимущества тура:</div>
                            <div className="kayakAlloysReg-leftcolumn-textbox-desc">
                                Сплав проходит в 30-40 км от города Полтава, что позволяет не тратить<br /> 
                                много времени на переезд, но при этом достаточно далеко,<br /> 
                                что бы почувствовать уединение с природой. Вам не нужно заботится<br /> 
                                о туристическом снаряжении, мы все продумали за Вас.<br /> 
                                Опытные инструкторы заранее планируют место для ночевки,<br /> 
                                разбивают палатки, и подготавливают лагерь. Вы, просто наслаждаетесь<br /> 
                                природой, общением и проводите личное время на Ваше усмотрение.
                            </div>
                        </div>
                        <div className="kayakAlloysReg-leftcolumn-textbox">
                            <div className="kayakAlloysReg-leftcolumn-textbox-title">Регламент тура:</div>
                            <div className="kayakAlloysReg-leftcolumn-textbox-desc">
                                Сплав проходит по реке Ворскла от с.Писаревщина -  до с. Гавронци<br /> 
                                Сбор группы 9:00 Полтава автовокзал Киевский
                            </div>
                        </div>
                        <div className="kayakAlloysReg-leftcolumn-textbox">
                            <div className="kayakAlloysReg-leftcolumn-textbox-title">Участники:</div>
                            <div className="kayakAlloysReg-leftcolumn-textbox-desc">
                                Уровень сложности - простой. опыт участия в байдарочных походах<br /> 
                                не обязательно.
                            </div>
                        </div>
                        <div style={{fontSize:'24px'}} className="kayakAlloysReg-leftcolumn-textbox">
                            Бюджет:<span style={{color:'var(--blue)',fontFamily:'HELEVETICABOLD'}}> 1200 грн</span>
                        </div>
                        <div>
                            <div style={{display:'flex',fontSize:'22px',marginBottom:'10px',marginLeft:'42px'}}>
                                Заполните форму, чтобы записаться на тур!
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
                                <div className="AuthorsAlloysSide-form-button-box">
                                    <div className="buttonHover"><button type="submit" className="AuthorsAlloysSide-form-button">
                                        Отправить форму!
                                    </button></div>
                                </div>
                            </form>
                        </div>
                        <div className="AuthorsAlloysSide-end">
                            <a href='/kayakalloyspers'>Если Вы хотите отдохнуть с группой друзей от 10-ти человек,<br />
                            мы можем организовать для <b>Вас Персональный тур</b></a>
                        </div>
                    </div>
                    <div className="kayakAlloysReg-container-rightcolumn">
                        <div className="kayakAlloysReg-rightcolumn-picture">
                            
                        </div>
                        <div className="kayakAlloysReg-leftcolumn-textbox">
                            <div className="kayakAlloysReg-leftcolumn-textbox-title">Описание тура:</div>
                            <div className="kayakAlloysReg-leftcolumn-textbox-desc">
                                В этом туре мы учитываем все нюансы и мелочи,<br />
                                с которыми вы могли бы столкнуться в поездке и берем их<br /> 
                                на себя. Отправляясь в путешествие с Lucky Travel, вам<br /> 
                                не придется беспокоиться о том, как добраться до места<br />
                                проживания, где позавтракать и поужинать или о других<br />
                                организационных вопросах. Кроме того, на протяжении<br /> 
                                всей поездки рядом с вами будет находиться<br /> 
                                сопровождающий от нашей компании, чья задача –<br /> 
                                сделать ваш отдых действительно незабываемым.<br />
                                Интересный досуг в лагере. Мы позаботились о том, что<br /> 
                                бы Вам было интересно и не скучно. Потому мы часто<br /> 
                                проводим разные игры для компаний ( Мафия, крокодил,<br /> 
                                пойми меня и прочее), а так же берём бадминтон и<br /> 
                                волейбольный мяч.<br />
                                Вечер -это посиделки у костра с ароматным чаем и<br /> 
                                веселыми байками опытных туристов или песни под<br />
                                гитару.
                            </div>
                        </div>
                        <div className="kayakAlloysReg-leftcolumn-textbox">
                            <div className="kayakAlloysReg-leftcolumn-textbox-title" style={{marginTop:'110px'}}>В стоимость байдарочных туров включено:</div>
                            <div className="kayakAlloysReg-leftcolumn-textbox-desc" >
                                <ul>
                                    <li>Трансфер байдарок и участников тура</li>
                                    <li>Место в байдарке/веслоспасжелет/гермомешок</li>
                                    <li>Сопровождение инструкторов</li>
                                    <li>Питание (холодное и горячее) 2-3 раза в день<br />(подробно в каждом туре) вода, для приготовления пищи.</li>
                                    <li>Палатка на 2-3 места</li>
                                    <li>Костровой набор</li>
                                    <li>Сувениры на память</li>
                                    <li>Фото-видео отчёт</li>
                                </ul>
                            </div>
                        </div>
                        <div className="kayakAlloysReg-leftcolumn-textbox">
                            <div className="kayakAlloysReg-leftcolumn-textbox-title">В стоимость не включено:</div>
                            <div className="kayakAlloysReg-leftcolumn-textbox-desc">
                                <ul>
                                    <li>Личные расходы</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}