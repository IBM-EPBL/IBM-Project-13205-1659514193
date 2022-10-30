import React,{Component} from "react";
import { Route,BrowserRouter } from "react-router-dom";

import Home from "./Component/Home/Home";

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <Route exact path="/" component={Home}/>
            </BrowserRouter>
        );
    }
}

export default Router;