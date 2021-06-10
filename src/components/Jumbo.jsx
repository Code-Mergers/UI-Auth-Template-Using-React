import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Jumbo extends Component {
  state = {greet : ""};

  componentWillMount() {
    let currHr = new Date().getHours(); 
    if (currHr < 12 && currHr >= 0) this.setState({ greet: "Good Morning!"});
    else if (currHr >= 12 && currHr < 18) this.setState({ greet: "Good Afternoon!"});
    else if (currHr >=18) this.setState( { greet: "Good Evening!"});
  }

  render() {
    return (
      <div style={{marginTop: "120px"}}> 
          <Jumbotron className="Jumbotron">
              <div className="overflow">
                <h1 className="jumbo_transform">{this.state.greet}</h1>
              </div>
               <div className="overflow">
                <p className="jumbo_transform">
                  <h5 id="mytextjambo"><strong>React UI + Firebase Authentication Template By Code Mergers</strong></h5>
                  <h5 id="mytextjambo"><strong><a href="https://github.com/Code-Mergers" style={{color:"darkblue"}} target="_black">Code Mergers Github Organization</a></strong></h5>
                </p>
            </div>
          </Jumbotron>
      </div>
    )
  }
  
}

export default Jumbo;
