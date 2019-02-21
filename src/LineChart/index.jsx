import React, { PureComponent, Fragment } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Button from '@material-ui/core/Button';

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

  setYear = () => {
    const {
      accounts: {
        year,
      },
    } = this.props;
    this.setState({
      data: year,
    });
  }

  setThreeYear = () => {
    const {
      accounts: {
        threeYear,
      },
    } = this.props;
    this.setState({
      data: threeYear,
    });
  }

  setAll = () => {
    const {
      accounts: {
        all,
      },
    } = this.props;
    this.setState({
      data: all,
    });
  }

  render() {
    const {
      width,
      height,
      data,
    } = this.state;
    const {
      accounts: {
        year,
      },
    } = this.props;
    return (
      <Fragment>
        <LineChart
          width={width * 0.95}
          height={height / 5}
          data={data || year}
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
        <Button onClick={this.setYear}>1y</Button>
        <Button onClick={this.setThreeYear}>3y</Button>
        <Button onClick={this.setAll}>All</Button>
      </Fragment>

    );
  }
}
