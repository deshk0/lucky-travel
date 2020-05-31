import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../navbar';
import { Footer } from '../footer';


export class EquipmentReg extends React.Component{
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
            <div style={{display:'flex',justifyContent:'center',flexDirection:'column',padding:'80px 0px'}}>
                <div style={{display:'flex',justifyContent:'center',marginBottom:'50px',fontSize:'36px',fontFamily:'HELEVETICABOLD',color:'var(--blackOrange)'}}>Арендовать снаряжение</div>
                <div >
                    <div style={{display:'flex',justifyContent:'center',marginBottom:'15px',fontSize:'18px'}}>Заполните форму, и мы Вам перезвоним!</div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                    <form action="telegram.php" method="POST" className="AuthorsAlloysSide-form" >
                        <div class="form-group">
                            <label>
                                <input name="user_name" type="text" className="AuthorsAlloysSide-form-input1" placeholder="Ваше имя" style={{backgroundColor:'antiquewhite'}}></input>
                            </label>
                        </div>
                        <div class="form-group">
                            <label>
                                <input name="user_phone" type="text" className="AuthorsAlloysSide-form-input2" placeholder="Ваш номер телефона" style={{backgroundColor:'antiquewhite'}}></input>
                            </label>
                        </div>
                        <div className="AuthorsAlloysSide-form-button-box">
                            <div className="buttonHover">
                                <button type="submit" className="AuthorsAlloysSide-form-button" style={{backgroundColor:'var(--blackOrange)'}}>
                                    Отправить форму!
                                </button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}