import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginTop: '2rem',
    borderRadius: '1rem',
    marginLeft: '2.5rem',
    paddingBottom: theme.spacing.unit * 2,
    height: '60vh',
    width: '90vw',
  },
  card: {
    marginTop: '2rem',
    borderRadius: '1rem',
    paddingBottom: theme.spacing.unit * 2,
    height: '80vh',
  },
  typo: {
    width: '343px',
    height: '31px',
    fontFamily: 'Open Sans',
    fontSize: '24px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#ffffff',
    marginTop: '3rem',
  },
  caption: {
    width: '318px',
    height: '20px',
    fontFamily: 'SourceSansPro',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#ffffff',
  },
});

function Badges(props) {
  const { classes } = props;

  return (
    <Fragment>
      <img className={classes.root} src="./bling.png" />
      <img className={classes.root} src="./cashCream.png" />
    </Fragment>

  );
}

Badges.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Badges);
