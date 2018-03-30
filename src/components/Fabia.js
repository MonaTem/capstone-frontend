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
        <h1 className="heading">
            Hello, My Name is Fabia and I'd Love to Tell You a Fairytale
        </h1>

        <div className="Fabia">
          <img class="img-fluid" src="/public/AdobeStock_59629549_Preview.jpeg" alt="Purple Fairy" height="200" width="100"/>
        </div>
      </div>
    );
  }
}

export default Fabia;
