import React, { Component } from 'react';
import './Fabia.css';

class Fabia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      summary: [],
      happy: true,
      sad: false
    }
    this.handleChange  = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {

  }

  handleClick(event) {

  }


  render() {

    return (
      <div>
        <h5 className="h5">
            Hello, My Name is Fabia and I'd Love to Tell You a Fairytale
        </h5>

        <div className="Fabia">
          <img className="img-fluid" src="/AdobeStock_59629549_Preview.jpeg" alt="Purple Fairy" height="300" width="300"/>
        </div>
      </div>
    );
  }
}

export default Fabia;
