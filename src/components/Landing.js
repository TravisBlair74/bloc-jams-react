import React from 'react';
import { Route, Link } from 'react-router-dom';

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title">Welcome to Kaya, your new favorite online music app</h1>

   <section className="selling-points">
     <div className="point">
       <p className="point-description">We have a variety of free <Link to='/library'>albums</Link> for your listening enjoyment</p>
     </div>
     <div className="point">
       <h2 className="point-title">Unlimited, streaming, <em>free</em></h2>
       <p className="point-description">Get started by searching through our <Link to='/library'>library</Link> today</p>
     </div>
   </section>
  </section>
);

export default Landing;
