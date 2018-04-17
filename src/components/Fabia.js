import React, { Component } from 'react';
import './Fabia.css';
import VoicePlayer from './VoicePlayer.js';
import Character from './Character.js';

class Fabia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      voice: null,
      stories: '',
      api: '',
      selected: "",
      finish: '',
      id:  7
    }

    this.handleSelect  = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderForm = this.renderForm.bind(this);

  }


    handleSelect(event) {
      const name = event.target.name;
      const value= event.target.value;
      console.log(`value is ${value}`);
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
        case 'Fabia' :
          id = 7;
          break;
        default:
          id = 7;
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

    var array = ["Bear", "Princess", "Witch", "Woodcutter", "Fairy", "Ogre", "Fabia"];
    const end = (ending === "Happy Ending") ? "happy_story" : "sad_story";
    const characterIndex = array.indexOf(this.state.selected) + 1;
    console.log("end: ", end, "characterInd:", characterIndex);
    // const url = "/api/stories/" + characterIndex + "/" + end  This is URL for fake server
    // This is production url for fetch---comment out in development
    const HerokuUrl = "https://fabias-fairytales-backend.herokuapp.com";
    // This is development url for fetch--comment out for production
    // const HerokuUrl = "http://localhost:8000";
    const url = HerokuUrl + "/api/stories/" + end + "/" + characterIndex;
    console.log("url", url);
    //const stories = '';

     fetch(url)
        .then(response => response.text())
        .then(stories => this.setState({ stories,
                                         voice: <VoicePlayer
                                                  play
                                                  text={(stories.substring(2,7) === 'happy') ? stories.substring(15) : stories.substring(14)}
                                                 />
                                        }));
     //console.log('stories are ', stories);

    }

   renderForm() {

     const ending = this.state.ending;
     const character = this.state.selected;

     return (
      <div>
       <form onSubmit={this.handleClick}>
        <label>
         Choose Main Character:
        <br/>
      <select name="selected" value={this.state.value} onBlur={this.handleSelect}>
         <option></option>
         <option value="Bear">Bear</option>
         <option value="Princess">Princess</option>
         <option value="Witch">Witch</option>
         <option value="Woodcutter">Woodcutter</option>
         <option value="Fairy">Fairy</option>
         <option value="Ogre">Ogre</option>
         <option value="Fabia">Fabia</option>
        </select>
        </label>

        <br/><br/>
         <button name="ending" color="white" value="happy"  onClick={this.handleClick.bind(this, "Happy Ending")}>Happy ending?</button>
         <button name="ending" value="sad" color="white" onClick={this.handleClick.bind(this, "Sad Ending")}>Sad ending?</button>
       </form>
       <p>Selected: {character} {" "} {ending}</p>
      </div>
    );
   }


  render() {
    const character = this.state.selected;
    var photo = "/Fabia.jpeg";
    switch(character) {
      case "Bear":
        photo = "/PurpleBear.jpeg";
        break;
      case "Princess":
        photo = "/Princess.jpg";
        break;
      case "Witch":
         photo = "/Purple_Witch_PNG_Clipart_Image.png";
         break;
      case "Ogre":
         photo = "/Purple_Ogre.jpg";
         break;
      case "Woodcutter":
         photo = "/Woodcutter.jpg";
         break;
      case "Fabia":
         photo = "/Fabia.jpeg";
         break;
      default:
        photo = "/Fabia.jpeg";
    }
    //console.log(`photo is ${photo}`);

    // console.log("ending is: ", ending, "character is: ", character);
    return (

      <div>
       <Character character={character} photo={photo} />
       {this.renderForm()}
       {this.state.voice}
      </div>
    );
  }
}

export default Fabia;
