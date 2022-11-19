import React,{ Component } from "react";
import { withRouter} from "react-router-dom";
import "./Test.css";
import {locations} from "./locationArray";
import Header from "../Home/Header";

class Test extends Component{
    

    prediction = () =>{
        const location = document.getElementById("location").value;
        const date = document.getElementById("date").value;
        const req ={
            'location':location
        }
        console.log(location)
        fetch("/locate",{
            'method':"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(req)
        }).then(res => res.json())
        .then(res=>{
            const url = `/result?output=${res.result}&date=${date}`;
            this.props.history.push(url);
            window.location.reload();
        })

        
        }
    render(){
    return(
        <>
        <Header/>
            <div className="outbox">
                <div className="container">
                    <div className="dummy"></div>
                    <div className="row whitebox">
                    <h4 id="heading">Predictor</h4>
                        <div className="col-lg-6 col-md-6 col-12">
                            <label className="label">Date</label><br/>
                            <input type="date" className="input" id="date"/>
                            <label className="label">Maximum Temperature</label><br/>
                            <input type="number" className="input" id="mt"/>
                            <label className="label">Evaporation</label><br/>
                            <input type="number" className="input" id="ev"/>
                            <label className="label">Wind Gust Speed</label><br/>
                            <input type="number" className="input" id="wgs"/>
                            <label className="lable">Wind Gust Direction</label>
                            <select className="selection" name="cars" id="wgd">
                                <option value="north">North</option>
                                <option value="south">South</option>
                                <option value="east">East</option>
                                <option value="west">West</option>
                                <option value="north-west">North-West</option>
                                <option value="south-west">South-West</option>
                                <option value="north-east">North-East</option>
                                <option value="south-west">South-East</option>
                            </select><br/>
                            <label className="label">Wind Speed 3pm</label><br/>
                            <input type="number" className="input" id="wp3"/>
                            <label className="label">Humidity 3pm</label><br/>
                            <input type="number" className="input" id="h3"/>
                            <label className="label">Pressure 3pm</label><br/>
                            <input type="number" className="input" id="p3"/>
                            <label className="label">Temperature 3pm</label><br/>
                            <input type="number" className="input" id="t3"/>
                            <label className="label">Cloud 3pm</label><br/>
                            <input type="number" className="input" id="c3"/>
                            <label className="lable">Wind Direction at 3pm</label>
                            <select className="selection" name="cars" id="wd3">
                                <option value="north">North</option>
                                <option value="south">South</option>
                                <option value="east">East</option>
                                <option value="west">West</option>
                                <option value="north-west">North-West</option>
                                <option value="south-west">South-West</option>
                                <option value="north-east">North-East</option>
                                <option value="south-west">South-East</option>
                            </select>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <label className="label">Minimum Temperature</label><br/>
                            <input type="number" className="input" id="mit"/>
                            <label className="label">Rainfall</label><br/>
                            <input type="number" className="input" id="rf"/>
                            <label className="label">Sunshine</label><br/>
                            <input type="number" className="input" id="ss"/>
                            
                            <label className="label">Wind Speed 9am</label><br/>
                            <input type="number" className="input" id="wp9"/>
                            <label className="lable">Rain Today</label>
                            <select className="selection" name="cars" id="rt">
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                            </select><br/>
                            <label className="label">Humidity 9am</label><br/>
                            <input type="number" className="input" id="h9"/>
                            <label className="label">Pressure 9am</label><br/>
                            <input type="number" className="input" id="p9"/>
                            <label className="label">Temperature 9am</label><br/>
                            <input type="number" className="input" id="t9"/>
                            <label className="label">Cloud 9am</label><br/>
                            <input type="number" className="input" id="c9"/>
                            <label className="lable">Wind Direction at 9am</label>
                            <select className="selection" name="cars" id="wd9">
                                <option value="north">North</option>
                                <option value="south">South</option>
                                <option value="east">East</option>
                                <option value="west">West</option>
                                <option value="north-west">North-West</option>
                                <option value="south-west">South-West</option>
                                <option value="north-east">North-East</option>
                                <option value="south-west">South-East</option>
                            </select><br/>
                            <label className="lable">Location</label>
                            <select className="selection" name="cars" id="location">
                                {
                                    locations.map((item)=>{
                                        return(
                                            <option value={item.name}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <a className="prediction" onClick={this.prediction}>Predict</a>

                    </div>
                    <div className="dummy"></div>
                </div>

            </div>
            </>
    )
}
}

export default withRouter(Test);