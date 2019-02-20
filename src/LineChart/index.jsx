import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'March', saved: 4000,
  },
  {
    name: 'April', saved: 3000,
  },
  {
    name: 'May', saved: 2000,
  },
  {
    name: 'June', saved: 2780,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  static getDerivedStateFromProps() {
    //this is not great standard wise just hacking the HACKATHON
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
      width: width - 20,
      height,
    };
  }

  render() {
    const {
      width,
      height,
    } = this.state;
    return (
      <LineChart
        width={width * 0.95}
        height={height / 4}
        data={data}
        margin={{
          top: 5, right: 30, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="saved" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
