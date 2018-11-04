import React, { Component } from 'react';
import './styles/main.scss'; 

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extendedView: false,
      selectedAnswer: '',
      correct: null
    };
  }

  expandCard=(e)=> {
    this.setState({
      extendedView: true
    })
    e.target.classList.add('extended-card')
    document.querySelector('.extended-card').scrollIntoView({block: "center"})
  }

  selectAnswer = (e) => {
    let select = e.target.value
    this.setState({
      selectedAnswer: select
    })
  }

  checkAnswer = (select, event) => {
    if(select === this.props.correctAnswer[this.props.id -1]) {
      this.setState({
        correct: true
      })
    } else {
      this.setCardToStorage(this.props.id)
      this.setState({
        correct: false
      })
    }
  }

  setCardToStorage(id) {
    var storeIds = [];
    if (JSON.parse(localStorage.getItem("ids"))) {
      storeIds = JSON.parse(localStorage.getItem("ids"))
      storeIds.push(id)
      localStorage.setItem('ids', JSON.stringify(storeIds));
    } else {
      storeIds.push(id);
      localStorage.setItem('ids', JSON.stringify(storeIds));
    }
  }

  collapseCard = () => {
    this.setState({
      extendedView: false,
      selectedAnswer: '',
      correct: null
    })
  }

  render() {
    if(this.state.extendedView === true && this.state.correct === null){ 
      return(
        <div className="all-cards extended-card"  id={this.props.id}>
        <p>{this.props.card}</p>
        <ul>
          {
            this.props.choices.map((choice, index) => {
              return <li className='answer-choice-row' key={index}><input className="radios" type="radio" name="answer" value={choice} key={index} onClick={this.selectAnswer}></input>{choice}</li>
            })
          }
        </ul>
        <button className='enter-btn' onClick={event => this.checkAnswer(this.state.selectedAnswer, event)}>Enter</button>
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
    if(this.state.extendedView === true && this.state.correct === true ) {
      return(
        <div className="all-cards extended-card"  id={this.props.id}>
        <p>{this.props.card}</p>
        <p>CORRECT!</p>
        <button className='close-btn' onClick={this.collapseCard}>CLOSE</button>
        </div>
      )
    }
    if(this.state.extendedView === true && this.state.correct === false) {
      return(
        <div className="all-cards extended-card"  id={this.props.id}>
        <p>{this.props.card}</p>
        <p>INCORRECT :(</p>
        <p>Question saved in restudy</p>
        <button className='close-btn' onClick={this.collapseCard}>CLOSE</button>
        </div>
      )
    }
  }
}