import Grid from '@material-ui/core/Grid';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import LineChart from '../LineChart';
// import PieChart from '../PieChart';
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
  title: {
    fontWeight: '400',
    marginTop: '1rem',
    marginLeft: '1rem',
  },
});

function CenteredGrid(props) {
  const {
    classes,
  } = props;
  return (
    <Grid item xs={12}>
      <Grid container>
        <Typography component="span" variant="h5" className={classes.title} color="textPrimary">
                Hi, Emily
        </Typography>
        <Grid item xs={12}>
          <Card
            titleText="Total Saved: $21,300"
          >
            {/* <PieChart /> */}
            <LineChart />
          </Card>
        </Grid>
        <Grid container>
          <Grid xs={6} sm={3}>
            <Card className="homeCard">
              <Button component={Link} to="#"><img className="homeCardLinkImg" alt="Adjust Goals" src="/icons/ICON_AdjustGoals.svg" /></Button>
            </Card>
          </Grid>
          <Grid xs={6} sm={3}>
            <Card className="homeCard">
              <Button component={Link} to="#"><img className="homeCardLinkImg" alt="Link Account" src="/icons/ICON_LinkAccount.svg" /></Button>
            </Card>
          </Grid>
          <Grid xs={6} sm={3}>
            <Card className="homeCard">
              <Button component={Link} to="#"><img className="homeCardLinkImg" alt="Find Friends" src="/icons/ICON_FindFriends.svg" /></Button>
            </Card>
          </Grid>
          <Grid xs={6} sm={3}>
            <Card className="homeCard">
              <Button component={Link} to="#"><img className="homeCardLinkImg" alt="Savings Tips" src="/icons/ICON_SavingTips.svg" /></Button>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(CenteredGrid);
