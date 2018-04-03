import React, { Component } from 'react';
import './Fabia.css';
import VoicePlayer from './VoicePlayer.js';

class Fabia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      voice: null,
      stories: '',
      api: '/api/stories/1/happy_story',
      selected: "Bear",
      finish: 'happy'
    }

    this.handleSelect  = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }


    handleSelect(event) {
      const name = event.target.name;
      const value= event.target.value;
      this.setState({
        [name]: value,
        dropdownOpen: !this.state.dropdownOpen,
      });
      console.log('name is ', name, 'value is ', value);
    }

    handleClick(ending, event) {
      event.preventDefault();
      this.setState({
        ending: ending,
        finish: ending.toLowerCase().substring(0,ending.length-8)
        // id: (this.state.chars.indexOf(this.state.rSelected) + 1),
        // api: `/api/stories/1/${this.state.ending}_story`
        // api: `/api/stories/1/${this.state.ending}_story`
      });
     // const end = this.state.end;
     // console.log("end is ", end);

    }


  render() {
    const ending = this.state.ending;
    const character = this.state.selected;
    console.log("ending is: ", ending, "character is: ", character);

    return (
      <div>
        <h5 className="h5">
            Hello, My Name is Fabia and I would Love to Tell You a Fairytale
        </h5>

        <div className="Fabia">
          <img className="img-fluid" src="/AdobeStock_59629549_Preview.jpeg" alt="Purple Fairy" height="300" width="300"/>
        </div>
        <form onSubmit={this.handleClick}>
        <label>
           Choose Main Character:
           <br/>
           <select name="selected" value={this.state.value} onChange={this.handleSelect}>
             <option value="Bear">Bear</option>
             <option value="Princess">Princess</option>
             <option value="Witch">Witch</option>
             <option value="Woodcutter">Woodcutter</option>
             <option value="Fairy">Fairy</option>
             <option value="Ogre">Ogre</option>
           </select>
        </label>

        <br/><br/>
          <button name="ending" color="white" value="happy"  onClick={this.handleClick.bind(this, "Happy Ending")}>Happy ending?</button>
          <button name="ending" value="sad" color="white" onClick={this.handleClick.bind(this, "Sad Ending")}>Sad ending?</button>
      </form>
      <p>Selected: {character}, {ending}</p>
      {this.state.voice}
 </div>
    );
  }
}

export default Fabia;
