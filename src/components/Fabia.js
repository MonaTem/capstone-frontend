import React, { Component } from 'react';
// import ReactDOM, {render} from 'react-dom';
// import PropTypes from 'prop-types';
import './Fabia.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Fabia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      summary: [],
      happy: true,
      sad: false,
      dropdownOpen: false
    }

    this.handleChange  = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleChange(event) {

  }

  handleClick(event) {

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
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
           <DropdownToggle color={white} caret>
           Choose Main Character
          </DropdownToggle>
          <DropdownMenu className="menu">
            <DropdownItem>Bear</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Princess</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Woodcutter</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Witch</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Fairy Queen</DropdownItem>
            <DropdownItem divider />
          <DropdownItem>Ogre</DropdownItem>
         </DropdownMenu>
        </Dropdown>
</div>

    );
  }
}

export default Fabia;
