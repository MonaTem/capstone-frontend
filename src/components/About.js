import React from 'react';
import './Fabia.css';
import { Link } from "react-router-dom";

const About = (props) => {

    return (
    <div>
           <h5 className="h5">
                    {"This is Fabia's Page"}
               </h5>

               <div className="Fabia">
                      <img className="img-fluid" src={props.photo} alt={props.character} height="300" width="300"/>
               </div>

               <div>
                 <p>Fabia is a mysterious fairy.  We don't know much about her, except that she is pretty, purple,
                 <br></br>
                 and likes to tell fairy tales.  She may or may not be the fairy that is the main character
                 <br></br>
                 in the stories about fairies.   She may or may not be the alter ego of the creator of this website.
                 </p>
               </div>
               <div className="Fabia">
                      <img className="img-fluid" src="./Fabia.jpeg" alt={props.character} height="300" width="300"/>
               </div>
               <br></br>
               <br></br>
               <br></br>
               <Link to={"/"}>Home</Link>
             </div>
    );

}

export default About;
