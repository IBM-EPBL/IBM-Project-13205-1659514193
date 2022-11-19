import React,{Component} from "react";
import { Route,BrowserRouter } from "react-router-dom";

import Home from "./Component/Home/Home";
import Test from "./Component/Other/Test";
import Result from "./Component/Other/Result";
class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/test" component = {Test}/>
            <Route path="/result" component = {Result}/>
            </BrowserRouter>
        );
    }
}

export default Router;