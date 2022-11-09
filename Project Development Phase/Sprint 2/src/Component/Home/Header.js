import React,{ useState,useEffect } from "react";
import { withRouter } from "react-router-dom";
import Modal from 'react-modal';
import './Home.css';

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

function Header(){
    const [clickedNavIcon,setClickedNanIcon] = useState(false)
    const [isLoginModalOpen,setIsLoginModalOpen] = useState(false)
    const [isSignupModalOpen,setIsSignupModalOpen] = useState(false)

    const handleClick = () =>{
        setClickedNanIcon(!clickedNavIcon)
    }
    const loginOpen = () =>{
        setIsLoginModalOpen(true)
    }
    const loginClose = () =>{
        setIsLoginModalOpen(false)
    }
    const SignUpOpen = () =>{
        setIsSignupModalOpen(true)
    }
    const SignUpClose = () => {
        setIsSignupModalOpen(false)
    }
    const LoginOpenfromSignup = () => {
        setIsSignupModalOpen(false)
        setIsLoginModalOpen(true)
    }
    const signOpenFromLogin = () =>{
        setIsLoginModalOpen(false)
        setIsSignupModalOpen(true)
    }
    const signup = () => {
        let user = document.getElementById("user").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        const req = {
            "user":user,
            "email":email,
            "password":password
        }
        fetch("/signup",{
            'method':'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(req)
        }).then(
            res => res.json()
        ).then(
            console.log(user,email,password)
        )

    }
        return(
            <div id="NavBar" style={{'fontFamily':'Montserrat'}}>
                <span className="logoWrite">IBM</span>
                <div className="NavIcon" onClick={handleClick}>
                    <i className={clickedNavIcon ? 'bi bi-x' : 'bi bi-list'}></i>
                </div>
                <div className="logn">
                <button id="login"className="login" onClick={loginOpen}>Login</button>
                <button id="signup" className="signup" onClick={SignUpOpen}>Create an account</button>
                </div>
                <div className={'NavMenu' + (clickedNavIcon ? ' yes' : '')}>
                    <a href="/" className="NavLinks">Home</a>
                    <a href="/" className="NavLinks">Lorem</a>
                    <a href="/" className="NavLinks">ipsum</a>
                    <a href="/" className="NavLinks">other</a>
                </div>
                
                <Modal isOpen={isLoginModalOpen} style={CustomStyles}>
                    <div className="head" style={{'fontSize':'22px'}}>Login</div>
                    <i className="bi bi-x closebtn" onClick={loginClose}></i>
                    <label className="label">Username</label>
                    <input type="text" className="input" id="user1" />
                    <label className="label">Password</label>
                    <input type="text" className="input"  style={{'marginBottom':'5px'}}/>
                    <a className="forgetPassword">forgot password?</a>
                    <button className="btn-primary btnLogin">LOGIN</button>
                    <p className="para">If you don't have an account,<a className="paraLink" onClick={signOpenFromLogin}> create an account</a></p>
                </Modal>
                <Modal isOpen={isSignupModalOpen} style={CustomStyles}>
                <div className="head">Create Your Account</div>
                    <i className="bi bi-x closebtn" onClick={SignUpClose}></i><br/>
                    <label className="label">Username</label>
                    <input className="input" type="text" id="user"/>
                    <label className="label">Email</label>
                    <input  className="input" type="email" id="email"/>
                    <label className="label">Create Password</label>
                    <input type="text"  className="input" id="password"/>
                    <button className="btn-primary btnLogin" onClick={signup}>SIGN UP</button>
                    <p className="para">Already having an account ?<br/><a className="paraLink" onClick={LoginOpenfromSignup}>Login</a></p>
                </Modal>
            </div>
        )
}

export default withRouter(Header);