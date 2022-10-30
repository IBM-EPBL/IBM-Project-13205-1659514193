import React,{Component} from "react";
import { withRouter } from "react-router-dom";
import Modal from 'react-modal';
import './Home.css'

const CustomStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid tomato',
        width: '350px',
        fontFamily: 'Montserrat'
    }
}

class Header extends Component{
    constructor(){
        super();
        this.state = {
            clickedNavIcon : false,
            isLoginModalOpen : false,
            isSignupModalOpen : false
        }
    }

    handleClick = () =>{
        const {clickedNavIcon} = this.state;
        this.setState({
            clickedNavIcon : !clickedNavIcon
        }); 
    }
    loginOpen = () =>{
        this.setState({
            isLoginModalOpen : true
        })
    }
    loginClose = () =>{
        this.setState({
            isLoginModalOpen : false
        })
    }
    SignUpOpen = () =>{
        this.setState({
            isSignupModalOpen : true
        })
    }
    SignUpClose = () => {
        this.setState({
            isSignupModalOpen : false
        })
    }
    LoginOpenfromSignup = () => {
        this.setState({
            isSignupModalOpen : false,
            isLoginModalOpen : true
        })
    }
    signOpenFromLogin = () =>{
        this.setState({
            isLoginModalOpen:false,
            isSignupModalOpen : true
        })
    }
    render(){
        const {clickedNavIcon,isLoginModalOpen,isSignupModalOpen} = this.state;
        return(
            <div id="NavBar" style={{'fontFamily':'Montserrat'}}>
                <span className="logoWrite">IBM</span>
                <div className="NavIcon" onClick={this.handleClick}>
                    <i className={clickedNavIcon ? 'bi bi-x' : 'bi bi-list'}></i>
                </div>
                <div className="logn">
                <button id="login"className="login" onClick={this.loginOpen}>Login</button>
                <button id="signup" className="signup" onClick={this.SignUpOpen}>Create an account</button>
                </div>
                <div className={'NavMenu' + (clickedNavIcon ? ' yes' : '')}>
                    <a href="/" className="NavLinks">Home</a>
                    <a href="/" className="NavLinks">Lorem</a>
                    <a href="/" className="NavLinks">ipsum</a>
                    <a href="/" className="NavLinks">other</a>
                </div>
                
                <Modal isOpen={isLoginModalOpen} style={CustomStyles}>
                    <div className="head" style={{'fontSize':'22px'}}>Login</div>
                    <i className="bi bi-x closebtn" onClick={this.loginClose}></i>
                    <label className="label">Username</label>
                    <input type="text" className="input" />
                    <label className="label">Password</label>
                    <input type="text" className="input"  style={{'marginBottom':'5px'}}/>
                    <a className="forgetPassword">forgot password?</a>
                    <button className="btn-primary btnLogin">LOGIN</button>
                    <p className="para">If you don't have an account,<a className="paraLink" onClick={this.signOpenFromLogin}> create an account</a></p>
                </Modal>
                <Modal isOpen={isSignupModalOpen} style={CustomStyles}>
                <div className="head">Create Your Account</div>
                    <i className="bi bi-x closebtn" onClick={this.SignUpClose}></i><br/>
                    <label className="label">Username</label>
                    <input className="input" type="text"/>
                    <label className="label">Email</label>
                    <input  className="input" type="email"/>
                    <label className="label">Create Password</label>
                    <input type="text"  className="input" />
                    <button className="btn-primary btnLogin">SIGN UP</button>
                    <p className="para">Already having an account ?<br/><a className="paraLink" onClick={this.LoginOpenfromSignup}>Login</a></p>
                </Modal>
            </div>
        )
    }
}

export default withRouter(Header);