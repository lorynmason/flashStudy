import React, { Component } from 'react';
import './styles/main.scss';

export default class Header extends Component {
  startReStudy=()=>{
    this.props.passReStudy()
  }
  passDisplayAll=()=>{
    this.props.displayAll()
  }
    

  render() {
    return (
      <header>
          <h1 className="header">flashStudy <div className="btn-div">
            <button className="viewAll-btn" onClick={this.passDisplayAll}tooltip="Click to see all flashcard questions"><i className="far fa-clone"></i>View All</button>
            <button className="restudy-btn" onClick={this.startReStudy} tooltip="Click to see incorrect questions"><i className="fas fa-retweet"></i>ReStudy</button>
          </div></h1>
      </header>
    );
  }
}