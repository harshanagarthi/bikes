import React from 'react'
import { Link } from 'react-router-dom';
import activa from "../Assets/Images/actred.png";
import glamour from "../Assets/Images/glamourblack.png";
import ntorq from "../Assets/Images/ntorq.png";
import pulsar from "../Assets/Images/pulsar.png";
import tvs125 from "../Assets/Images/tvs125.png"
import rtr310 from "../Assets/Images/RTR310.png"
import rtr160 from "../Assets/Images/rtr160.png"
import jupiter from "../Assets/Images/jupiter.png"
import sport from "../Assets/Images/sport.png"
import jup125 from "../Assets/Images/jup125.png"
import comfort from "../Assets/Images/comfort.png"
import heavy from "../Assets/Images/heavy.png"
import pep from "../Assets/Images/pep.png"
import star from "../Assets/Images/star.png"
import x from "../Assets/Images/x.png"
import "../styles/tvs.css";
const Honda = () => {
  return (
    <div className='bikes-container'>
      <div className='frow'>
        <Bike brand="HONDA" srcName={tvs125} description="Honda" link="/honda" />
        <Bike brand="HERO" srcName={rtr310} description="Honda" link="/hero" />
        <Bike brand="TVS" srcName={ntorq} description="Honda" link="/tvs" />
        <Bike brand="BAJAJ" srcName={rtr160} description="Honda" link="/bajaj" />
        <Bike brand="BAJAJ" srcName={jupiter} description="Honda" link="/bajaj" />
        <Bike brand="BAJAJ" srcName={sport} description="Honda" link="/bajaj" />
        <Bike brand="BAJAJ" srcName={jup125} description="Honda" link="/bajaj" />
        <Bike brand="BAJAJ" srcName={comfort} description="Honda" link="/bajaj" />
        <Bike brand="BAJAJ" srcName={heavy} description="Honda" link="/bajaj" />
        <Bike brand="BAJAJ" srcName={pep} description="Honda" link="/bajaj" />
        <Bike brand="BAJAJ" srcName={star} description="Honda" link="/bajaj" />
        <Bike brand="BAJAJ" srcName={x} description="Honda" link="/bajaj" />
      </div>
    </div>
  );
}

const Bike = ({ brand, srcName, description, link }) => {
  return (
    <div className='bike'>
      <Link to={link} className='bike-link'>
        <img src={srcName} className='bikeimg' alt={`${brand} bike`} />
        <hr className="separator" />
        <h1 className='bike-description'>{description}</h1>
        {/* <div className="overlay">{brand}</div> */}
      </Link>
    </div>
  )
}

export default Honda