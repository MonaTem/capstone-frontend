import React from 'react';
import './Fabia.css';


const Character = (props) => {
  if (props.character === "Fabia") {
    return (
    <div>
           <h5 className="h5">
                    Hello, My Name is Fabia and I would Love to Tell You a Fairytale
               </h5>

               <div className="Fabia">
                      <img className="img-fluid" src={props.photo} alt={props.character} height="300" width="300"/>
               </div>
             </div>
    );

  } else

  return (
      <div>
        <h5 className="h5">
            I'm the {props.character} and This is My Story
        </h5>

        <div className="Character">
             <img className="img-fluid" src={props.photo} alt={props.character} height="400" width="400"/>
        </div>
        <br></br>
        <p>First time through, click the ending type twice to render the voice</p>
     </div>
  );

}

export default Character;
