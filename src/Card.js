import React, { Component } from 'react';
import './styles/main.scss'; 

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extendedView: false,
      selectedAnswer: ''
    };
  }

  expandCard=(e)=> {
    this.setState({
      extendedView: true
    })
    e.target.classList.add('extended-card')
  }

  selectAnswer = (e) => {
    let select = e.target.value
    this.setState({
      selectedAnswer: select
    })
    console.log(this.state)
  }

  render() {
    if(this.state.extendedView === true){ 
      return(
        <div className="all-cards extended-card"  id={this.props.id}>
        <p>{this.props.card}</p>
        <ul>
          {
            this.props.choices.map((choice, index) => {
              return <li className='answer-choice-row' key={index}><input type="radio" name="answer" value={choice} key={index} onClick={this.selectAnswer}></input>{choice}</li>
            })
          }
        </ul>
        <button className='enter-btn' onClick={event => this.props.checkAnswer(this.state.selectedAnswer, event)}>Enter</button>
        </div>
      )
    }
    if(this.state.extendedView === false){
      return(
        <div className="all-cards" onClick={this.expandCard}>
        {
          this.props.card
        }
        </div>
      )
    }
   
  }
}