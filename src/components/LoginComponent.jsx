import React, { Component, PureComponent } from 'react'
import UserService  from '../service/UserService'
import PasswordValidator from '../validators/PasswordValidator';

class LoginComponent extends Component {
    constructor(props) {   
        super(props)

        this.state = {
            info :{
                'id':'',
                'password':''
            },
            passwordCheck :false
        } 
    }

    changeIdHandler = (event)=>{
       const {value} = event.target;
       this.setState(prevState=>{
        const info = Object.assign({},prevState.info);
        info.id = value;
        console.log('@ info.id update: ',info);
        return {info};
       })
    }


    changePasswordHandler = (event) =>{
        const password = event.target.value;
        const isValidate = PasswordValidator.validate(password);
        console.log('@ isValidate: ',isValidate);
        if(isValidate){
            this.setState({passwordCheck: true})
        }
        this.setState(prevState=>{
            const info = Object.assign({},prevState.info);
            info.password = password;
            console.log('@ info.password update: ',info);
            return {info};
        })
    
    }

    passwordWarnControl(){
        if(this.state.info.password!=='' && !this.state.passwordCheck){
            return(
            <div style={{color:'red', display:'flex'}}>
                <label style={{width:'100%', textAlign:'center'}}>비밀번호 형식이 맞지 않습니다.</label>
            </div>
            )
        }
    }


    doLogin = (event)=>{
        event.preventDefault();
        console.log('@ login To Server');
        UserService.signin(this.state.info).then(res=>{
            console.log('result: ',res);
        });


    }

    render() {
        return (
            <div className = "flex-container">

                <form className="form-signin" name="form" id="form" role="form">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Jiyoung.COM</h1>
                </div>

                <div className="form-label-group">
                    <input id="uid" className="form-control" placeholder="User ID" autoFocus="" value={this.state.info.id} onChange={this.changeIdHandler}/>
                </div>

                <div className="form-label-group">
                    <input type="password" id="pwd" className="form-control" placeholder="User Password" required="" value={this.state.info.password} onChange={this.changePasswordHandler}/>
                    <label htmlFor="pwd" className="sr-only">User Password</label>
                    {this.passwordWarnControl()}
                </div>
                
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.doLogin}>Sign in</button>
                <div style={{display: 'flex'}}>
                <span style={{fontSize:"11pt", textAlign:'center', width:'100%'}}>Sign up</span>
                </div>
                <p className="mt-3 mb-3 text-muted text-center">@ 2021. Jiyoung. All rights reserved.</p>
                </form>
            </div>
        )
    }
}

export default LoginComponent