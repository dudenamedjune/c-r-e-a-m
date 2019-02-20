import Grid from '@material-ui/core/Grid';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LineChart from '../LineChart';
import PieChart from '../PieChart';
import Card from '../Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

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
        <Grid container>
          <Grid xs={6} sm={3}>
            <Card className="homeCard">
              <Button component={Link} to="#"><img className="homeCardLinkImg" alt="Adjust Goals" src="/icons/ICON_AdjustGoals.svg"></img></Button>
            </Card>
          </Grid>
          <Grid xs={6} sm={3}>
            <Card className="homeCard">
              <Button component={Link} to="#"><img className="homeCardLinkImg" alt="Link Account" src="/icons/ICON_LinkAccount.svg"></img></Button>
            </Card>
          </Grid>
          <Grid xs={6} sm={3}>
            <Card className="homeCard">
              <Button component={Link} to="#"><img className="homeCardLinkImg" alt="Find Friends" src="/icons/ICON_FindFriends.svg"></img></Button>
            </Card>
          </Grid>
          <Grid xs={6} sm={3}>
            <Card className="homeCard">
              <Button component={Link} to="#"><img className="homeCardLinkImg" alt="Savings Tips" src="/icons/ICON_SavingTips.svg"></img></Button>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(CenteredGrid);
