import React from 'react';
import './styles/home.css'
import Tables from './table/Tables';



const Home = () => {
  return (
    <div className="home">
      <div className='home_title'>Data table</div>
      <div className='home_inner'>
         <Tables />
      </div>
    </div>
  );
};

export default Home;
