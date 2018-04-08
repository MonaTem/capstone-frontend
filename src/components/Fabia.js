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
      api: '',
      selected: "Bear",
      finish: ''
    }

    this.handleSelect  = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }


    handleSelect(event) {
      const name = event.target.name;
      const value= event.target.value;
      let id = '';
      switch (value) {
        case 'Bear':
           id = 1;
           break;
        case 'Princess':
           id = 2;
           break;
        case 'Witch' :
           id = 3;
           break;
        case 'Woodcutter' :
           id = 4;
           break;
        case 'Fairy' :
          id = 5;
          break;
        case 'Ogre' :
          id = 6;
          break;
        default:
          id = 1;
      }

      this.setState({
        [name]: value,
        dropdownOpen: !this.state.dropdownOpen,
        id: id,
        voice: null
      });
      console.log('name is ', name, 'value is ', value);
    }

    handleClick(ending, event) {
      event.preventDefault();
      this.setState({
        ending: ending,
        // api: `/api/stories/1/${this.state.ending}_story`
      });

    var array = ["Bear", "Princess", "Witch", "Woodcutter", "Fairy", "Ogre"];
    const end = (ending === "Happy Ending") ? "happy_story" : "sad_story";
    const characterIndex = array.indexOf(this.state.selected) + 1;
    console.log("end: ", end, "characterInd:", characterIndex);
    // const url = "/api/stories/" + characterIndex + "/" + end  This is URL for fake server
    const url = "/api/stories/" + end + "/" + characterIndex;
    console.log("url", url);
    // const stories = '';

     fetch(url)
        .then(response => response.text())
        .then(stories => this.setState({ stories,
                                         voice: (<VoicePlayer
                                                  play
                                                  text={(stories.substring(2,7) === 'happy') ? stories.substring(15) : stories.substring(14)}
                                                 />)
                                        }));

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
