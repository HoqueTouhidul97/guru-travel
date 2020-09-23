import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FrontPlace from '../FrontPlace/FrontPlace';
import Header from '../Header/Header';
import './Home.css';
import fakeData from '../../fakeData/fakeData'

const Home = () => {
    return (
        <div className="home-container">
            <Header></Header>
            <div className="container place-detail-container">
                <div className="row">
                    <div className="col-md-3 place-detail">
                        <h1>Cox's Bazar</h1>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <Link to="/placeDetails/1"><Button variant="warning">Booking &rarr;</Button></Link>
                    </div>
                    <div className="col-md-9  place-cards">
                    
                            {
                                fakeData.map(place=> <FrontPlace place={place} ></FrontPlace>)
                            } 

                            
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;