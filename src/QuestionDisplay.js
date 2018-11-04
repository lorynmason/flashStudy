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