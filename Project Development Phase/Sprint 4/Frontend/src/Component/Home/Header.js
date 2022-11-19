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
    const [message,setMessage] = useState()
    const [isLoggedIn,setIsLoggedIn] = useState()
    const [response,setResponse] = useState()
    const [name,setname] = useState("")
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
            res => setMessage(res)    
        )
        SignUpClose()
        setTimeout(() => {
            window.alert("User Created Successfully. Now, your credentials could be used to login!!")
        }, 1000
        );
        
    }
    const login = ()=>{
        let email = document.getElementById("user1").value;
        let password = document.getElementById("password1").value;
        const req = {
            "email":email,
            "password":password
        }
        fetch("/login",{
            'method':'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(req)
        }).then(res=>res.json())
        .then(res=>setResponse(res))
        console.log(response)
        setIsLoggedIn(true)
        loginClose()
    }
    const logout = () => {
        setIsLoggedIn(false)
    }
    const handleRetry = () => {
        window.alert("Your entered credentials was wrong!!! RETRY!")
        loginOpen()
    }
        return(
            <div id="NavBar" style={{'fontFamily':'Montserrat'}}>
                <span className="logoWrite">Rainfall Prediction</span>
                <div className="NavIcon" onClick={handleClick}>
                    <i className={clickedNavIcon ? 'bi bi-x' : 'bi bi-list'}></i>
                </div>
                <div className="logn">
                {
                    isLoggedIn
                    ?
                    <>
                    <span className="name">{response !== undefined 
                    ?
                    <>{response.name}</>
                    :
                    <></>
                }</span>
                    {response !== undefined
                    ?
                    <button className="signup" onClick={logout}>Log Out</button>
                    :
                    <>
                    
                        <button className="signup" onClick={handleRetry}>RETRY</button>
                    
                    
                    </>
                }
                    </>
                    :
                    <>
                    <button id="login"className="login" onClick={loginOpen}>Login</button>
                    <button id="signup" className="signup" onClick={SignUpOpen}>Create an account</button>
                    </>
                }
                
                </div>
                <div className={'NavMenu' + (clickedNavIcon ? ' yes' : '')}>
                    <a href="/" className="NavLinks">Home</a>
                    <a className="NavLinks" target="_blank" href="https://dataplatform.cloud.ibm.com/dashboards/0ab13048-a068-4321-8eb9-cd173fd6e8c4/view/7116e02d319402d341cbd0e407cc7a577561735bb3bb800182837b490d367597f06c1192c82b4c5cdf125735a6e41b0a9d">Dashboard</a>
                    <a href="/test" className="NavLinks">Predict</a>
                    
                </div>
                
                <Modal isOpen={isLoginModalOpen} style={CustomStyles}>
                    <div className="head" style={{'fontSize':'22px'}}>Login</div>
                    <i className="bi bi-x closebtn" onClick={loginClose}></i>
                    <label className="label">Email</label>
                    <input type="text" className="input" id="user1" />
                    <label className="label">Password</label>
                    <input type="password" className="input" id="password1" style={{'marginBottom':'5px'}}/>
                    <a className="forgetPassword">forgot password?</a>
                    <button className="btn-primary btnLogin" onClick={login}>LOGIN</button>
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
                    <input type="password"  className="input" id="password"/>
                    <button className="btn-primary btnLogin" onClick={signup}>SIGN UP</button>
                    <p className="para">Already having an account ?<br/><a className="paraLink" onClick={LoginOpenfromSignup}>Login</a></p>
                </Modal>
            </div>
        )
}

export default withRouter(Header);