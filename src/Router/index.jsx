import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { shape } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import axios from 'axios';
import Overview from '../Overview';
import Leaderboard from '../LeaderBoard';
import Badges from '../Badges';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  logo: {
    fontFamily: 'Pacifico',
    color: '#50D986',
    fontWeight: '200',
    paddingTop: '1rem',
    paddingLeft: '1rem',
  },
  icon: {
    paddingTop: '2.2rem',
    paddingRight: '1.2rem',
  },
});

const cleanAccountData = (array, object) => array.reduce((accum, curr) => {
  const {
    [curr]: {
      N: value,
    },
  } = object;
  return [...accum, { value }];
}, []);
class CenteredTabs extends Component {
  state = {
    year: [],
    threeYear: [],
    all: [],
    totalSavings: '',
  }

  componentDidMount() {
    axios.get('https://6wsa4m0onh.execute-api.us-east-2.amazonaws.com/v1')
      .then(({
        data: {
          body,
        },
      }) => {
        const parsed = JSON.parse(body);
        const {
          TotalSavings: {
            N: totalSavings,
          },
          UserAccountsDetails12M: {
            L: [{
              M: quarterly,
            }],
          },
          UserAccountsDetails3Y: {
            L: [{
              M: biYearly,
            }],
          },
          UserAccountsDetailsALL: {
            L: [{
              M: yearly,
            }],
          },
        } = parsed;

        console.log(cleanAccountData(Object.keys(biYearly), biYearly));
        this.setState({
          totalSavings,
          year: cleanAccountData(Object.keys(quarterly), quarterly),
          threeYear: cleanAccountData(Object.keys(biYearly), biYearly),
          all: cleanAccountData(Object.keys(yearly), yearly),
        });
        // console.log(cleanAccountData(yearly));
      });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div className={classes.root}>
          <Paper>
            <Grid container spacing={24}>
              <Grid item xs={10}>
                <Typography variant="h4" color="inherit" className={classes.logo}>
                       cream
                </Typography>
              </Grid>
              <Grid xs={2}>
                <IconButton
                  aria-owns="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                  className={classes.icon}
                >
                  <AccountCircle />
                </IconButton>
              </Grid>
              <Grid xs={12}>
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                >
                  <Tab label={<Link style={{ color: 'inherit' }} to="/"> Overview</Link>} />
                  <Tab label={<Link style={{ color: 'inherit' }} to="/leaderboard"> Leaderboard</Link>} />
                  <Tab label={<Link style={{ color: 'inherit' }} to="/badges"> Badges</Link>} />

                </Tabs>
              </Grid>
            </Grid>
          </Paper>

          <Grid container spacing={24}>
            <Route exact path="/" render={() => <Overview accountInfo={this.state} />} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/badges" component={Badges} />
          </Grid>
        </div>

      </Router>

    );
  }
}

CenteredTabs.propTypes = {
  classes: shape({}).isRequired,
};

export default withStyles(styles)(CenteredTabs);
