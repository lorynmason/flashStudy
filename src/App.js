import React, { Component } from 'react';
import Header from './Header';
import QuestionDisplay from './QuestionDisplay';
import Card from './Card';
import './styles/main.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      flashStudyData: []
    };
    
  } 

  componentDidMount = () => {
    fetch('https://memoize-datasets.herokuapp.com/api/v1/flashStudyQuestions')
      .then(response => response.json())
      .then(flashStudyData => {
        this.setState({
          flashStudyData: flashStudyData.flashStudyQuestions
        })
      })
      .catch(error => console.log(error));
      
  }

  render() {
    return (
      <div className="App">
        <Header />
        <QuestionDisplay flashStudyData={this.state.flashStudyData}/>
        <Card />
      </div>
    );
  }
}

export default App;
