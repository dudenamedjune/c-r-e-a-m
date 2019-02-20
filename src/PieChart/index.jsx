import React, { PureComponent } from 'react';
import {
  PieChart, Pie,
} from 'recharts';

const data01 = [
  { name: 'Group A', value: 100 },
];

const data02 = [
  { name: 'A1', value: 30 },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/w6wsrc52/';

  render() {
    return (
      <PieChart width={800} height={400}>
        <Pie data={data01} cx={200} cy={200} outerRadius={65} innerRadius={60} fill="#8884d8" />
        <Pie data={data02} cx={200} cy={200} innerRadius={70} outerRadius={80} fill="#82ca9d" label endAngle={data02[0].value} />
      </PieChart>
    );
  }
}
