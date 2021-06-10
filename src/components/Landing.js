import React , { Component } from 'react';
import Navigation from "./Navigation";
import Jumbo from "./Jumbo";
import Footer from "./Footer";
import Cards from "./Cards";

const INITIAL_STATE = {
  error: null
};

class Landing extends Component {
  state = { ...INITIAL_STATE }


  render() {
    return (
      <div className="App">
       <div>
          <Navigation />
          <div className="container"> 
              <Jumbo />
          </div>
          <div className="cards_together">
              <Cards/>
          </div>
          <Footer/>
        </div>
      </div>    
    );
  }
}
  
export default Landing;
