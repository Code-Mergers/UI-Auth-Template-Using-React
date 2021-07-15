import React, { Component } from 'react';
import Card from './CardUI';
import cardDetails from './CardDetails';

class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center ">
               <div className="row">
                    {cardDetails.map( oneCard => 
                        <div className="col-md-4 individual_card" >
                            <Card   
                                key={oneCard.id}
                                image={new URL("https://source.unsplash.com/800x500")}
                                title={oneCard.title}
                                text={oneCard.text}
                                url={oneCard.url}
                                button={oneCard.button}
                                cardid={oneCard.id} />
                        </div>)
                    }
               </div>
            </div>
        );
    }
}

export default Cards;
