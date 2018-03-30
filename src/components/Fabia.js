import React, { Component } from 'react';
import './Fabia.css';

class Fabia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters = [];
      summary = [];
    }
    this.handleChange  = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
}
