import React, { Component } from 'react';
import './App.css';
import Fabia from './components/Fabia.js';
// import { VoicePlayer } from 'react-voice-components';
import VoicePlayer from './components/VoicePlayer.js';

class App extends Component {


  render() {
    return (
      <div className="App">
        <br/>
        <br/>
      <Fabia/>
      <VoicePlayer
          play
          text="React voice player demonstration"
        />
      </div>
    );
  }
}

export default App;
