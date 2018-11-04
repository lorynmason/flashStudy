import React, { Component } from 'react';
import './styles/main.scss';

export default class Footer extends Component  {
  
  bringToTop=()=>{
    document.querySelector('header').scrollIntoView({block: "start"})
  }

  render() {
    return(
      <footer>
        <i className="fas fa-arrow-circle-up" title="Back to top" onClick={this.bringToTop}></i>
      </footer>
    )
  }
}