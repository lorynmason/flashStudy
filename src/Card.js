import React, { Component } from 'react';
import './styles/main.scss'; 

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extendedView: false
    };
  }

  expandCard=(e)=> {
    this.setState ={
      extendedView: true
    }
    e.target.classList.add('extended-card')
    console.log(this.state)
  }
  render() {
    return(
      <div className="all-cards" onClick={this.expandCard}>
      {
       this.props.card
      }
      </div>
    )
  }
}