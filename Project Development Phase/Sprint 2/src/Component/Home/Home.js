import React,{Component} from "react";
import {withRouter} from 'react-router-dom';
import Header from "./Header";

class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <img src={require('../../Images/download.jpeg')} style={{'width':'100%','height':'100vh'}}/>
            </div>
        );
    }
}

export default withRouter(Home);