import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LineChart from '../LineChart';


function CenteredGrid() {
  return (
    <Grid item xs={12}>
      <Paper>
        <LineChart />
      </Paper>
    </Grid>
  );
}

export default CenteredGrid;
