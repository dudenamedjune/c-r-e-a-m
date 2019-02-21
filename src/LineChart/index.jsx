import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  static getDerivedStateFromProps() {
    //this is not great standard wise just hacking the HACKATHON
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
      width: width - 30,
      height,
    };
  }

  render() {
    const {
      width,
      height,
    } = this.state;
    const {
      data,
    } = this.props;
    return (
      <LineChart
        width={width * 0.95}
        height={height / 4}
        data={data}
        margin={{
          top: 5, right: 30,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        {/* <XAxis dataKey="name" />
        <YAxis /> */}
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
