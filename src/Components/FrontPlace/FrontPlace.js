import React from 'react';
import './FrontPlace.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const FrontPlace = (props) => {
    const {key,name} = props.place
    const placeImage = props.place.image

    return (
       
        <div className="place-body" >
              
        <Link to={`/placeDetails/${key}`}>
        <div style={{ backgroundImage: `url(${placeImage})` }} className="card">
          <div className="container">
            <h4><b>{name}</b></h4>
          </div>
          </div>   
        </Link>
  
     </div>
    );
};

export default FrontPlace;