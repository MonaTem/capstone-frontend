import React, { Component } from 'react';
// import ReactDOM, {render} from 'react-dom';
// import PropTypes from 'prop-types';
import './Fabia.css';
import VoicePlayer from './VoicePlayer.js';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, ButtonGroup } from 'reactstrap';


class Fabia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: 'Bear',
      happy: true,
      sad: false,
      dropdownOpen: false,
      rSelected: ''
    }

    this.select  = this.select.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
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
      dropdownOpen: !this.state.dropdownOpen
    });
    // console.log("new character is " + this.state.character);
  }



  handleClick(rSelected) {
    this.setState({ rSelected });
    }

    // <VoicePlayer
    //     play
    //     text="React voice player demonstration"
    //   />



  render() {
    const white = 'white';
    const radioSelection = this.state.rSelected;
    const voice = radioSelection ? (<VoicePlayer
         play
        text="React voice player demonstration"
        />) : null;


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
          <Button color="white" onClick={() => this.handleClick('Happy ending')} active={this.state.rSelected === 'Happy ending'}>Happy ending?</Button>
          <Button color="white" onClick={() => this.handleClick('Sad ending')} active={this.state.rSelected === 'Sad ending'}>Sad ending?</Button>
        </ButtonGroup>
        <p>Selected: {this.state.rSelected}</p>
       {voice}
</div>

    );
  }
}

export default Fabia;
