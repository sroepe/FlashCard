import React from 'react';

import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        side: 'front',
        text: 'What is multiple inheritance?'
     }
  }

  flipCard() {
    if(this.state.side === 'front'){
      this.setState({text: 'a feature of object oriented concept, where a class can inherit properties of more than one parent class', side: 'back'});
    }
    else {
      this.setState({text: 'What is multiple inheritance?', side: 'front'});
    }
    
  }

  render() {
    return(
      <div class="card-outline" onClick={() => this.flipCard()}>
        <div class="topic-tag">
          <h4>{this.props.tag}</h4>
        </div>
        <div class="card-text">
          <h1>{this.state.text}</h1>
        </div>
          
        
      </div>
    );
  }
}

export default Card;