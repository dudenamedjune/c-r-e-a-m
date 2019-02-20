import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  PieChart, Pie, ResponsiveContainer,
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
      <div style={{ width: '50%', height: 120 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data01} cx={65} cy={70} outerRadius={25} innerRadius={15} fill="#8884d8" />
            <Pie data={data02} cx={65} cy={70} innerRadius={30} outerRadius={35} fill="#82ca9d" label endAngle={360 * ((data01[0].value / data02[0].value) * 0.1)} />
          </PieChart>
        </ResponsiveContainer>

      </div>

    );
  }
}
