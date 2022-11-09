import React,{ useEffect } from "react";
import { withRouter } from "react-router-dom";

function Test() {
    
    useEffect(()=>{
        fetch("/login").then(
            res => res.json()
        ).then(
            data => {
                console.log("print")
                console.log(data)
            }
        )
    },[])
    
    const press = () => {
        fetch("/login").then(
            res => res.json()
        ).then(
            data => {
                console.log("print")
                console.log(data)
            }
        )
    }

    return(
            <div onClick={press}>Hi</div>
    )
}

export default withRouter(Test);