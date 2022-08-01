import React from 'react';
import './styles/analytics.css'
import Maps from './table/Maps';

const Analytics = () => {
  return (
    <div className="analytics">
      <div className="analytics_title">Geographic Performance of Goal</div>
      <Maps/>
    </div>
  );
};

export default Analytics;
