import React, { Component } from 'react';
import './styles/main.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   ReStudy: false
    // };
  }

  startReStudy=()=>{
    this.props.passReStudy()
    console.log(1)
  }

  render() {
    return (
      <header>
        <h1 className="header">flashStudy<button className="restudy-btn" onClick={this.startReStudy} title="Click to see incorrect questions"><i className="fas fa-retweet"></i>ReStudy</button></h1>
      </header>
    );
  }
}