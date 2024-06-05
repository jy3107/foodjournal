import React from 'react';
import food from './food.png';

const Home = () => {

  return (
    <div className="app">
      <div className="row">
        <img className="food" src={food} height={700} width={550} alt="food" />
        <div className="col">
          <h1 className="title">Foodie Journal</h1>
          <button className='start-btn'>Make Your Food Journal!</button>
        </div>
      </div>
    </div>
  );

}

export default Home