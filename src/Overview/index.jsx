import React from 'react'
import LineChart from '../LineChart';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 6,
    textAlign: 'center',
    borderRadius: 12,
    height: 140,
    margin: 10,
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <Grid item xs={12}>
      <Paper>
        <LineChart />
      </Paper>
      <Grid container>
        <Grid item xs={6} sm={3}>
          <Paper rounded className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper rounded className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper rounded className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper rounded className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
