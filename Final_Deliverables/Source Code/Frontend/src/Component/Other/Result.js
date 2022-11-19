import React,{Component} from "react";
import querString from "query-string";
import {withRouter} from "react-router-dom";
import "./Test.css"

class Result extends Component{
    constructor(){
        super();
        this.state = {
            output:"",
            date:""
        }
    }
    componentDidMount(){
        const qs = querString.parse(this.props.location.search);
        const {output,date} = qs;
        console.log(output === "Sunny day")
        this.setState({
            output:output,
            date:date
        })
    }
    render(){
        const {output,date} =  this.state;
    return(
        <>
        <div className="output">The day {date} is <span className="result">{output}</span> !!
        
        </div>
        {
            output === "Sunny day" ?
            <div style={{"textAlign":"center"}}>
            <img className="resultmage" src={require('../../Images/download.jpeg')} />
            </div>
            :
            <div style={{"textAlign":"center"}}>
            <img className="resultmage" src={require('../../Images/rainy.jpeg')}/>
            </div>
        }
    
        
        <div style={{"textAlign":"center"}}>
        <a href="/test" className="button">RETURN TO PREDICTION</a>
        </div>
        <div style={{"textAlign":"center"}} className="feedBack">
            Feedback<br/>
            <textarea className="feedback"></textarea><br/>
            <button className="btn-primary submit-b">Submit</button>
        </div>
        </>
    )
}
}

export default withRouter(Result);