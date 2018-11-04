import React from 'react';
import './styles/main.scss';

export default function Header() {

  return (
    <header>
      <h1 className="header">flashStudy<button className="restudy-btn" title="Click to see incorrect questions"><i className="fas fa-retweet"></i>ReStudy</button></h1>
    </header>
  );
}