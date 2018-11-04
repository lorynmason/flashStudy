import React, { Component } from 'react';
import Header from './Header';
import QuestionDisplay from './QuestionDisplay';
import './styles/main.scss';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      flashStudyData: [],
      answerChoices: [],
      correctAnswers: [],
      id: []
    };
  } 

  componentDidMount = () => {
    fetch('https://memoize-datasets.herokuapp.com/api/v1/flashStudyQuestions')
      .then(response => response.json())
      .then(flashStudyData => {
        this.setState({
          flashStudyData: flashStudyData.flashStudyQuestions,
          answerChoices: Array.from(flashStudyData.flashStudyQuestions).map(card => {
            return card.answerChoices;
          }),
          correctAnswers: Array.from(flashStudyData.flashStudyQuestions).map(card => {
            return card.correctAnswer;
          }),
          id: Array.from(flashStudyData.flashStudyQuestions).map(card => {
            return card.id;
          })
      })
    })
      .catch(error => console.log(error));  
  }

  render() {
    return (
      <div className="App">
        <Header />
        <QuestionDisplay flashStudyData={this.state.flashStudyData} 
                          choices={this.state.answerChoices}
                          checkAnswer={this.checkAnswer}
                          id={this.state.id}
                          correctAnswer={this.state.correctAnswers}/>
        <Footer />
      </div>
    );
  }
}

export default App;
