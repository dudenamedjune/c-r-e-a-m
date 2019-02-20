import React from 'react';
import Grid from '@material-ui/core/Grid';
import LineChart from '../LineChart';
import Card from '../Card';

function CenteredGrid() {
  return (
    <Grid item xs={12}>
      <Card>
        <LineChart />
      </Card>
    </Grid>
  );
}

export default CenteredGrid;
