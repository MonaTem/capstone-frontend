import React from 'react';
import './Fabia.css';


const Character = (props) => {
  return (
      <div>
        <h5 className="h5">
            I'm the {props.character} and This is My Story
        </h5>

        <div className="Character">
             <img className="img-fluid" src={props.photo} alt={props.character} height="300" width="300"/>
        </div>
     </div>
  );

}

export default Character;
