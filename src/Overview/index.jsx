import Grid from '@material-ui/core/Grid';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LineChart from '../LineChart';
import PieChart from '../PieChart';
import Card from '../Card';

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

function CenteredGrid() {
  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12}>
          <Card
            titleText="Hari P"
            subTitleText="10M"
          >
            <PieChart />
            <LineChart />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(CenteredGrid);
