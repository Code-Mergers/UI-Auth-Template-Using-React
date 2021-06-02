import React , { Component } from 'react';
import Navigation from "./Navigation";
import Jumbo from "./Jumbo";
import Footer from "./Footer";
import Cards from "./Cards";
import Loading from './Loading';

const INITIAL_STATE = {
  Didload: true,
  error: null
};

class Landing extends Component {
  state = { ...INITIAL_STATE }

  componentDidMount() {
    setTimeout(() => this.setState({Didload: false}), 2900);
  }


  render() {
    return (
      <div className="App">
        {
          this.state.Didload ?(
          <Loading />
        )
        :
        (<div>
            <Navigation />
            <div className="container"> 
                <Jumbo />
            </div>
            <div className="cards_together">
                <Cards/>
            </div>
            <Footer/>
          </div>
          )
        }      
      </div>
    );
  }
}
  
export default Landing;
