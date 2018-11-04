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

  expandCard=()=> {
    this.setState({
      extendedView: true
    })
    document.querySelector('.all-cards').classList.add('extended-card')
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
        <div className="all-cards extended-card"  id={this.props.id} onClick={this.expandCard}>
        <p>{this.props.card}</p>
        <ul>
          {
            this.props.choices.map((choice, index) => {
              return <li className='answer-choice-row' key={index}><input type="radio" name="answer" value={choice} key={index} onClick={this.selectAnswer}></input>{choice}</li>
            })
          }
        </ul>
        <button className='enter-btn' onClick={this.props.checkAnswer(this.state.selectedAnswer)}>Enter</button>
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