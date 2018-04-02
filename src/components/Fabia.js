import React, { Component } from 'react';
import './Fabia.css';
import VoicePlayer from './VoicePlayer.js';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, ButtonGroup } from 'reactstrap';



class Fabia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: 'Bear',
      chars: ['Bear', 'Princess', 'Witch', 'Woodcutter', 'Fairy Queen', 'Ogre'],
      dropdownOpen: false,
      rSelected: '',
      voice: null,
      stories: '',
      id: 1,
      api: '/api/stories/1/happy_story',
      ending: 'Happy'
    }

    this.select  = this.select.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    const api = this.state.api;
    console.log(`URL is ${api}`);
    fetch(api)
      .then(response => response.text())
      .then(stories => this.setState({ stories }));
  }

    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }

    select(event) {
      event.preventDefault();
      this.setState({
        character: event.target.innerText,
        dropdownOpen: !this.state.dropdownOpen,
        voice: null
      });

    }

    handleClick(event) {

      let api = this.state.api;
      console.log("ending is " + this.state.ending);
      this.state.ending === 'Sad' ? (api = '/api/stories/1/sad_story') : (api = '/api/stories/1/happy_story');
      fetch(api)
        .then(response => response.text())
        .then(stories => this.setState({ stories }));
      this.setState({
        rSelected: event.target.innerText,
        id: (this.state.chars.indexOf(this.state.rSelected) + 1),
        ending: this.state.rSelected.substring(0,this.state.rSelected.length-8),
        api: api,
        voice: (<VoicePlayer
                               play
                               text={this.state.stories}
                              />)
      });

    }


  render() {
    const white = 'white';


    return (

      <div>
        <h5 className="h5">
            Hello, My Name is Fabia and I'd Love to Tell You a Fairytale
        </h5>

        <div className="Fabia">
          <img className="img-fluid" src="/AdobeStock_59629549_Preview.jpeg" alt="Purple Fairy" height="300" width="300"/>
        </div>
        <Dropdown className="dropit" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
           <DropdownToggle color={white} caret>
           Choose Main Character
          </DropdownToggle>
          <DropdownMenu className="menu">
            <DropdownItem onClick={this.select.bind(this)}>Bear</DropdownItem>
            <DropdownItem onClick={this.select.bind(this)}>Princess</DropdownItem>
            <DropdownItem onClick={this.select.bind(this)}>Woodcutter</DropdownItem>
            <DropdownItem onClick={this.select.bind(this)}>Witch</DropdownItem>
            <DropdownItem onClick={this.select.bind(this)}>Fairy Queen</DropdownItem>
            <DropdownItem onClick={this.select.bind(this)}>Ogre</DropdownItem>
         </DropdownMenu>
        </Dropdown>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <ButtonGroup className="btngrp">
          <Button color="white" onClick={this.handleClick.bind(this)}>Happy ending?</Button>
          <Button color="white" onClick={this.handleClick.bind(this)}>Sad ending?</Button>
        </ButtonGroup>
        <p>Selected: {this.state.rSelected.substring(0,this.state.rSelected.length-1)}</p>
      {this.state.voice}
</div>
    );
  }
}

export default Fabia;
