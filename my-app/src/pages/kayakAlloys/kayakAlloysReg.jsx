import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../navbar';
import { Footer } from '../footer';

export class KayakAlloysRegister extends React.Component{
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
            <div id="AuthorsAlloysSide">
            <div className="AuthorsAlloysSide-headliner" style={{marginTop:'50px'}}>Записаться на тур</div>
            <div className="AuthorsAlloysSide-container">
                <div className="AuthorsAlloysSide-container-form">
                    <div style={{display:'flex',justifyContent:'center',fontSize:'19px',marginBottom:'13px'}}>
                        Заполните форму, чтобы узнать больше или
                        записаться на тур!
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
                    <div style={{display:'flex',justifyContent:'center'}} className='buttonHover'><button type="submit" className="AuthorsAlloysSide-form-button">Отправить форму!</button></div>
                    </form>
                </div>
                <div className="AuthorsAlloysSide-container-description">
                    <div style={{fontSize:'24px',color:'var(--blue)',marginBottom:'10px'}}>В стоимость байдарочных туров включено:</div>
                    <ul style={{fontSize:'20px'}}>
                        <li>Трансфер байдарок и участников тура</li>
                        <li>Место в байдарке/весло/спасжелет/гермомешок</li>
                        <li>Сопровождение инструкторов</li>
                        <li>Питание ( холодное и горячее ) 2-3 раза в день <br />
                            (подробно в каждом туре) вода, для приготовления пищи.
                        </li>
                        <li>Палатка на 2-3 места</li>
                        <li>Костровой набор</li>
                        <li>Сувениры на память</li>
                        <li>Спальник+ Карематы = 60 грн. ночь</li>
                    </ul>
                    <div style={{fontSize:'24px',color:'var(--blue)',marginBottom:'10px',marginTop:'10px'}}>В стоимость не включено:</div>
                    <ul style={{fontSize:'22px'}}>
                        <li>Личные расходы</li>
                    </ul>
                </div>
            </div>
            <div className="AuthorsAlloysSide-end">
                <a href='/kayakalloys'>Если Вы хотите отдохнуть с группой друзей от 10-ти человек,<br />
                мы можем организовать для <b>Вас Персональный тур</b></a>
            </div>
        </div>

        )
    }
}