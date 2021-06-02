import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

class Loading extends Component {

    render() {
        return  <div className="load" style={{width: "100%", height: "100%"}}>
                   <ClimbingBoxLoader
                    color={"#007bff"}  
                    size={30} style={{width: "100%", height: "100%"}} />
                </div>
    }
  
}

export default Loading;
