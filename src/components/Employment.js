import React from 'react';
import './styles/analytics.css';

import { BusinessAnalytics, CompanySize, INDUSTRY } from '../const/EmploymentConst';
import { Makers } from '../const/EmploymentConst';

import { Bar, CartesianGrid, ComposedChart, XAxis, YAxis } from 'recharts';
import { DataTables } from '../const/EmploymentConst';
import { ProgressBar } from '../const/EmploymentConst';
import { PieChart } from 'react-minimal-pie-chart';

const Employment = () => {
  return (
    <div className="employment">
      <div className="employment_last">
        <div className="employment_inner">
          <div className="employment_inner-info employment_inner-infoBlock">
            Business Owners
            <div className="employment-percent">10.56%</div>
            <span className="employment-percent_info">↓ 8.87%</span>
            <div className="employment-percent_subtitle">
              <span>Baseline: 44.74%</span>
              <span>Records: 21,948,091</span>
            </div>
          </div>
          <div className="employment_inner-info employment_inner-infoBlock">
            Management Titles
            <div className="employment-percent">9.74%</div>
            <span className="employment-percent_info">↓ 8.87%</span>
            <div className="employment-percent_subtitle">
              <span>Baseline: 44.74%</span>
              <span>Records: 21,948,091</span>
            </div>
          </div>
          <div className="employment_inner-info employment_inner-info-progress employment_inner-infoBlock">
            CompanySize
            <div className="employment_makers">
              <ComposedChart
                barGap="-12"
                layout="horizontal"
                width={375}
                height={300}
                data={CompanySize}
                margin={{
                  top: 50,
                  right: 0,
                  bottom: 40,
                  left: 0,
                }}>
                <CartesianGrid stroke="rgba(34, 87, 122, 0.2)" vertical={false} />
                <XAxis
                  dataKey="name"
                  axisLine={true}
                  stroke="#38a3a5"
                  tickLine={false}
                  angle={-90}
                  textAnchor="end"
                />
                <YAxis
                  interval={0}
                  unit="%"
                  tickCount={4}
                  width={60}
                  tickLine={false}
                  axisLine={false}
                  tickSize="10"
                  tickMargin={10}
                  className={'aaa'}
                />

                <Bar
                  animationDuration={3000}
                  dataKey="pv"
                  barSize={20}
                  fill="#80ED99"
                  opacity={'30%'}
                  radius={[15, 15, 0, 0]}
                />
                <Bar
                  animationDuration={3000}
                  dataKey="pa"
                  barSize={4}
                  fill="#38A3A5"
                  radius={[15, 15, 0, 0]}
                />
              </ComposedChart>
            </div>
            <div className="subTitle_info">
              <span className="subTitle_info-inner">
                <span className="subTitleIndustryBlock"></span>
                US Population
              </span>
              <span className="subTitle_info-inner">
                <span className="subTitleIndustryBlockTwo"></span>
                <span className="subTitle_info-inner">Size</span>
              </span>
            </div>
            <div className="subTitleIndustry_last">92.90% of audience matched</div>
          </div>
        </div>
        <div className="employment_inner_last employment_inners">
          <div className="employment_inner-info  employment_inner-information ">
            Industry
            <div className="industry yaxisName employment_inner-infoJob">
              <ComposedChart
                barGap="-8"
                layout="vertical"
                width={500}
                height={930}
                data={INDUSTRY}
                margin={{
                  top: 12,
                  right: 10,
                  bottom: 0,
                  left: 60,
                }}>
                <CartesianGrid stroke="rgba(34, 87, 122, 0.3)" horizontal={false} />
                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tickSize={10}
                  unit="%"
                  ticks={[0, 5, 10, 15, 20, 25]}
                  domain={['dataMin', 'dataMax']}
                  stroke="#38a3a5"
                  fontSize={'14px'}
                  fontWeight={400}
                />
                <YAxis
                  interval={0}
                  dataKey="name"
                  width={120}
                  stroke="#38a3a5"
                  type="category"
                  tickLine={false}
                  tickSize="10"
                  tickMargin={10}
                  orientation="left"
                />

                <Bar
                  dataKey="pv"
                  barSize={12}
                  fill="#80ED99"
                  opacity={'30%'}
                  animationDuration={3000}
                  radius={[0, 15, 15, 0]}
                />
                <Bar
                  dataKey="pa"
                  barSize={4}
                  fill="#38A3A5"
                  animationDuration={3000}
                  legendType="diamond"
                  radius={[0, 15, 15, 0]}
                />
              </ComposedChart>
            </div>
            <div className="subTitleIndustry">Example of the label</div>
            <div className="subTitle_info">
              <span className="subTitle_info-inner">
                <span className="subTitleIndustryBlock"></span>
                US Population
              </span>
              <span className="subTitle_info-inner">
                <span className="subTitleIndustryBlockTwo"></span>
                <span className="subTitle_info-inner">Size</span>
              </span>
            </div>
            <div className="subTitleIndustry_last">
              92.90% of audience matched{' '}
              <span className="subTitleIndustry_last_inner">(53,487,342)</span>
            </div>
          </div>
          <div className="employment_inner-info employment_inner-information">
            Job Area
            <div className="yaxisName employment_inner-infoJob">
              <ComposedChart
                barGap="-17"
                layout="vertical"
                width={500}
                height={930}
                data={DataTables}
                margin={{
                  top: 12,
                  right: 10,
                  bottom: 0,
                  left: 60,
                }}>
                <CartesianGrid stroke="rgba(34, 87, 122, 0.3)" horizontal={false} />
                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tickSize={10}
                  unit="%"
                  ticks={[0, 5, 10, 15, 20, 25]}
                  domain={['dataMin', 'dataMax']}
                  stroke="#38a3a5"
                  fontSize={'14px'}
                  fontWeight={400}
                />
                <YAxis
                  interval={0}
                  dataKey="name"
                  width={60}
                  stroke="#38a3a5"
                  type="category"
                  tickLine={false}
                  tickSize="10"
                  tickMargin={10}
                  className={'aaa'}
                />

                <Bar
                  dataKey="pv"
                  barSize={26}
                  fill="#80ED99"
                  opacity={'30%'}
                  animationDuration={3000}
                  radius={[0, 15, 15, 0]}
                />
                <Bar
                  dataKey="pa"
                  barSize={8}
                  fill="#38A3A5"
                  legendType="diamond"
                  animationDuration={3000}
                  radius={[0, 15, 15, 0]}
                />
              </ComposedChart>
            </div>
            <div className="subTitleIndustry">Example of the label</div>
            <div className="subTitle_info">
              <span className="subTitle_info-inner">
                <span className="subTitleIndustryBlock"></span>
                US Population
              </span>
              <span className="subTitle_info-inner">
                <span className="subTitleIndustryBlockTwo"></span>
                <span className="subTitle_info-inner">Size</span>
              </span>
            </div>
            <div className="subTitleIndustry_last">
              92.90% of audience matched{' '}
              <span className="subTitleIndustry_last_inner">(53,487,342)</span>
            </div>
          </div>
        </div>
        <div>
          <div className="employment_inner_last employment_innerOne">
            <div className="employment_inner-info employment_inner-infoMakers">
              Leadership And Decision Makers
              <div className="employment_makers">
                <ComposedChart
                  barGap="-19"
                  layout="vertical"
                  width={1000}
                  height={600}
                  data={Makers}
                  margin={{
                    top: 12,
                    right: 20,
                    bottom: 0,
                    left: 100,
                  }}>
                  <CartesianGrid stroke="rgba(34, 87, 122, 0.3)" horizontal={false} />
                  <XAxis
                    type="number"
                    axisLine={false}
                    tickLine={false}
                    tickSize={10}
                    unit="%"
                    ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28]}
                    domain={['dataMin', 'dataMax']}
                    stroke="#38a3a5"
                    fontSize={'14px'}
                    fontWeight={400}
                  />
                  <YAxis
                    interval={0}
                    dataKey="name"
                    width={60}
                    stroke="#38a3a5"
                    type="category"
                    tickLine={false}
                    tickSize="10"
                    tickMargin={10}
                    className={'aaa'}
                  />

                  <Bar
                    dataKey="pv"
                    barSize={28}
                    fill="#80ED99"
                    opacity={'30%'}
                    radius={[0, 15, 15, 0]}
                    animationDuration={3000}
                  />
                  <Bar
                    dataKey="pa"
                    barSize={11}
                    fill="#38A3A5"
                    legendType="diamond"
                    radius={[0, 15, 15, 0]}
                    animationDuration={3000}
                  />
                </ComposedChart>
              </div>
              <div className="subTitleIndustry subTitleMakers">Example of the label</div>
              <div className="subTitle_info">
                <span className="subTitle_info-inner">
                  <span className="subTitleIndustryBlock"></span>
                  US Population
                </span>
                <span className="subTitle_info-inner">
                  <span className="subTitleIndustryBlockTwo"></span>
                  <span className="subTitle_info-inner">Size</span>
                </span>
              </div>
              <div className="subTitleIndustry_last">
                92.90% of audience matched{' '}
                <span className="subTitleIndustry_last_inner">(53,487,342)</span>
              </div>
            </div>
          </div>
          <div className="employment_inners_last industry_lists_last ">
            <div className="employment_inner-info employment_inner-infoBusiness">
              <div>Annual Company Revenue - Small Business </div>
              <div className="employment_makers">
                <ComposedChart
                  barGap="-45"
                  layout="horizontal"
                  width={800}
                  height={400}
                  data={BusinessAnalytics}
                  margin={{
                    top: 50,
                    right: 30,
                    bottom: 20,
                    left: 50,
                  }}>
                  <CartesianGrid stroke="rgba(34, 87, 122, 0.2)" vertical={false} />
                  <XAxis
                    dataKey="name"
                    axisLine={true}
                    tickSize={10}
                    stroke="#38a3a5"
                    tickLine={false}
                  />
                  <YAxis
                    interval={0}
                    unit="%"
                    tickCount={4}
                    width={60}
                    tickLine={false}
                    axisLine={false}
                    tickSize="10"
                    tickMargin={10}
                    className={'aaa'}
                  />

                  <Bar
                    dataKey="pv"
                    barSize={68}
                    fill="#80ED99"
                    opacity={'30%'}
                    radius={[15, 15, 0, 0]}
                    animationDuration={3000}
                  />
                  <Bar
                    dataKey="pa"
                    animationDuration={3000}
                    barSize={24}
                    fill="#38A3A5"
                    radius={[15, 15, 0, 0]}
                  />
                </ComposedChart>
              </div>
              <div className="subTitle_info">
                <span className="subTitle_info-inner">
                  <span className="subTitleIndustryBlock"></span>
                  US Population
                </span>
                <span className="subTitle_info-inner">
                  <span className="subTitleIndustryBlockTwo"></span>
                  <span className="subTitle_info-inner">Size</span>
                </span>
              </div>
              <div className="subTitleIndustry_last">
                92.90% of audience matched{' '}
              </div>
            </div>

            <div className="industry_lists_inner">
              <div className="circle">
                <div className="circle_info">
                  <span className="circleTitle">Investment Type</span>
                  <div className="circle_inner">
                    <div className="circle_one">
                      <PieChart
                        data={[
                          { title: 'Director ', value: 8, color: '#2D8284' },
                          { title: 'CTO ', value: 30, color: '#38A3A5' },
                          { title: 'COO', value: 12, color: '#41B790' },
                          { title: 'CEO', value: 20, color: '#60D2A4' },
                          { title: 'Other', value: 30, color: '#80ED99' },
                        ]}
                        lineWidth={50}
                        startAngle={-90}
                      />
                    </div>
                    <div>
                      <ul className="list">
                        {ProgressBar.map((item, index) => (
                          <div className="listInfo" key={index}>
                            <li className="listInfo_inner">
                              <span className="oval" style={{ background: item.color }}></span>
                              {item.name}
                            </li>
                            <span>{item.progress}</span>
                          </div>
                          
                        ))}
                        
                      </ul>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employment;
