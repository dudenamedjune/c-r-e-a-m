import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
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
    paddingTop: '1.2rem',
    paddingRight: '1.2rem',
  },
});

class CenteredTabs extends Component {
  state = {
    value: 0,
  };

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
                  centered
                >
                  <Tab label={<Link to="/"> Overview</Link>} />
                  <Tab label={<Link to="/leaderboard"> Leaderboard</Link>} />
                  <Tab label={<Link to="/badges"> Badges</Link>} />

                </Tabs>
              </Grid>
            </Grid>
          </Paper>

          <Grid container spacing={24}>
            <Route exact path="/" component={Overview} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/badges" component={Badges} />
          </Grid>
        </div>

      </Router>

    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);
