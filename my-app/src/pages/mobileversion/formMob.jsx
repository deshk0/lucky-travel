import React, { useDebugValue } from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../navbar';
import { Footer } from '../footer';


export class FormMobile extends React.Component{
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
    }

    render(){
        return(
            <div className="Blocks" style={{margin:'50px 0'}}>
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
        )
    }
}