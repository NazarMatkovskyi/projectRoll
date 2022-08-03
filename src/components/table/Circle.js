import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import '../styles/circle.css';

const Circle = () => {
  return (
    <div className="circle">
      <div className="circle_info">
        <span className="circleTitle">Travel</span>
        <div className="circle_inner">
          <div className="circle_one">
            <PieChart
              data={[
                { title: 'Domestic Travel', value: 8, color: '#2D8284' },
                { title: 'International Travel', value: 30, color: '#38A3A5' },
                { title: 'Cruises', value: 12, color: '#41B790' },
                { title: 'Business Travel', value: 20, color: '#60D2A4' },
                { title: 'Other', value: 30, color: '#80ED99' },
              ]}
              lineWidth={50}
              startAngle={-90}
            />
          </div>
          <div>
            <ul className="list">
              <div className="listInfo">
                <li className="listInfo_inner">
                  <span className="oval"></span>
                  Domestic Travel
                </li>
                <span>8%</span>
              </div>
              <li>
                <div className="listInfo">
                  <li className="listInfo_inner">
                    <span className="oval" style={{ background: '#38A3A5' }}></span>
                    International Travel
                  </li>
                  <span>30%</span>
                </div>
              </li>
              <div className="listInfo">
                <li className="listInfo_inner">
                  <span className="oval" style={{ background: '#41B790' }}></span>
                  Cruises
                </li>
                <span>12%</span>
              </div>
              <div className="listInfo">
                <li className="listInfo_inner">
                  <span className="oval" style={{ background: '#60D2A4' }}></span>
                  Business Travel
                </li>
                <span>20%</span>
              </div>
              <div className="listInfo">
                <li className="listInfo_inner">
                  <span className="oval" style={{ background: '#80ED99' }}></span>
                  Other
                </li>
                <span>30%</span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
