import React, { Component } from 'react';
import './styles/main.scss'; 
import Card from './Card';

export default class QuestionDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extendedView: false
    };
  }

  render () {
    if(this.props.ReStudy === true && this.props.storedIds){
      return (
        <main className="question-display"> 
        <section className="question-display-grid">
        { 
           this.props.storedIds.map( num => {
            return this.props.flashStudyData.filter( question => {
              return question.id === num
            })
          }).reduce((arr, question) => arr.concat(question), []).map(card => {
            return <Card key={card.id} 
            card={card.question} 
            choices={card.answerChoices} 
            checkAnswer={this.props.checkAnswer}
            id={card.id}
            flashStudyData={this.props.flashStudyData}
            correctAnswer={this.props.correctAnswer}/>;
          })
        }
        </section>
        </main>
      )
    }
    if(this.props.ReStudy === true && !this.props.storedIds){
      return (
      <main className="question-display"> 
      <section className="question-display-grid">
        <div className="all-cards">
          <h1>There's Nothing In Your ReStudy, Return to All Question by Clicking the 'View All' Button.</h1>
        </div>
      </section>
      </main>
      )
    }

    return (
      <main className="question-display"> 
      <section className="question-display-grid">
      {
        this.props.flashStudyData.map(card => {
          return <Card key={card.id} 
          card={card.question} 
          choices={card.answerChoices} 
          checkAnswer={this.props.checkAnswer}
          id={card.id}
          flashStudyData={this.props.flashStudyData}
          correctAnswer={this.props.correctAnswer}/>;
        })
      }
      </section>
      </main>
    );
  }
}